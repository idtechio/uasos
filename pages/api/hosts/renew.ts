import {
  object,
  string,
  coerceTo,
  ContentedError,
} from "@gucciogucci/contented";
import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

const HostPropsType = object({
  id: string,
});

interface HostDBProps {
  db_hosts_id: string;
}

async function renewHost(
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

    const topicNameOrId = process.env.TOPIC_HOST_RENEW;
    const pubResult = await publishMessage(topicNameOrId, {
      db_hosts_id: host.db_hosts_id,
    });

    res
      .status(pubResult.status === PublishStatus.OK ? 200 : 400)
      .json(pubResult);
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

export default withApiAuth(renewHost);
