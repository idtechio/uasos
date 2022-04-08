import { select } from "./db";

export interface MatchInfo {
  isHost: boolean;
  isGuest: boolean;
  hostId: string;
  guestId: string;
}

export async function getMatchInfo(
  matchId: string,
  uid: string
): Promise<false | MatchInfo> {
  const matchInfo: false | MatchInfo[] = await select(
    `SELECT
      m.fnc_hosts_id AS hostId,
      m.fnc_guests_id AS guestId,
      ah.uid = $2 AS isHost,
      ag.uid = $2 AS isGuest
    FROM matches m
    JOIN hosts h ON h.db_hosts_id = m.fnc_hosts_id
    JOIN guests g ON g.db_guests_id = m.fnc_guests_id
    LEFT JOIN accounts ah ON ah.db_accounts_id = h.fnc_accounts_id
    LEFT JOIN accounts ag ON ag.db_accounts_id = g.fnc_accounts_id
    WHERE m.db_match_id = $1 AND (ah.uid = $2 OR ag.uid = $2)`,
    [matchId, uid]
  );

  if (!matchInfo) {
    return false;
  }

  return matchInfo[0];
}
