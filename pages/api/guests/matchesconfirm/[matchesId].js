import { publishMessage } from "../../../../src/helpers/PubSub";

//TODO: DRY pages/api/guests/matchesconfirm/{matchesId}.js
export default async function sendMatchesDecision(req, res) {
  const {
    query: { accepted, matchesId },
  } = req;

  const topicNameOrId = process.env.TOPIC_MATCH_HOST;
  const matches = {
    matches_id: matchesId,
    is_host: false,
    accepted: accepted,
  };
  // eslint-disable-next-line no-console
  console.log(topicNameOrId, matches);
  publishMessage(topicNameOrId, JSON.stringify(matches));
  res.status(200).json({ ok: "ok" });
  res.end();
}
