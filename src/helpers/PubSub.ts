/* eslint-disable no-console */
import { PubSub } from "@google-cloud/pubsub";

export enum PublishStatus {
  OK = "ok",
  ERROR = "error",
}

export interface PublishMessageResult {
  status: PublishStatus;
  error?: string;
}

const pubSubClient = new PubSub();

export async function publishMessage(
  topicNameOrId: string | undefined,
  message: string | object
): Promise<PublishMessageResult> {
  try {
    if (topicNameOrId === undefined) {
      throw new Error("Topic name must be defined");
    }

    const messageContent =
      typeof message === "object" ? JSON.stringify(message) : message;
    const data = Buffer.from(messageContent);

    const messageId = await pubSubClient
      .topic(topicNameOrId)
      .publishMessage({ data });

    console.log(
      `PUBSUB Message ${messageId} published to ${topicNameOrId}: `,
      messageContent
    );
    return { status: PublishStatus.OK };
  } catch (e) {
    console.log(
      `PUBSUB Error while publishing to ${topicNameOrId}: `,
      typeof message === "object" ? JSON.stringify(message) : message
    );

    return {
      status: PublishStatus.ERROR,
      error:
        "Received error while publishing" +
        (e instanceof Error ? `: ${e.message}` : ""),
    };
  }
}
