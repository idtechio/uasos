import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
import {
  /* withApiAuth, */ ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

export interface MatchedOfferProps {
  id: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  listing_country: string;
}

export interface RequestProps {
  id: string;
  country: string;
  phone_num: string;
  email: string;
  city?: string;
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
  status: string;
  match_status?: string;
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

async function getRequestsFromDB(uid: string): Promise<RequestProps[]> {
  const guestsList: false | any[] = await select(
    `SELECT
      g.db_guests_id as guest_id,
      g.city, g.country, g.listing_country,
      g.phone_num, g.email,
      g.beds,
      g.acceptable_shelter_types,
      g.group_relation,
      g.duration_category,
      g.is_pregnant, g.is_with_disability, g.is_with_animal,
      g.is_with_elderly, g.is_ukrainian_nationality,
      g.duration_category,
      g.fnc_status as guest_status,
      m.db_matches_id as match_id,
      m.fnc_status as match_status,
      h.db_hosts_id as host_id,
      h.city as host_city,
      h.country as host_country,
      h.listing_country as host_listing_country,
      h.phone_num as host_phone_num,
      h.email as host_email
    FROM guests g
    JOIN accounts a ON a.db_accounts_id = g.fnc_accounts_id
    LEFT JOIN matches m ON m.fnc_hosts_id = g.db_guests_id
    LEFT JOIN hosts h ON h.db_hosts_id = m.fnc_hosts_id
    WHERE a.uid = $1`,
    [uid]
  );

  if (!guestsList) {
    return [];
  }

  return guestsList.map((g) => ({
    id: g.guest_id,
    city: g.city,
    country: g.country,
    listing_country: g.listing_country,
    phone_num: g.phone_num,
    email: g.email,
    acceptable_shelter_types: g.acceptable_shelter_types,
    beds: g.beds,
    group_relation: g.group_relation,
    is_pregnant: g.is_pregnant,
    is_with_disability: g.is_with_disability,
    is_with_animal: g.is_with_animal,
    is_with_elderly: g.is_with_elderly,
    is_ukrainian_nationality: g.is_ukrainian_nationality,
    duration_category: g.duration_category,
    status: g.guest_status,
    match_status: g.match_status,
    matchedOffer: g.match_id
      ? {
          id: g.host_id,
          city: g.host_city,
          country: g.host_country,
          listing_country: g.host_listing_country,
          phone_num: g.host_phone_num,
          email: g.host_email,
        }
      : undefined,
  }));
}

function getMockRequests(): RequestProps[] {
  return [
    {
      id: "aaa4e25e-aae4-11ec-9a20-1726ed50bb17",
      city: "Warszawa",
      country: "poland",
      listing_country: "poland",
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
      status: "",
      match_status: "",
      matchedOffer: {
        id: "1114e25e-aae4-11ec-9a20-1726ed50bb17",
        city: "Warszawa",
        country: "poland",
        listing_country: "poland",
        phone_num: "+48111222333",
        email: "host1@example.com",
      },
    },
    {
      id: "bbb4e25e-aae4-11ec-9a20-1726ed50bb17",
      city: "",
      country: "poland",
      listing_country: "poland",
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
      status: "",
    },
    {
      id: "ccc4e25e-aae4-11ec-9a20-1726ed50bb17",
      city: "Debrecen",
      country: "hungary",
      listing_country: "hungary",
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
      status: "",
    },
  ];
}

// TODO turn on auth
// export default withApiAuth(getRequests);
export default getRequests;
