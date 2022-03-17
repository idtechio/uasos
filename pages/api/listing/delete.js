import { publishMessage } from "../../../src/helpers/PubSub";

export default async function listingDelete(req, res) {
  const {
    body: { listingType, listingId, listingEmail },
  } = req;

  const topicNameOrId = process.env.TOPIC_DELETE_LISTING;
  const params = {
    listingType,
    listingId,
    listingEmail,
  };

  // eslint-disable-next-line no-console
  console.log(topicNameOrId, params);
  publishMessage(topicNameOrId, JSON.stringify(params));

  res.status(200).json({ ok: "ok" });
  res.end();
}
