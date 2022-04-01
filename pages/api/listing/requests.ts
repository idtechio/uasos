import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

export enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

enum GuestHostStatus {
  ACCEPTED = "accepted", // default status after creation
  REJECTED = "rejected", // for future moderation purpose
  BEING_PROCESS = "being_processed", // during matching process
  MATCHED = "matched", // matched with guest/hosts and awaiting for response
  MATCH_ACCEPTED = "match_accepted", // match accepted by host and guest
  DEFAULT = "default",
}

enum MatchStatus {
  ACCEPTED = "accepted", // match accepted by guest and by host
  REJECTED = "rejected", // match rejected by guest or by host
  TIMEOUT = "timeout", // timeout during awaiting for guest and host response
  AWAITING_RESPONSE = "awaiting_response", // match awaiting for guest and host response
  DEFAULT = "default",
}

export interface MatchedOfferProps {
  id: string;
  name: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;

  shelter_type: Array<string>;
  beds: number;
  acceptable_group_relations: Array<string>;
  ok_for_pregnant: Boolean;
  ok_for_disabilities: Boolean;
  ok_for_animals: Boolean;
  ok_for_elderly: Boolean;
  ok_for_any_nationality: Boolean;
  duration_category: Array<string>;
  transport_included: Boolean;

  status: GuestHostStatus;
}

export interface RequestProps {
  id: string;
  name: string;
  status: GuestHostStatus;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  acceptable_shelter_types: Array<string> | string;
  beds: number;
  group_relation: Array<string> | string;
  is_pregnant: Boolean;
  is_with_disability: Boolean;
  is_with_animal: Boolean;
  is_with_elderly: Boolean;
  is_ukrainian_nationality: Boolean;
  duration_category: Array<string> | string;
  match_id?: string | null;
  match_status?: MatchStatus | null;
  matchedOffer?: MatchedOfferProps;
}

async function getRequests(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  // TODO turn on auth
  // if (!req.decodedToken) {
  //   res.status(400).json({ ok: "not ok" });
  //   res.end();
  //   return;
  // }

  let requests: RequestProps[];

  if (req.decodedToken?.uid) {
    requests = await getRequestsFromDB(req.decodedToken.uid);
  } else {
    requests = getMockRequests();
  }

  res.status(200).json({ ok: "ok", requests });
  res.end();
}

type GuestListItem = RequestProps & {
  guest_id: string;
  guest_name: string;
  guest_status: GuestHostStatus;
  match_id?: string;
  host_id: string;
  host_name: string;
  host_status: GuestHostStatus;
  host_city: string;
  host_country: string;
  host_phone_num: string;
  host_email: string;
  host_shelter_type: string;
  host_beds: number;
  host_acceptable_group_relations: string;
  host_ok_for_pregnant: Boolean;
  host_ok_for_disabilities: Boolean;
  host_ok_for_animals: Boolean;
  host_ok_for_elderly: Boolean;
  host_ok_for_any_nationality: Boolean;
  host_duration_category: string;
  host_transport_included: Boolean;
};

async function getRequestsFromDB(uid: string): Promise<RequestProps[]> {
  const guestsList: false | GuestListItem[] = await select(
    `SELECT
      guest_id,
      guest_status,
      guest_name,

      city,
      country,
      phone_num,
      email,
      beds,
      acceptable_shelter_types,
      group_relation,
      duration_category,
      is_pregnant,
      is_with_disability,
      is_with_animal,
      is_with_elderly,
      is_ukrainian_nationality,
      
      match_id,
      match_status,

      host_id,
      host_name,
      host_city,
      host_country,
      host_phone_num,
      host_email,
      host_status,
      host_shelter_type,
      host_beds,
      host_acceptable_group_relations,
      host_ok_for_pregnant,
      host_ok_for_disabilities,
      host_ok_for_animals,
      host_ok_for_elderly,
      host_ok_for_any_nationality,
      host_duration_category,
      host_transport_included
    FROM requests WHERE account_uid = $1`,
    [uid]
  );

  if (!guestsList) {
    return [];
  }

  return guestsList.map((g) => ({
    id: g.guest_id,
    name: g.guest_name,
    status: g.guest_status,
    city: g.city,
    country: g.country,
    phone_num: g.phone_num,
    email: g.email,
    beds: g.beds,
    acceptable_shelter_types: ungroupString(g.acceptable_shelter_types),
    group_relation: ungroupString(g.group_relation),
    is_pregnant: g.is_pregnant,
    is_with_disability: g.is_with_disability,
    is_with_animal: g.is_with_animal,
    is_with_elderly: g.is_with_elderly,
    is_ukrainian_nationality: g.is_ukrainian_nationality,
    duration_category: ungroupString(g.duration_category),
    match_id: g.match_id,
    match_status: g.match_status,
    matchedOffer: g.match_id
      ? {
          id: g.host_id,
          name: g.host_name,
          city: g.host_city,
          country: g.host_country,
          phone_num: g.host_phone_num,
          email: g.host_email,

          shelter_type: ungroupString(g.host_shelter_type),
          beds: g.host_beds,
          acceptable_group_relations: ungroupString(
            g.host_acceptable_group_relations
          ),
          ok_for_pregnant: g.host_ok_for_pregnant,
          ok_for_disabilities: g.host_ok_for_disabilities,
          ok_for_animals: g.host_ok_for_animals,
          ok_for_elderly: g.host_ok_for_elderly,
          ok_for_any_nationality: g.host_ok_for_any_nationality,
          duration_category: ungroupString(g.host_duration_category),
          transport_included: g.host_transport_included,
          status: g.host_status,
        }
      : undefined,
  }));
}

function getMockRequests(): RequestProps[] {
  return [
    {
      id: "aaa4e25e-aae4-11ec-9a20-1726ed50bb17",
      name: "Zenon Nowak",
      city: "Warszawa",
      country: "poland",
      phone_num: "+48999888777",
      email: "guest3@example.com",
      acceptable_shelter_types: ["room", "flat", "house"],
      beds: 1,
      group_relation: ["family_with_children"],
      is_pregnant: Boolean.TRUE,
      is_with_disability: Boolean.TRUE,
      is_with_animal: Boolean.TRUE,
      is_with_elderly: Boolean.TRUE,
      is_ukrainian_nationality: Boolean.TRUE,
      duration_category: ["longer"],
      status: GuestHostStatus.MATCHED,
      match_status: MatchStatus.AWAITING_RESPONSE,
      match_id: "eee4e25e-aae4-11ec-9a20-1726ed50bb17",
      matchedOffer: {
        id: "1114e25e-aae4-11ec-9a20-1726ed50bb17",
        name: "Jan Kowalski",
        city: "Warszawa",
        country: "poland",
        phone_num: "+48111222333",
        email: "host1@example.com",
        shelter_type: ["room"],
        beds: 1,
        acceptable_group_relations: ["single_woman", "family_with_children"],
        ok_for_pregnant: Boolean.TRUE,
        ok_for_disabilities: Boolean.TRUE,
        ok_for_animals: Boolean.TRUE,
        ok_for_elderly: Boolean.TRUE,
        ok_for_any_nationality: Boolean.TRUE,
        duration_category: ["month"],
        transport_included: Boolean.TRUE,
        status: GuestHostStatus.ACCEPTED,
      },
    },
    {
      id: "bbb4e25e-aae4-11ec-9a20-1726ed50bb17",
      name: "Zenon Nowak",
      city: "",
      country: "poland",
      phone_num: "+48888777666",
      email: "guest3@example.com",
      acceptable_shelter_types: ["flat", "room"],
      beds: 3,
      group_relation: ["spouses"],
      is_pregnant: Boolean.FALSE,
      is_with_disability: Boolean.FALSE,
      is_with_animal: Boolean.FALSE,
      is_with_elderly: Boolean.FALSE,
      is_ukrainian_nationality: Boolean.FALSE,
      duration_category: ["less_than_1_week"],
      status: GuestHostStatus.ACCEPTED,
      match_id: null,
      match_status: null,
      matchedOffer: undefined,
    },
    {
      id: "ccc4e25e-aae4-11ec-9a20-1726ed50bb17",
      name: "Zenon Nowak",
      city: "Debrecen",
      country: "hungary",
      phone_num: "+36777666555",
      email: "guest3@example.com",
      acceptable_shelter_types: ["house"],
      beds: 4,
      group_relation: ["single_woman"],
      is_pregnant: Boolean.TRUE,
      is_with_disability: Boolean.FALSE,
      is_with_animal: Boolean.FALSE,
      is_with_elderly: Boolean.TRUE,
      is_ukrainian_nationality: Boolean.TRUE,
      duration_category: ["2_3_weeks"],
      status: GuestHostStatus.BEING_PROCESS,
      match_id: null,
      match_status: null,
      matchedOffer: undefined,
    },
  ];
}

function ungroupString(str: string[] | string): Array<string> {
  if (typeof str !== "string") {
    return str;
  }

  if (str[0] === "{" && str[str.length - 1] === "}") {
    str = str.substring(1, str.length - 1);
  }
  return str.split(",");
}

// TODO set auth as required
export default withApiAuth(getRequests, true);
