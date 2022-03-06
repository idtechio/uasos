import { getSession } from "next-auth/react";
import { publishMessage } from "../../../src/helpers/PubSub";

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
  children_allowed: Boolean;
  pet_allowed: Boolean;
  handicapped_allowed: Boolean;
  num_people: number;
  period: number;
  pietro?: number;
  listing_country: string;
  shelter_type: string;
  beds: number;
  acceptable_group_relations?: string;
  ok_for_pregnant: Boolean;
  ok_for_disabilities: Boolean;
  ok_for_animals: Boolean;
  ok_for_elderly: Boolean;
  ok_for_any_nationality: Boolean;
  duration_category?: string;
}

export default async function addHost(req, res) {
  const session = await getSession({ req });
  console.log(session);
  if (session) {
    const body = JSON.parse(req.body);
    console.log(body);
    const topicNameOrId = "projects/ukrn-hlpr/topics/hosts";
    const data = JSON.stringify(body);
    res.status(200).json(await publishMessage(topicNameOrId, data));
  } else {
    res.status(401);
  }
  res.end();
}
