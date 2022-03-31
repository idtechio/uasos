import { NextApiRequest, NextApiResponse } from "next";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import { AccountInfoDBProps, getAccountFromDB } from "../account/get";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}
export interface GuestProps {
  name: string;
  country?: string;
  phone_num: string;
  email: string;
  city?: string;
  acceptable_shelter_types: Array<string>;
  beds: number;
  group_relation: Array<string>;
  is_pregnant: Boolean;
  is_with_disability: Boolean;
  is_with_animal: Boolean;
  is_with_elderly: Boolean;
  is_ukrainian_nationality: Boolean;
  duration_category: Array<string>;
}

interface GuestDBProps {
  db_accounts_id: string;
}

async function addGuest(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  try {
    if (!req.decodedToken) {
      throw new Error("token is required");
    }

    const account: false | AccountInfoDBProps = await getAccountFromDB(
      req.decodedToken.uid
    );
    if (!account) {
      throw new Error("user account does not exist");
    }

    const body = JSON.parse(req.body);
    const guestData: GuestProps & GuestDBProps = {
      ...body,
      db_accounts_id: account.db_accounts_id,
    };
    const topicNameOrId = process.env.TOPIC_GUEST_INSERT;
    const pubResult = await publishMessage(topicNameOrId, guestData);

    res
      .status(pubResult.status === PublishStatus.OK ? 200 : 400)
      .json(pubResult);
    res.end();
  } catch (e) {
    res
      .status(400)
      .json({ ok: "not ok", error: e instanceof Error ? e.message : "" });
    res.end();
  }
}

export default withApiAuth(addGuest);
