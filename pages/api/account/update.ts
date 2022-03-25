import { NextApiRequest, NextApiResponse } from "next";
import { UserRecord } from "firebase-admin/auth";

import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import { getUser } from "../../../lib/firebase-admin";
import { publishMessage } from "../../../src/helpers/PubSub";

interface AccountProps {
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
  if (!req.decodedToken) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }

  const user: UserRecord | false = await getUser(req.decodedToken.uid);
  if (!user) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }

  const body = JSON.parse(req.body);

  const data: AccountProps = {
    uid: user.uid,
    name: body.name,
    prefferedLang: body.prefferedLang,
    confirmedEmail: user.emailVerified,
    confirmedPhone: !!user.phoneNumber,
  };

  const topicNameOrId = process.env.TOPIC_USER;
  res.status(200).json(await publishMessage(topicNameOrId, data));
  res.end();
}

export default withApiAuth(updateAccount);
