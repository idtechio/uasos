import { NextApiRequest, NextApiResponse } from "next";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}
export interface HostProps {
  id?: string;
  uid?: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  // zipcode?: string;
  // street?: string;
  // building_no?: string;
  // appartment_no?: string;
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
}

async function addHost(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  try {
    if (!req.decodedToken) {
      throw new Error("token is required");
    }

    const body = JSON.parse(req.body);
    const hostData: HostProps = {
      ...body,
      uid: req.decodedToken.uid,
    };
    const topicNameOrId = process.env.TOPIC_HOST;
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
