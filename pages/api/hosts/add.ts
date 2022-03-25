import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}
export interface HostProps {
  name: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  listing_country: string;
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
}

export default async function addHost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401);
    res.end();
    return;
  }

  const body = JSON.parse(req.body);
  const topicNameOrId = process.env.TOPIC_HOST;
  const pubResult = await publishMessage(topicNameOrId, body);

  res.status(pubResult.status === PublishStatus.OK ? 200 : 400).json(pubResult);
  res.end();
}
