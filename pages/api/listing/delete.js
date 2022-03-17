import { publishMessage } from "../../../src/helpers/PubSub";

export default async function listingDelete(req, res) {
  const body = JSON.parse(req.body);

  const topicNameOrId = process.env.TOPIC_DELETE_LISTING;
  const params = {
    listing_type: body.listing_type,
    listing_id: body.listing_id,
    listing_email: body.listing_email,
  };

  // eslint-disable-next-line no-console
  console.log(topicNameOrId, params);
  publishMessage(topicNameOrId, JSON.stringify(params));

  res.status(200).json({ ok: "ok" });
  res.end();
}
