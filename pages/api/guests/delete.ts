import {
  object,
  string,
  coerceTo,
  ContentedError,
} from "@gucciogucci/contented";
import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

const GuestPropsType = object({
  id: string,
});

interface GuestDBProps {
  db_guests_id: string;
}

async function deleteGuest(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  try {
    if (!req.decodedToken) {
      throw new Error("token is required");
    }

    const body = coerceTo(GuestPropsType, req.body);
    if (body instanceof ContentedError) {
      res.status(400).json({ ok: "not ok", error: body });
      res.end();
      return;
    }

    const guest = await getGuestFromDB(body.id, req.decodedToken.uid);
    if (!guest) {
      throw new Error("Guest's request does not exist");
    }

    const topicNameOrId = process.env.TOPIC_GUEST_DELETE;
    const pubResult = await publishMessage(topicNameOrId, {
      db_guests_id: guest.db_guests_id,
    });

    res
      .status(pubResult.status === PublishStatus.OK ? 200 : 400)
      .json(pubResult);
  } catch (e) {
    res.status(400).json({
      ok: "not ok",
      error: e instanceof Error ? e.message : "",
    });
    res.end();
  }
}

async function getGuestFromDB(
  guestId: string,
  uid: string
): Promise<false | GuestDBProps> {
  const dbGuest: false | GuestDBProps[] = await select(
    `SELECT
      g.db_guests_id
    FROM guests g
    JOIN accounts a ON a.db_accounts_id = g.fnc_accounts_id AND a.uid = $2
    WHERE g.db_guests_id = $1`,
    [guestId, uid]
  );

  if (!dbGuest) {
    return false;
  }

  return dbGuest[0];
}

export default withApiAuth(deleteGuest);
