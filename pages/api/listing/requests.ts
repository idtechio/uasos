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

export interface MatchedOfferProps {
  id: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;
}

export interface RequestProps {
  id: string;
  status: GuestHostStatus;
  country: string;
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
  match_status?: MatchStatus;
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
    `SELECT * FROM requests WHERE account_uid = $1`,
    [uid]
  );

  if (!guestsList) {
    return [];
  }

  return guestsList.map((g) => ({
    id: g.guest_id,
    status: g.guest_status,
    city: g.city,
    country: g.country,
    phone_num: g.phone_num,
    email: g.email,
    beds: g.beds,
    acceptable_shelter_types: g.acceptable_shelter_types,
    group_relation: g.group_relation,
    is_pregnant: g.is_pregnant,
    is_with_disability: g.is_with_disability,
    is_with_animal: g.is_with_animal,
    is_with_elderly: g.is_with_elderly,
    is_ukrainian_nationality: g.is_ukrainian_nationality,
    duration_category: g.duration_category,
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
      matchedOffer: {
        id: "1114e25e-aae4-11ec-9a20-1726ed50bb17",
        city: "Warszawa",
        country: "poland",
        phone_num: "+48111222333",
        email: "host1@example.com",
      },
    },
    {
      id: "bbb4e25e-aae4-11ec-9a20-1726ed50bb17",
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
    },
    {
      id: "ccc4e25e-aae4-11ec-9a20-1726ed50bb17",
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
    },
  ];
}

// TODO set auth as required
export default withApiAuth(getRequests, true);
