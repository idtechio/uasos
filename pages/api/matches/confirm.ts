import { NextApiRequest, NextApiResponse } from "next";
import {
  coerceTo,
  ContentedError,
  Infer,
  match,
  object,
  string,
} from "@gucciogucci/contented";
import { select } from "../../../lib/db";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";

enum StringBoolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

const MatchResultEnum = match(StringBoolean.FALSE).or(
  match(StringBoolean.TRUE)
);

const ConfirmBodyPropsType = object({
  matches_id: string,
  listing_id: string,
  accepted: MatchResultEnum,
});

type ConfirmBodyProps = Infer<typeof ConfirmBodyPropsType>;

interface ConfirmApiRequest extends NextApiRequest {
  body: ConfirmBodyProps;
}

async function sendMatchesConfirm(
  req: ConfirmApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Request HTTP Method Incorrect." });
    return;
  }

  const body = coerceTo(ConfirmBodyPropsType, req.body);
  if (body instanceof ContentedError) {
    res.status(400).json({ message: body });
    return;
  }

  const matchInfo = await getMatchInfo(body.matches_id, body.listing_id);
  if (!matchInfo) {
    res.status(400).json({ message: "Match does not exists" });
    return;
  }

  try {
    const topicNameOrId = process.env.TOPIC_MATCH_HOST;
    const matches = {
      matches_id: body.matches_id,
      listing_id: body.listing_id,
      is_host: matchInfo.is_host,
      accepted: body.accepted === StringBoolean.TRUE ? 1 : 0,
    };

    const pubResult = await publishMessage(topicNameOrId, matches);
    res
      .status(pubResult.status === PublishStatus.OK ? 200 : 400)
      .json(pubResult);
    res.end();
  } catch (e) {
    res
      .status(400)
      .json({ ok: "not ok", error: e instanceof Error ? e.message : "" });
  }
}

interface MatchInfo {
  is_host: boolean;
  is_guest: boolean;
  host_id: string;
  guest_id: string;
}

async function getMatchInfo(
  matchId: string,
  listingId: string
): Promise<false | MatchInfo> {
  const matchInfo: false | MatchInfo[] = await select(
    `SELECT
      m.fnc_hosts_id AS host_id,
      m.fnc_guests_id AS guest_id,
      m.fnc_hosts_id = $2 AS is_host,
      m.fnc_guests_id = $2 AS is_guest
    FROM matches m
    JOIN hosts h ON h.db_hosts_id = m.fnc_hosts_id
    JOIN guests g ON g.db_guests_id = m.fnc_guests_id
    WHERE m.db_matches_id = $1 AND (m.fnc_hosts_id = $2 OR m.fnc_guests_id = $2)`,
    [matchId, listingId]
  );

  if (!matchInfo) {
    return false;
  }

  return matchInfo[0];
}

export default sendMatchesConfirm;
