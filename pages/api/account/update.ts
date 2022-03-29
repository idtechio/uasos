import { NextApiRequest, NextApiResponse } from "next";
import { UserRecord } from "firebase-admin/auth";

import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import { getUser } from "../../../lib/firebase-admin-app";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";

interface AccountDBProps {
  uid: string;
  name: string;
  email: string;
  phone_num: string;
  preferred_lang: string;
  fnc_email_status: string;
  fnc_msisdn_status: string;
}

async function updateAccount(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  try {
    if (!req.decodedToken) {
      throw new Error("token is required");
    }

    const user: UserRecord | Boolean = await getUser(req.decodedToken.uid);
    if (user instanceof Boolean) {
      throw new Error("there is no user");
    }

    let body;
    try {
      body = JSON.parse(req.body);
    } catch (e) {
      body = {};
    }

    const accountData: AccountDBProps = {
      uid: user.uid,
      name: body?.name || user.displayName,
      email: body?.email || user.email,
      phone_num: body?.phoneNumber || user.phoneNumber,
      preferred_lang: body?.prefferedLang,
      fnc_email_status: user.emailVerified ? "065" : "055",
      fnc_msisdn_status: user.phoneNumber ? "065" : "055",
    };

    const topicNameOrId = process.env.TOPIC_ACCOUNT;
    const pubResult = await publishMessage(topicNameOrId, accountData);
    res
      .status(pubResult.status === PublishStatus.OK ? 200 : 400)
      .json(pubResult);
    res.end();

    res.status(200).json({ ok: "ok" });
    res.end();
  } catch (e) {
    res.status(400).json({ ok: "not ok" });
    res.end();
  }
}

export default withApiAuth(updateAccount);
