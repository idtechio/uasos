import { NextApiRequest, NextApiResponse } from "next";
import withApiAuth, {
  ApiAuthTokenDetails,
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

  // TODO get requests details from backend for user req.decodedToken.uid

  const requests: RequestProps[] = [
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
    },
  ];

  res.status(200).json({ ok: "ok", requests });
  res.end();
}

// TODO turn on auth
// export default withApiAuth(getRequests);
export default getRequests;
