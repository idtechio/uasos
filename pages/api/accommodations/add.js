import { getSession } from "next-auth/react";

export default async function getAccommodations(req, res) {
  const session = await getSession({ req });
  console.log(session);
  if (session) {
    // Signed in
    const body = JSON.parse(req.body);

    const topicNameOrId = "projects/ukrn-hlpr/topics/hosts";
    const data = JSON.stringify(body);

    // Imports the Google Cloud client library
    const { PubSub } = require("@google-cloud/pubsub");

    // Creates a client; cache this for further use
    const pubSubClient = new PubSub();

    async function publishMessage() {
      // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
      const dataBuffer = Buffer.from(data);

      try {
        const messageId = await pubSubClient
          .topic(topicNameOrId)
          .publish(dataBuffer);
        console.log(`Message ${messageId} published.`);
        res.status(200).json({ status: "ok" });
      } catch (error) {
        console.error(`Received error while publishing: ${error.message}`);
        res.status(401).json({
          status: "error",
          error: `Received error while publishing: ${error.message}`,
        });
        process.exitCode = 1;
      }
    }

    publishMessage();
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
}
