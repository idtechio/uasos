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
import { publishMessage, PublishStatus } from "../../../src/helpers/PubSub";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";
import { AccountInfoDBProps, getAccountFromDB } from "../account/get";

const trueOrFalse = match("TRUE").or(match("FALSE"));

const GuestPropsType = object({
  "country?": string,
  "name?": string,
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
  fnc_accounts_id: string;
}

async function addGuest(
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

    const body = coerceTo(GuestPropsType, req.body);
    if (body instanceof ContentedError) {
      res.status(400).json({ ok: "not ok", error: body });
      res.end();
      return;
    }

    const guestData: GuestProps & GuestDBProps = {
      ...body,
      fnc_accounts_id: account.db_accounts_id,
      name: account.name,
      email: account.email,
      phone_num: account.phone_num,
    };

    const topicNameOrId = process.env.TOPIC_GUEST_INSERT;
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

export default withApiAuth(addGuest);
