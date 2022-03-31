import { NextApiRequest, NextApiResponse } from "next";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import Account from "../../guest";

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

async function editHost(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  try {
    if (!req.decodedToken) {
      throw new Error("token is required");
    }

    // TODO check permission to edit hosts with db_hosts_id=body.id for user req.decodedToken.uid

    const body = JSON.parse(req.body);
    const hostData: HostProps & { db_hosts_id: string } = {
      ...body,
      db_hosts_id: body.id,
    };
    const topicNameOrId = process.env.TOPIC_HOST_UPDATE;
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

export default withApiAuth(editHost);
