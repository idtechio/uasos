import { NextApiRequest, NextApiResponse } from "next";

import {
  coerceTo,
  ContentedError,
  Infer,
  object,
  string,
} from "@gucciogucci/contented";

import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import { getAccountFromDB } from "../account/get";
import { getGuestFromDB } from "../guests/edit";
import { getHostFromDB } from "../hosts/edit";

const ReportBodyPropsType = object({
  match_id: string,
  "host_id?": string,
  "guest_id?": string,
  report_type: string,
});

type ReportBodyProps = Infer<typeof ReportBodyPropsType>;

type ReportDataType = {
  db_accounts_id: string;
  db_matches_id: string;
  db_hosts_id?: string;
  db_guests_id?: string;
  report_type: string;
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

  const account = await getAccountFromDB(req.decodedToken.uid);

  if (!account) {
    res.status(400).json({ message: "There is no account." });
    return;
  }

  const reportData: ReportDataType = {
    db_accounts_id: account.db_accounts_id,
    db_matches_id: body.match_id,
    report_type: body.report_type,
  };

  if (body.host_id && body.guest_id === undefined) {
    const host = await getHostFromDB(body.host_id, account.uid);
    if (host) {
      reportData.db_hosts_id = host.db_hosts_id;
    } else {
      res
        .status(400)
        .json({ message: `Host not found by host_id: ${body.host_id}.` });
      return;
    }
  } else if (body.guest_id && body.host_id === undefined) {
    const guest = await getGuestFromDB(body.guest_id, account.uid);
    if (guest) {
      reportData.db_guests_id = guest.db_guests_id;
    } else {
      res
        .status(400)
        .json({ message: `Guest not found by guest_id: ${body.guest_id}.` });
      return;
    }
  } else {
    res
      .status(400)
      .json({ message: "Must be either 'guest_id' or 'host_id'." });
    return;
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
