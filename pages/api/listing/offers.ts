import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
import {
  /* withApiAuth, */ ApiAuthTokenDetails,
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
}

export interface OfferProps {
  id: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  listing_country: string;
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
    offers = await getOffersFromDB(req.decodedToken.uid);
  } else {
    offers = getMockOffers();
  }

  res.status(200).json({ ok: "ok", offers });
  res.end();
}

async function getOffersFromDB(uid: string): Promise<OfferProps[]> {
  const hostsList: false | any[] = await select(
    `SELECT
      h.db_hosts_id as host_id,
      city, country, listing_country,
      phone_num, email,
      shelter_type, beds,
      acceptable_group_relations,
      ok_for_pregnant, ok_for_disabilities, ok_for_animals,
      ok_for_elderly, ok_for_any_nationality,
      duration_category, transport_included,
      o.fnc_status as offer_status,
      m.db_matches_id as match_id,
      m.fnc_status as match_status,
      g.db_guests_id as guest_id,
      g.city as guest_city,
      g.country as guest_country,
      g.listing_country as guest_listing_country,
      g.phone_num as guest_phone_num,
      g.email as guest_email
    FROM hosts h
    JOIN accounts a ON a.db_accounts_id = h.fnc_accounts_id
    LEFT JOIN matches m ON m.fnc_hosts_id = h.db_hosts_id
    LEFT JOIN guests g ON g.db_guests_id = m.fnc_guest_id
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
    listing_country: h.listing_country,
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
    matchedRequest: h.match_id
      ? {
          id: h.guest_id,
          city: h.guest_city,
          country: h.guest_country,
          listing_country: h.guest_listing_country,
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
      listing_country: "poland",
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
      matchedRequest: {
        id: "aaa4e25e-aae4-11ec-9a20-1726ed50bb17",
        city: "Warszawa",
        country: "poland",
        listing_country: "poland",
        phone_num: "+48999888777",
        email: "guest3@example.com",
      },
    },
    {
      id: "2224e25e-aae4-11ec-9a20-1726ed50bb17",
      city: "Wrocław",
      country: "poland",
      listing_country: "poland",
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
    },
    {
      id: "3334e25e-aae4-11ec-9a20-1726ed50bb17",
      city: "Budapest",
      country: "hungary",
      listing_country: "hungary",
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
    },
  ];
}

// TODO turn on auth
// export default withApiAuth(getOffers);
export default getOffers;
