import { getSession } from "next-auth/react";
import { publishMessage } from "../../../src/helpers/PubSub";

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
