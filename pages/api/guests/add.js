import { getSession } from "next-auth/react";
import { publishMessage } from "../../../src/helpers/PubSub";

export default async function addGuest(req, res) {
  const session = await getSession({ req });
  onsole.log(session);
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
