import { NextApiRequest, NextApiResponse } from "next";
import {
  object,
  string,
  number,
  arrayOf,
  match,
  Infer,
  coerceTo,
  ContentedError,
} from "@gucciogucci/contented";
import { select } from "../../../lib/db";
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import {
  AccountInfoDBProps,
  getAccountFromDB,
  isAccountVerified,
} from "../account/get";

const trueOrFalse = match("TRUE").or(match("FALSE"));

const GuestPropsType = object({
  id: string,
  "country?": string,
  "phone_num?": string,
  "email?": string,
  "city?": string,
  acceptable_shelter_types: arrayOf(string),
  beds: number,
  group_relation: arrayOf(string),
  is_pregnant: trueOrFalse,
  is_with_disability: trueOrFalse,
  is_with_animal: trueOrFalse,
  is_with_elderly: trueOrFalse,
  is_ukrainian_nationality: trueOrFalse,
  duration_category: arrayOf(string),
});

export type GuestProps = Infer<typeof GuestPropsType>;

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

    const account: false | AccountInfoDBProps = await getAccountFromDB(
      req.decodedToken.uid
    );
    if (!account) {
      throw new Error("user account does not exist");
    }
    if (!isAccountVerified(account)) {
      throw new Error("user email or phone is not verified");
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

    const guestData: GuestProps & GuestDBProps = {
      ...body,
      db_guests_id: guest.db_guests_id,
    };
    const { id: _, ...guestDataWithoutId } = guestData;

    const topicNameOrId = process.env.TOPIC_GUEST_UPDATE;
    const pubResult = await publishMessage(topicNameOrId, guestDataWithoutId);

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
