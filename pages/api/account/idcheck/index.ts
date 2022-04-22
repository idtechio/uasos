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
    res.status(400).json({ message: "There is no account." });
    return;
  }

  const sendLinkResponse = await idCheckClient.sendLink({
    language: account.preferred_lang || "EN",
    // language: "EN",
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
