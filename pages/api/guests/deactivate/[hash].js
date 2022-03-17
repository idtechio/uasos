import { publishMessage } from "../../../../src/helpers/PubSub";

//TODO: DRY pages/api/guests/deactivate/{hash}.js
export default async function sendDeactivation(req, res) {
  const {
    query: { hash },
  } = req;

  const topicNameOrId = process.env.TOPIC_DEACTIVATE_HOST;
  const params = {
    hash: hash,
    is_host: false,
  };
  // eslint-disable-next-line no-console
  console.log(topicNameOrId, params);
  publishMessage(topicNameOrId, JSON.stringify(params));
  res.status(200).json({ ok: "ok" });
  res.end();
}
