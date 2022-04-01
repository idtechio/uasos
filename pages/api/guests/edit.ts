import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}
export interface GuestProps {
  id?: string;
  name: string;
  country?: string;
  phone_num: string;
  email: string;
  city?: string;
  acceptable_shelter_types: Array<string>;
  beds: number;
  group_relation: Array<string>;
  is_pregnant: Boolean;
  is_with_disability: Boolean;
  is_with_animal: Boolean;
  is_with_elderly: Boolean;
  is_ukrainian_nationality: Boolean;
  duration_category: Array<string>;
}

interface GuestDBProps {
  db_guests_id: string;
}

async function editGuest(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  try {
    if (!req.decodedToken) {
      throw new Error("token is required");
    }

    const body = req.body;

    const guest = await getGuestFromDB(body.id, req.decodedToken.uid);
    if (!guest) {
      throw new Error("Guest's request does not exist");
    }

    const guestData: GuestProps & GuestDBProps = {
      ...body,
      db_guests_id: guest.db_guests_id,
    };
    delete guestData.id;

    const topicNameOrId = process.env.TOPIC_GUEST_UPDATE;
    const pubResult = await publishMessage(topicNameOrId, guestData);

    res
      .status(pubResult.status === PublishStatus.OK ? 200 : 400)
      .json(pubResult);
    res.end();
  } catch (e) {
    res
      .status(400)
      .json({ ok: "not ok", error: e instanceof Error ? e.message : "" });
    res.end();
  }
}

async function getGuestFromDB(
  guestId: string,
  uid: string
): Promise<false | GuestDBProps> {
  const dbHost: false | GuestDBProps[] = await select(
    `SELECT
      g.db_guests_id
    FROM guests g
    JOIN accounts a ON a.db_accounts_id = g.fnc_accounts_id AND a.uid = $2
    WHERE g.db_guests_id = $1`,
    [guestId, uid]
  );

  if (!dbHost) {
    return false;
  }

  return dbHost[0];
}

export default withApiAuth(editGuest);
