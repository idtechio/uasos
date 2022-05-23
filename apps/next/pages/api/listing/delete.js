import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";

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

  const pubResult = await publishMessage(topicNameOrId, params);

  res.status(pubResult.status === PublishStatus.OK ? 200 : 400).json(pubResult);
  res.end();
}
