/* eslint-disable @typescript-eslint/ban-types */
import { getSession } from "next-auth/react";
import { publishMessage } from "../../../src/helpers/PubSub";

export enum Boolean {
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
  group_relations: Array<string>;
  is_pregnant: Boolean;
  is_with_disability: Boolean;
  is_with_animal: Boolean;
  is_with_elderly: Boolean;
  is_ukrainian_nationality: Boolean;
  duration_category: Array<string>;
}

export default async function addGuest(req, res) {
  const session = await getSession({ req });
  if (session) {
    const body = JSON.parse(req.body);
    const topicNameOrId = process.env.TOPIC_GUEST;
    const data = JSON.stringify(body);
    res.status(200).json(await publishMessage(topicNameOrId, data));
  } else {
    res.status(401);
  }
  res.end();
}
