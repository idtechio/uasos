import { useSession } from "next-auth/react";

export const sendToEvaporationEngine = async (topic, message) => {
  const { data: session } = useSession();
  if (session) {
    const topicNameOrId = `projects/ukrn-hlpr/topics/${topic}`;
    const { PubSub } = require("@google-cloud/pubsub");
    const pubSubClient = new PubSub();
    const publishMessage = async () => {
      const dataBuffer = Buffer.from(message);
      try {
        const messageId = await pubSubClient
          .topic(topicNameOrId)
          .publish(dataBuffer);
        return { status: "ok" };
      } catch (error) {
        const data = { status: "error", message: error.message };
      }
    };
    publishMessage();
  } else {
    const data = { status: "error", message: "no premisions" };
  }
  return data;
};
