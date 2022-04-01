import { UserRecord } from "firebase-admin/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

import {
  coerceTo,
  ContentedError,
  Infer,
  object,
  string,
} from "@gucciogucci/contented";

import { getUser } from "../../../lib/firebase-admin-app";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

const ReportBodyPropsType = object({
  match_id: string,
  offer_id: string,
  host_id: string,
  report_type: string,
});

type ReportBodyProps = Infer<typeof ReportBodyPropsType>;

interface ListingApiRequest extends NextApiRequest {
  body: ReportBodyProps;
}

async function listingReport(
  req: ListingApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (!req.decodedToken) {
      res.status(400).json({ message: "Token is required" });
      return;
    }

    const user: UserRecord | Boolean = await getUser(req.decodedToken.uid);

    if (user instanceof Boolean) {
      res.status(400).json({ message: "There is no user." });
      return;
    }

    const body = coerceTo(ReportBodyPropsType, req.body);
    if (body instanceof ContentedError) {
      res.status(400).json({ message: body });
      return;
    }

    const reportData: ReportBodyProps = { ...body };

    try {
      const topicNameOrId = process.env.TOPIC_REPORT;
      const pubResult = await publishMessage(topicNameOrId, reportData);
      res
        .status(pubResult.status === PublishStatus.OK ? 200 : 400)
        .json(pubResult);
    } catch (e) {
      res.status(400).json({ ok: "not ok" });
    }
  } else {
    res.status(404).json({ message: "Request HTTP Method Incorrect." });
  }
}

export default withApiAuth(listingReport);
