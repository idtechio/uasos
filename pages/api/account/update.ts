import { NextApiRequest, NextApiResponse } from "next";
import { UserRecord } from "firebase-admin/auth";

import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import { getUser } from "../../../lib/firebase-admin-app";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import { AccountInfoDBProps, getAccountFromDB } from "./get";

interface AccountDBProps {
  db_accounts_id?: string;
  uid: string;
  name?: string;
  email?: string;
  phone_num?: string;
  preferred_lang?: string;
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

    const account: false | AccountInfoDBProps = await getAccountFromDB(
      req.decodedToken.uid
    );

    const body = req.body;

    const accountData: AccountDBProps = {
      uid: user.uid,
      fnc_email_status: user.emailVerified ? "065" : "055",
      fnc_msisdn_status: user.phoneNumber ? "065" : "055",
    };

    let topicNameOrId: string | undefined;
    if (account) {
      accountData.db_accounts_id = account.db_accounts_id;
      body?.name && (accountData.name = body.name);
      accountData.email = body?.email || user.email;
      accountData.phone_num = body?.phone || user.phoneNumber;
      body?.prefferedLang && (accountData.preferred_lang = body.prefferedLang);

      topicNameOrId = process.env.TOPIC_ACCOUNT_UPDATE;
    } else {
      accountData.name = body?.name || user.displayName;
      accountData.email = body?.email || user.email;
      accountData.phone_num = body?.phone || user.phoneNumber;
      accountData.preferred_lang = body?.prefferedLang;

      topicNameOrId = process.env.TOPIC_ACCOUNT_INSERT;
    }

    const pubResult = await publishMessage(topicNameOrId, accountData);
    res
      .status(pubResult.status === PublishStatus.OK ? 200 : 400)
      .json(pubResult);
    res.end();
  } catch (e) {
    res.status(400).json({ ok: "not ok" });
    res.end();
  }
}

export default withApiAuth(updateAccount);
