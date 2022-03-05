import { getSession } from "next-auth/react";
import { publishMessage } from "../../../src/helpers/PubSub";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}
export interface GuestProps {
  name: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  is_children: Boolean;
  is_pet: Boolean;
  is_handicapped: Boolean;
  num_people: number;
  period: number;
  listing_country: string;
  acceptable_shelter_types: string;
  beds: number;
  group_relation: string;
  is_pregnant: Boolean;
  is_with_disability: Boolean;
  is_with_animal: Boolean;
  is_with_elderly: Boolean;
  is_ukrainian_nationality: Boolean;
  duration_category: s;
}

export default async function addGuest(req, res) {
  const session = await getSession({ req });
  console.log(session);
  if (session) {
    const body = JSON.parse(req.body);
    console.log(body);
    const topicNameOrId = "projects/ukrn-hlpr/topics/guests";
    const data = JSON.stringify(body);
    res.status(200).json(await publishMessage(topicNameOrId, data));
  } else {
    res.status(401);
  }
  res.end();
}
