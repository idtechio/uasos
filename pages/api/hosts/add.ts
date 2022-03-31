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
export interface HostProps {
  country: string;
  phone_num: string;
  email: string;
  closest_city: string;
  city: string;
  zipcode: string;
  street: string;
  building_no: string;
  appartment_no: string;
  shelter_type: Array<string>;
  beds: number;
  acceptable_group_relations: Array<string>;
  ok_for_pregnant: Boolean;
  ok_for_disabilities: Boolean;
  ok_for_animals: Boolean;
  ok_for_elderly: Boolean;
  ok_for_any_nationality: Boolean;
  duration_category: Array<string>;
  transport_included: Boolean;
  can_be_verified: Boolean;
}

interface HostDBProps {
  db_accounts_id: string;
}

async function addHost(
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

    const body = req.body;
    const hostData: HostProps & HostDBProps = {
      ...body,
      db_accounts_id: account.db_accounts_id,
    };

    const topicNameOrId = process.env.TOPIC_HOST_INSERT;
    const pubResult = await publishMessage(topicNameOrId, hostData);

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

export default withApiAuth(addHost);
