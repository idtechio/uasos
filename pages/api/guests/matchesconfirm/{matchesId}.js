import { getSession } from "next-auth/react";
import { publishMessage } from "../../../../src/helpers/PubSub";

//TODO: DRY pages/api/hosts/matchesconfirm/{matchesId}.js
export default async function sendMatchesDecision(req, res) {
  const session = await getSession({ req });
  const { matchesId } = req.query;

  const {
    query: { accepted },
  } = req;

  if (session) {
    const topicNameOrId = process.env.TOPIC_MATCH_HOST;
    const matches = {
      matches_id: matchesId,
      is_host: true,
      accepted: accepted,
    };
    res.status(200).json(await publishMessage(topicNameOrId, matches));
  } else {
    res.status(401);
  }
  res.end();
}
