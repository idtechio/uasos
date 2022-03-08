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
}

export default async function addHost(req, res) {
  const session = await getSession({ req });
  if (session) {
    const body = JSON.parse(req.body);
    const topicNameOrId = process.env.TOPIC_HOST;
    const data = JSON.stringify(body);
    res.status(200).json(await publishMessage(topicNameOrId, data));
  } else {
    res.status(401);
  }
  res.end();
}
