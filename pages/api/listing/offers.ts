import { NextApiRequest, NextApiResponse } from "next";
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
  matchedRequest?: MatchedRequestProps;
  status?: string;
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

  // TODO get offers details from backend for user req.decodedToken.uid

  const offers: OfferProps[] = [
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
      status: "acceptedByBoth",
      matchedRequest: {
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
        status: "acceptedByboth",
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

  res.status(200).json({ ok: "ok", offers });
  res.end();
}

// TODO turn on auth
// export default withApiAuth(getOffers);
export default getOffers;
