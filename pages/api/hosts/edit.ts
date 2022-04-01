import { NextApiRequest, NextApiResponse } from "next";
import {
  object,
  string,
  number,
  arrayOf,
  match,
  Infer,
  coerceTo,
  ContentedError,
} from "@gucciogucci/contented";
import { select } from "../../../lib/db";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

const trueOrFalse = match("TRUE").or(match("FALSE"));

const HostPropsType = object({
  id: string,
  country: string,
  phone_num: string,
  email: string,
  closest_city: string,
  city: string,
  zipcode: string,
  street: string,
  building_no: string,
  appartment_no: string,
  shelter_type: arrayOf(string),
  beds: number,
  acceptable_group_relations: arrayOf(string),
  ok_for_pregnant: trueOrFalse,
  ok_for_disabilities: trueOrFalse,
  ok_for_animals: trueOrFalse,
  ok_for_elderly: trueOrFalse,
  ok_for_any_nationality: trueOrFalse,
  duration_category: arrayOf(string),
  transport_included: trueOrFalse,
  can_be_verified: trueOrFalse,
});

export type HostProps = Infer<typeof HostPropsType>;

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

    const body = coerceTo(HostPropsType, req.body);
    if (body instanceof ContentedError) {
      res.status(400).json({ ok: "not ok", error: body });
      res.end();
      return;
    }

    const host = await getHostFromDB(body.id, req.decodedToken.uid);
    if (!host) {
      throw new Error("Host's offer does not exist");
    }

    const hostData: HostProps & HostDBProps = {
      ...body,
      db_hosts_id: host.db_hosts_id,
    };

    const { id: _, ...hostDataWithoutId } = hostData;

    const topicNameOrId = process.env.TOPIC_HOST_UPDATE;
    const pubResult = await publishMessage(topicNameOrId, hostDataWithoutId);

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
