const { PubSub } = require("@google-cloud/pubsub");

const pubSubClient = new PubSub();

export async function publishMessage(topicNameOrId, message) {
  const dataBuffer = Buffer.from(message);
  try {
    const messageId = await pubSubClient
      .topic(topicNameOrId)
      .publish(dataBuffer);
    console.log(`Message ${messageId} published.`);
    return { status: "ok" };
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
    return {
      status: "error",
      error: `Received error while publishing: ${error.message}`,
    };
  }
}
