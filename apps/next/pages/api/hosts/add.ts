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
import {
  AccountInfoDBProps,
  getAccountFromDB,
  isAccountVerified,
} from "../account/get";

const trueOrFalse = match("TRUE").or(match("FALSE"));

const HostPropsType = object({
  country: string,
  "name?": string,
  "phone_num?": string,
  "email?": string,
  closest_city: string,
  city: string,
  zipcode: string,
  street: string,
  building_no: string,
  appartment_no: string,
  shelter_type: arrayOf(string),
  host_type: arrayOf(string),
  beds: number,
  acceptable_group_relations: arrayOf(string),
  ok_for_pregnant: trueOrFalse,
  ok_for_disabilities: trueOrFalse,
  ok_for_animals: trueOrFalse,
  ok_for_elderly: trueOrFalse,
  ok_for_any_nationality: trueOrFalse,
  duration_category: arrayOf(string),
  transport_included: trueOrFalse,
  can_be_verified: trueOrFalse,
});

export type HostProps = Infer<typeof HostPropsType>;

interface HostDBProps {
  fnc_accounts_id: string;
}

async function addHost(
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

    const body = coerceTo(HostPropsType, req.body);
    if (body instanceof ContentedError) {
      res.status(400).json({ ok: "not ok", error: body });
      res.end();
      return;
    }

    const hostData: HostProps & HostDBProps = {
      ...body,
      fnc_accounts_id: account.db_accounts_id,
      name: account.name,
      email: account.email,
      phone_num: account.phone_num,
    };

    const topicNameOrId = process.env.TOPIC_HOST_INSERT;
    const pubResult = await publishMessage(topicNameOrId, hostData);

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

export default withApiAuth(addHost);
