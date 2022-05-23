import { publishMessage, PublishStatus } from "../../../../src/helpers/PubSub";

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

  const pubResult = await publishMessage(topicNameOrId, matches);

  res.status(pubResult.status === PublishStatus.OK ? 200 : 400).json(pubResult);
  res.end();
}
