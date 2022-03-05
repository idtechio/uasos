import { getSession } from "next-auth/react";
import { publishMessage } from "../../../../src/helpers/PubSub";

//TODO: DRY pages/api/guests/matchesconfirm/{matchesId}.js
export default async function sendMatchesDecision(req, res) {
  const session = await getSession({ req });
  const { matchesId } = req.query;

  const {
    query: { accepted },
  } = req;

  if (session) {
    const topicNameOrId = "projects/ukrn-hlpr/topics/matches_status_changes";
    const matches = {
      matches_id: matchesId,
      is_host: false,
      accepted: accepted,
    };
    res.status(200).json(await publishMessage(topicNameOrId, matches));
  } else {
    res.status(401);
  }
  res.end();
}
