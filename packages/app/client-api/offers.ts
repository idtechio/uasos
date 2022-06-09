/* eslint-disable @typescript-eslint/ban-types */
import { getFirebaseToken } from "../helpers/getFirebaseToken";

enum GuestHostStatus {
  ACCEPTED = "accepted", // default status after creation
  REJECTED = "rejected", // for future moderation purpose
  BEING_PROCESS = "being_processed", // during matching process
  MATCHED = "matched", // matched with guest/hosts and awaiting for response
  MATCH_ACCEPTED = "match_accepted", // match accepted by host and guest
  DEFAULT = "default",
}

enum GuestHostType {
  INACTIVE = "inactive", // timeout, waiting to move to LOOKING_FOR_MATCH
  LOOKING_FOR_MATCH = "looking_for_match", // new | during matching process
  FOUND_A_MATCH = "found_a_match", // matched with guest/hosts and awaiting for response
  BEING_CONFIRMED = "being_confirmed", // matched confirmed by one side (host or guest)
  CONFIRMED = "confirmed", // match confirmed by two sides (host and guest)
  REJECTED = "rejected", // match rejected by one side
}

export enum MatchStatus {
  ACCEPTED = "accepted", // match accepted by guest and by host
  REJECTED = "rejected", // match rejected by guest or by host
  TIMEOUT = "timeout", // timeout during awaiting for guest and host response
  AWAITING_RESPONSE = "awaiting_response", // match awaiting for guest and host response
  DEFAULT = "default",
}

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

export interface MatchedRequestProps {
  id: string;
  name: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;

  acceptable_shelter_types: Array<string>;
  beds: number;
  group_relation: Array<string>;
  is_pregnant: Boolean;
  is_with_disability: Boolean;
  is_with_animal: Boolean;
  is_with_elderly: Boolean;
  is_ukrainian_nationality: Boolean;
  duration_category: Array<string>;

  status: GuestHostStatus;
}

interface OfferProps {
  id: string;
  name: string;
  status: GuestHostStatus;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  closest_city: string;
  zipcode: string;
  street: string;
  building_no: string;
  appartment_no: string;
  shelter_type: Array<string>;
  host_type: Array<string>;
  beds: number;
  acceptable_group_relations: Array<string>;
  ok_for_pregnant: Boolean;
  ok_for_disabilities: Boolean;
  ok_for_animals: Boolean;
  ok_for_elderly: Boolean;
  ok_for_any_nationality: Boolean;
  duration_category: Array<string>;
  type: GuestHostType;
  transport_included: Boolean;
  can_be_verified: Boolean;
  match_id?: string | null;
  match_status?: MatchStatus | null;
  matchedRequest?: MatchedRequestProps;
  client_only?: boolean;
}

export type GetOffersListDTO = {
  ok: "ok";
  offers: OfferProps[];
};

export const getOffersList = async () => {
  const token = await getFirebaseToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}api/listing/offers`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (res.status != 200) {
    throw new Error("Couln't fetch offers list, try again later.");
  }

  const body = (await res.json()) as GetOffersListDTO;

  return body;
};
