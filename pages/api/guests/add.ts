import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}
export interface GuestProps {
  name: string;
  country?: string;
  phone_num: string;
  email: string;
  city?: string;
  listing_country?: string;
  acceptable_shelter_types: Array<string>;
  beds: number;
  group_relation: Array<string>;
  is_pregnant: Boolean;
  is_with_disability: Boolean;
  is_with_animal: Boolean;
  is_with_elderly: Boolean;
  is_ukrainian_nationality: Boolean;
  duration_category: Array<string>;
}

type AddGuestBodyType = {
  zipCode?: string;
};

export default async function addGuest(
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
  const topicNameOrId = process.env.TOPIC_GUEST;

  const pubResult = await publishMessage(topicNameOrId, body);
  res.status(pubResult.status === PublishStatus.OK ? 200 : 400).json(pubResult);
  res.end();
}
