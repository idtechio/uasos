import { NextApiRequest, NextApiResponse } from "next";

import {
  coerceTo,
  ContentedError,
  Infer,
  match,
  object,
  string,
} from "@gucciogucci/contented";
import { getMatchInfo } from "../../../lib/repository";

import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import { getAccountFromDB } from "../account/get";

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
  host_id: string,
  guest_id: string,
  report_type: ReportTypeEnum,
});

type ReportBodyProps = Infer<typeof ReportBodyPropsType>;

type ReportDataType = {
  db_accounts_id: string;
  db_matches_id: string;
  db_hosts_id?: string;
  db_guests_id?: string;
  hosts_to_return?: string[];
  hosts_to_disable?: string[];
  guests_to_return?: string[];
  guests_to_disable?: string[];
  report_type: ReportType;
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
    res.status(400).json({ message: "Could not get 'matchInfo'" });
    return;
  }

  const account = await getAccountFromDB(req.decodedToken.uid);

  if (!account) {
    res.status(400).json({ message: "There is no account." });
    return;
  }

  const reportData: ReportDataType = {
    db_accounts_id: account.db_accounts_id,
    db_matches_id: body.match_id,
    db_hosts_id: matchInfo.isHost ? matchInfo.hostId : undefined,
    db_guests_id: matchInfo.isGuest ? matchInfo.guestId : undefined,
    report_type: body.report_type,
  };

  // My guest doesn't require accommodation anymore
  if (
    matchInfo.isHost &&
    body.report_type === ReportType.REPORT_GUEST_INACTIVE
  ) {
    reportData.guests_to_disable = [matchInfo.guestId];
    reportData.hosts_to_return = [matchInfo.hostId];
  }

  // My host can't provide accommodation anymore
  if (
    matchInfo.isGuest &&
    body.report_type === ReportType.REPORT_HOST_INACTIVE
  ) {
    reportData.hosts_to_disable = [matchInfo.hostId];
    reportData.guests_to_return = [matchInfo.guestId];
  }

  // I/other party rejected offer after first contact
  if (body.report_type === ReportType.REPORT_FIRST_CONTACT) {
    reportData.hosts_to_return = [matchInfo.hostId];
    reportData.guests_to_return = [matchInfo.guestId];
  }

  // No contact despite several attempts
  // Host/guest didn't show up to agreed place
  if (
    body.report_type === ReportType.REPORT_NO_CONTACT ||
    body.report_type === ReportType.REPORT_NO_SHOW_UP
  ) {
    if (matchInfo.isHost) {
      reportData.hosts_to_return = [matchInfo.hostId];
      reportData.guests_to_disable = [matchInfo.guestId];
    }
    if (matchInfo.isGuest) {
      reportData.guests_to_return = [matchInfo.guestId];
      reportData.hosts_to_disable = [matchInfo.hostId];
    }
  }

  try {
    const topicNameOrId = process.env.TOPIC_REPORT;
    const pubResult = await publishMessage(topicNameOrId, reportData);
    res
      .status(pubResult.status === PublishStatus.OK ? 200 : 400)
      .json(pubResult);
  } catch (e) {
    res.status(400).json({ ok: "not ok" });
  }
}

export default withApiAuth(listingReport);
