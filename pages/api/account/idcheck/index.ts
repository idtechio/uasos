import { NextApiRequest, NextApiResponse } from "next";
import { idCheckClient } from "../../../../lib/idCheck";

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
  CONFCODE: confCode = "uasos_sdkweb_conf",
  NOTIFICATION_URL: notificationUrl = "test_notif",
  NEXT_PUBLIC_DOMAIN: publicDomain = "http://localhost:3000/",
} = { ...process.env };

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

  const account: AccountInfoDBProps | false = await getAccountFromDB(
    req.decodedToken.uid
  );

  if (!account) {
    // res.status(400).json({ message: "There is no account." });
    // return;
  }

  const sendLinkResponse = await idCheckClient.sendLink({
    confCode,
    fileUid: `file-${new Date().getTime()}`,
    // language: account.preferred_lang,
    language: "EN",
    notificationUrl,
    publicDomain,
  });

  if (!sendLinkResponse.ok) {
    const error = JSON.parse(await sendLinkResponse.text());
    console.error("Error:", error);
    res.status(sendLinkResponse.status).json({ error });
    return;
  }

  const data: SendLinkDataType = await sendLinkResponse.json();
  res.status(201).json(data);
}

export default withApiAuth(index);
