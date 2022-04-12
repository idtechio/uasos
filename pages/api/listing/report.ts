import { NextApiRequest, NextApiResponse } from "next";

import {
  coerceTo,
  ContentedError,
  Infer,
  match,
  object,
  string,
} from "@gucciogucci/contented";

import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import { select } from "../../../lib/db";

export enum ReportType {
  REPORT_GUEST_INACTIVE = "report_guest_inactive", // My guest doesn't require accommodation anymore
  REPORT_HOST_INACTIVE = "report_host_inactive", // My host can't provide accommodation anymore
  REPORT_FIRST_CONTACT = "report_first_contact", // I/other party rejected offer after first contact
  REPORT_NO_CONTACT = "report_no_contact", // No contact despite several attempts
  REPORT_NO_SHOW_UP = "report_no_show_up", // Host/guest didn't show up to agreed place
}

const ReportTypeEnum = match(ReportType.REPORT_GUEST_INACTIVE)
  .or(match(ReportType.REPORT_HOST_INACTIVE))
  .or(match(ReportType.REPORT_FIRST_CONTACT))
  .or(match(ReportType.REPORT_NO_CONTACT))
  .or(match(ReportType.REPORT_NO_SHOW_UP));

const ReportBodyPropsType = object({
  match_id: string,
  "host_id?": string,
  "guest_id?": string,
  report_type: ReportTypeEnum,
});

type ReportBodyProps = Infer<typeof ReportBodyPropsType>;

type ReportDataType = {
  db_matches_id: string;
  hosts_to_return?: string[];
  hosts_to_disable?: string[];
  guests_to_return?: string[];
  guests_to_disable?: string[];
};

interface ReportApiRequest extends NextApiRequest {
  body: ReportBodyProps;
}

async function listingReport(
  req: ReportApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Request HTTP Method Incorrect." });
    return;
  }

  if (!req.decodedToken) {
    res.status(400).json({ message: "Token is required." });
    return;
  }

  const body = coerceTo(ReportBodyPropsType, req.body);

  if (body instanceof ContentedError) {
    res.status(400).json({ message: body });
    return;
  }

  const matchInfo = await getMatchInfo(body.match_id, req.decodedToken.uid);

  if (!matchInfo) {
    res.status(400).json({ message: "Match does not exists" });
    return;
  }

  const reportData: ReportDataType = {
    db_matches_id: body.match_id,
  };

  // My guest doesn't require accommodation anymore
  if (
    matchInfo.is_host &&
    body.report_type === ReportType.REPORT_GUEST_INACTIVE
  ) {
    reportData.guests_to_disable = [matchInfo.guest_id];
    reportData.hosts_to_return = [matchInfo.host_id];
  }

  // My host can't provide accommodation anymore
  if (
    matchInfo.is_guest &&
    body.report_type === ReportType.REPORT_HOST_INACTIVE
  ) {
    reportData.hosts_to_disable = [matchInfo.host_id];
    reportData.guests_to_return = [matchInfo.guest_id];
  }

  // I/other party rejected offer after first contact
  if (body.report_type === ReportType.REPORT_FIRST_CONTACT) {
    reportData.hosts_to_return = [matchInfo.host_id];
    reportData.guests_to_return = [matchInfo.guest_id];
  }

  // No contact despite several attempts
  // Host/guest didn't show up to agreed place
  if (
    body.report_type === ReportType.REPORT_NO_CONTACT ||
    body.report_type === ReportType.REPORT_NO_SHOW_UP
  ) {
    if (matchInfo.is_host) {
      reportData.hosts_to_return = [matchInfo.host_id];
      reportData.guests_to_disable = [matchInfo.guest_id];
    }
    if (matchInfo.is_guest) {
      reportData.guests_to_return = [matchInfo.guest_id];
      reportData.hosts_to_disable = [matchInfo.host_id];
    }
  }

  try {
    const topicNameOrId = process.env.TOPIC_MATCHES_SPLIT;
    const pubResult = await publishMessage(topicNameOrId, reportData);
    res
      .status(pubResult.status === PublishStatus.OK ? 200 : 400)
      .json(pubResult);
  } catch (e) {
    res.status(400).json({ ok: "not ok" });
  }
}

export interface MatchInfo {
  is_host: boolean;
  is_guest: boolean;
  host_id: string;
  guest_id: string;
}

export async function getMatchInfo(
  matchId: string,
  uid: string
): Promise<false | MatchInfo> {
  const matchInfo: false | MatchInfo[] = await select(
    `SELECT
      m.fnc_hosts_id AS host_id,
      m.fnc_guests_id AS guest_id,
      ah.uid = $2 AS is_host,
      ag.uid = $2 AS is_guest
    FROM matches m
    JOIN hosts h ON h.db_hosts_id = m.fnc_hosts_id
    JOIN guests g ON g.db_guests_id = m.fnc_guests_id
    LEFT JOIN accounts ah ON ah.db_accounts_id = h.fnc_accounts_id
    LEFT JOIN accounts ag ON ag.db_accounts_id = g.fnc_accounts_id
    WHERE m.db_matches_id = $1 AND (ah.uid = $2 OR ag.uid = $2)`,
    [matchId, uid]
  );

  if (!matchInfo) {
    return false;
  }

  return matchInfo[0];
}

export default withApiAuth(listingReport);
