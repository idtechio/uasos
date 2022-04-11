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

    if (process.env.ENV_NAME === "local") {
      return await publishLocal(topicNameOrId, messageContent);
    } else {
      return await publishCloud(topicNameOrId, messageContent);
    }
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

async function publishCloud(
  topicNameOrId: string,
  message: string
): Promise<PublishMessageResult> {
  const data = Buffer.from(message);

  const messageId = await pubSubClient
    .topic(topicNameOrId)
    .publishMessage({ data });

  console.log(
    `PUBSUB Message ${messageId} published to ${topicNameOrId}: `,
    message
  );
  return { status: PublishStatus.OK };
}

async function publishLocal(
  topicNameOrId: string,
  message: string
): Promise<PublishMessageResult> {
  const body = {
    data: {
      data: message,
    },
  };

  fetch(
    `http://localhost${
      process.env.LOCAL_PUBSUB_PORT ? ":" + process.env.LOCAL_PUBSUB_PORT : ""
    }/${topicNameOrId}`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    }
  );

  console.log(`PUBSUB Message published to local ${topicNameOrId}: `, message);
  return { status: PublishStatus.OK };
}
