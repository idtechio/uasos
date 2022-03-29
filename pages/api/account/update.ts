import { NextApiRequest, NextApiResponse } from "next";
import { UserRecord } from "firebase-admin/auth";

import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import { getUser } from "../../../lib/firebase-admin-app";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";

export interface AccountProps {
  uid: string;
  name: string;
  prefferedLang: string;
  confirmedEmail: Boolean;
  confirmedPhone: Boolean;
}

async function updateAccount(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  console.log("XXXX IS DECODED");
  if (!req.decodedToken) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }
  console.log("XXXX GET USER");

  const user: UserRecord | Boolean = await getUser(req.decodedToken.uid);
  if (user instanceof Boolean) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }

  let body;
  try {
    body = JSON.parse(req.body);
  } catch (e) {
    body = {};
  }

  const accountData: AccountProps = {
    uid: user.uid,
    name: body?.name,
    prefferedLang: body?.prefferedLang,
    confirmedEmail: user.emailVerified,
    confirmedPhone: !!user.phoneNumber,
  };

  const topicNameOrId = process.env.TOPIC_ACCOUNT;
  const pubResult = await publishMessage(topicNameOrId, accountData);
  res.status(pubResult.status === PublishStatus.OK ? 200 : 400).json(pubResult);
  res.end();
}

export default withApiAuth(updateAccount);
