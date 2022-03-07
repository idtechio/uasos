import { getSession } from "next-auth/react";
import { publishMessage } from "../../../src/helpers/PubSub";

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
  is_pregnant: boolean;
  is_with_disability: boolean;
  is_with_animal: boolean;
  is_with_elderly: boolean;
  is_ukrainian_nationality: boolean;
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
