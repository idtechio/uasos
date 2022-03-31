import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

enum Boolean {
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

export interface MatchedRequestProps {
  id: string;
  name: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;
}

export interface OfferProps {
  id: string;
  name: string;
  status: GuestHostStatus;
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
  match_id?: string | null;
  match_status?: MatchStatus | null;
  matchedRequest?: MatchedRequestProps;
}

async function getOffers(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  // TODO turn on auth
  // if (!req.decodedToken) {
  //   res.status(400).json({ ok: "not ok" });
  //   res.end();
  //   return;
  // }

  let offers: OfferProps[];

  if (req.decodedToken?.uid) {
    offers = await getOffersFromDB(req.decodedToken.uid);
  } else {
    offers = getMockOffers();
  }

  res.status(200).json({ ok: "ok", offers });
  res.end();
}

type HostListitem = OfferProps & {
  host_id: string;
  host_name: string;
  host_status: GuestHostStatus;
  match_id?: string;
  guest_id: string;
  guest_name: string;
  guest_city: string;
  guest_country: string;
  guest_phone_num: string;
  guest_email: string;
};

async function getOffersFromDB(uid: string): Promise<OfferProps[]> {
  const hostsList: false | HostListitem[] = await select(
    `SELECT
      host_id,
      host_status,
      host_name,

      city,
      country,
      phone_num,
      email,
      shelter_type,
      beds,
      acceptable_group_relations,
      ok_for_pregnant,
      ok_for_disabilities,
      ok_for_animals,
      ok_for_elderly,
      ok_for_any_nationality,
      duration_category,
      transport_included,
      
      match_id,
      match_status,

      guest_id,
      guest_name,
      guest_city,
      guest_country,
      guest_phone_num,
      guest_email
    FROM offers WHERE account_uid = $1`,
    [uid]
  );

  if (!hostsList) {
    return [];
  }

  return hostsList.map((h) => ({
    id: h.host_id,
    name: h.host_name,
    status: h.host_status,
    city: h.city,
    country: h.country,
    phone_num: h.phone_num,
    email: h.email,
    shelter_type: h.shelter_type,
    beds: h.beds,
    acceptable_group_relations: h.acceptable_group_relations,
    ok_for_pregnant: h.ok_for_pregnant,
    ok_for_disabilities: h.ok_for_disabilities,
    ok_for_animals: h.ok_for_animals,
    ok_for_elderly: h.ok_for_elderly,
    ok_for_any_nationality: h.ok_for_any_nationality,
    duration_category: h.duration_category,
    transport_included: h.transport_included,
    match_status: h.match_status,
    match_id: h.match_id,
    matchedRequest: h.match_id
      ? {
          id: h.guest_id,
          name: h.guest_name,
          city: h.guest_city,
          country: h.guest_country,
          phone_num: h.guest_phone_num,
          email: h.guest_email,
        }
      : undefined,
  }));
}

function getMockOffers(): OfferProps[] {
  return [
    {
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
      status: GuestHostStatus.MATCH_ACCEPTED,
      match_id: "eeee25e-aae4-11ec-9a20-1726ed50bb17",
      match_status: MatchStatus.ACCEPTED,
      matchedRequest: {
        id: "aaa4e25e-aae4-11ec-9a20-1726ed50bb17",
        name: "Zenon Nowak",
        city: "Warszawa",
        country: "poland",
        phone_num: "+48999888777",
        email: "guest3@example.com",
      },
    },
    {
      id: "2224e25e-aae4-11ec-9a20-1726ed50bb17",
      name: "Jan Kowalski",
      city: "Wrocław",
      country: "poland",
      phone_num: "+48222333444",
      email: "host1@example.com",
      shelter_type: ["house"],
      beds: 3,
      acceptable_group_relations: ["single_man", "single_woman"],
      ok_for_pregnant: Boolean.FALSE,
      ok_for_disabilities: Boolean.FALSE,
      ok_for_animals: Boolean.FALSE,
      ok_for_elderly: Boolean.FALSE,
      ok_for_any_nationality: Boolean.FALSE,
      duration_category: ["less_than_1_week"],
      transport_included: Boolean.FALSE,
      status: GuestHostStatus.ACCEPTED,
      match_id: null,
      match_status: null,
      matchedRequest: undefined,
    },
    {
      id: "3334e25e-aae4-11ec-9a20-1726ed50bb17",
      name: "Jan Kowalski",
      city: "Budapest",
      country: "hungary",
      phone_num: "+36333444555",
      email: "host1@example.com",
      shelter_type: ["flat"],
      beds: 4,
      acceptable_group_relations: [
        "single_woman",
        "family_with_children",
        "unrelated_group",
        "mother_with_children",
      ],
      ok_for_pregnant: Boolean.TRUE,
      ok_for_disabilities: Boolean.FALSE,
      ok_for_animals: Boolean.FALSE,
      ok_for_elderly: Boolean.TRUE,
      ok_for_any_nationality: Boolean.TRUE,
      duration_category: ["2_3_weeks"],
      transport_included: Boolean.FALSE,
      status: GuestHostStatus.BEING_PROCESS,
      match_id: null,
      match_status: null,
      matchedRequest: undefined,
    },
  ];
}

// TODO set auth as required
export default withApiAuth(getOffers, true);
