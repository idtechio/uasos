import { NextApiRequest, NextApiResponse } from "next";
import IdCheckClient from "../../../../lib/idCheck";

import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../../src/helpers/withAPIAuth";
import { getAccountFromDB } from "../get";
import type { AccountInfoDBProps } from "../get";

interface SendLinkDataType {
  uid: string;
  url: string;
  shortenedLink: string;
  expirationDate: string;
}

const {
  SDKWEB_URL: sdkWebUrl = "https://sdkweb-test.idcheck.io",
  KEYCLOAK_URL: keycloakUrl = "https://api-test.ariadnext.com",
  CIS_URL: cisUrl = "https://cis.vlan-341.demo.ariadnext.com:10443",
  CIS_USERNAME: username = "uasos@ariadnext.com",
  CIS_PASSWORD: password = "zUKo_mC_kj1I",
  CIS_REALM: realm = "uasos",
  CONFCODE: confCode = "uasos_sdkweb_conf",
  NOTIFICATION_URL: notificationUrl = "test_notif",
  ERROR_REDIRECT_URL: errorRedirectUrl = "https://localhost:3000/idcheck/error",
  SUCCESS_REDIRECT_URL:
    successRedirectUrl = "https://localhost:3000/idcheck/success",
} = { ...process.env };

const client = new IdCheckClient(sdkWebUrl, keycloakUrl, cisUrl);

async function index(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(404).json({ message: "Request HTTP Method Incorrect." });
    return;
  }

  if (!req.decodedToken) {
    res.status(400).json({ message: "Token is required." });
    return;
  }

  const account: false | AccountInfoDBProps = await getAccountFromDB(
    req.decodedToken.uid
  );

  if (!account) {
    res.status(400).json({ message: "There is no account." });
    return;
  }

  const loginResponse = await client.login(username, password, realm);

  if (loginResponse.status !== 200) {
    const error = JSON.parse(await loginResponse.text());
    console.error("Error:", error);
    res.status(loginResponse.status).json({ error });
    return;
  }

  client.accessToken = (await loginResponse.json()).access_token;

  const sendLinkResponse = await client.sendLink({
    realm,
    confCode,
    fileUid: `file-${new Date().getTime()}`,
    language: account.preferred_lang,
    // language: "EN",
    notificationUrl,
    errorRedirectUrl,
    successRedirectUrl,
  });

  if (sendLinkResponse.status !== 201) {
    const error = JSON.parse(await sendLinkResponse.text());
    console.error("Error:", error);
    res.status(sendLinkResponse.status).json({ error });
    return;
  }

  const data: SendLinkDataType = await sendLinkResponse.json();
  res.status(201).json(data);
}

export default withApiAuth(index);
