import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

export interface MatchedRequestProps {
  id: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  listing_country: string;
  acceptable_shelter_types: Array<string>;
  beds: number;
  group_relation: Array<string>;
  is_pregnant: Boolean;
  is_with_disability: Boolean;
  is_with_animal: Boolean;
  is_with_elderly: Boolean;
  is_ukrainian_nationality: Boolean;
  duration_category: Array<string>;
  status?: string;
}

export interface OfferProps {
  id: string;
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
  status: string;
  match_status?: string;
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
    console.log("from db");
    offers = await getOffersFromDB(req.decodedToken.uid);
  } else {
    console.log("mock");
    offers = getMockOffers();
  }

  res.status(200).json({ ok: "ok", offers });
  res.end();
}

type HostListitem = OfferProps & {
  host_id: string;
  host_status: string;
  match_status: string;
  match_id?: string;
  guest_id: string;
  guest_city: string;
  guest_country: string;
  guest_phone_num: string;
  guest_email: string;
};

async function getOffersFromDB(uid: string): Promise<OfferProps[]> {
  const hostsList: false | HostListitem[] = await select(
    `SELECT
      h.db_hosts_id as host_id,
      h.city, h.country,
      h.phone_num, h.email,
      h.shelter_type, h.beds,
      h.acceptable_group_relations,
      h.ok_for_pregnant, h.ok_for_disabilities, h.ok_for_animals,
      h.ok_for_elderly, h.ok_for_any_nationality,
      h.duration_category, null as transport_included, -- h.transport_included,
      h.fnc_status as host_status,
      m.db_matches_id as match_id,
      m.fnc_status as match_status,
      g.db_guests_id as guest_id,
      g.city as guest_city,
      g.country as guest_country,
      g.phone_num as guest_phone_num,
      g.email as guest_email
    FROM hosts h
    JOIN accounts a ON a.db_accounts_id = h.fnc_accounts_id
    LEFT JOIN matches m ON m.fnc_hosts_id = h.db_hosts_id
    LEFT JOIN guests g ON g.db_guests_id = m.fnc_guests_id
    WHERE a.uid = $1`,
    [uid]
  );

  if (!hostsList) {
    return [];
  }

  return hostsList.map((h) => ({
    id: h.host_id,
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
    status: h.host_status,
    match_status: h.match_status,
    matchedRequest: h.match_id
      ? {
          id: h.guest_id,
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
      status: "",
      match_status: "",
      matchedRequest: {
        id: "aaa4e25e-aae4-11ec-9a20-1726ed50bb17",
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
        status: "acceptedByboth",
      },
    },
    {
      id: "2224e25e-aae4-11ec-9a20-1726ed50bb17",
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
      status: "",
    },
    {
      id: "3334e25e-aae4-11ec-9a20-1726ed50bb17",
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
      status: "",
    },
  ];
}

// TODO set auth as required
export default withApiAuth(getOffers, true);
