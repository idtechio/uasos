import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
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
  db_hosts_id: string;
}

async function editHost(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  try {
    if (!req.decodedToken) {
      throw new Error("token is required");
    }

    const body = JSON.parse(req.body);

    const host = await getHostFromDB(body.id, req.decodedToken.uid);
    if (!host) {
      throw new Error("Host's offer does not exist");
    }

    const hostData: HostProps & HostDBProps = {
      ...body,
      db_hosts_id: host.db_hosts_id,
    };
    delete hostData.id;

    const topicNameOrId = process.env.TOPIC_HOST_UPDATE;
    const pubResult = await publishMessage(topicNameOrId, hostData);

    res
      .status(pubResult.status === PublishStatus.OK ? 200 : 400)
      .json(pubResult);
    res.end();
  } catch (e) {
    res.status(400).json({
      ok: "not ok",
      error: e instanceof Error ? e.message : "",
    });
    res.end();
  }
}

async function getHostFromDB(
  hostId: string,
  uid: string
): Promise<false | HostDBProps> {
  const dbHost: false | HostDBProps[] = await select(
    `SELECT
      h.db_hosts_id
    FROM hosts h
    JOIN accounts a ON a.db_accounts_id = h.fnc_accounts_id AND a.uid = $2
    WHERE h.db_hosts_id = $1`,
    [hostId, uid]
  );

  if (!dbHost) {
    return false;
  }

  return dbHost[0];
}

export default withApiAuth(editHost);
