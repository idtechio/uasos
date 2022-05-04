import type { NextApiRequest, NextApiResponse } from "next";

import { publishMessage, PublishStatus } from "../../../../src/helpers/PubSub";
import { getAccountFromDB } from "../get";
import { idCheckClient } from "../../../../lib/idCheck";

interface NotificationBodyType {
  eventData: {
    onboardingStatus: string;
    cisData: {
      _links: Array<{
        rel: string;
        href: string;
      }>;
      cisFileUid: string;
    };
  };
  event: string;
  resourceType: string;
}

export enum GlobalStatus {
  OK = "OK",
  ERROR = "ERROR",
  WARN = "WARN",
  OBSOLETE = "OBSOLETE",
  NONE = "NONE",
}

interface ResultResponseType {
  lastReport?: {
    globalStatus?: GlobalStatus;
  };
}

interface NotificationApiRequest extends NextApiRequest {
  body: NotificationBodyType;
}

async function notification(req: NotificationApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Request HTTP Method Incorrect." });
    return;
  }
  res.status(200).end();

  if (
    req.body.eventData.onboardingStatus !== "SUCCESS" &&
    req.body.resourceType !== "ONBOARDING" &&
    req.body.event !== "END_ONBOARDING"
  ) {
    return;
  }

  const uid = req.body.eventData.cisData.cisFileUid;
  const links = req.body.eventData.cisData._links.find(
    (l) => l.rel === "CIS_FILE"
  );
  let url: string;
  if (links) {
    url = links.href;
  } else {
    return;
  }

  const response = await idCheckClient.getStatus(url);
  if (!response.ok) {
    const error = JSON.parse(await response.text());
    console.error("Error:", error);
    return;
  }

  const result: ResultResponseType = await response.json();
  if (!result?.lastReport?.globalStatus) {
    return;
  }

  const account = await getAccountFromDB(uid);
  if (account) {
    const topicName = process.env.TOPIC_ACCOUNT_UPDATE;

    const pubResult = await publishMessage(topicName, {
      db_accounts_id: account.db_accounts_id,
      identity_verified: result.lastReport.globalStatus,
    });
    if (pubResult.status !== PublishStatus.OK) {
      console.error("Could not update Identity Verification status!");
    }
  }
}

export default notification;
