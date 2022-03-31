import { OfferProps } from "../../../pages/api/listing/offers";
import { RequestProps } from "../../../pages/api/listing/requests";
import { GetOffersListDTO } from "../../client-api/offers";
import { GetRequestsListDTO } from "../../client-api/requests";
import { AccommodationTime } from "../../helpers/FormTypes";
import { MatchState, Offer, Request } from "./types";

enum MatchStatus {
  ACCEPTED = "accepted", // match accepted by guest and by host
  REJECTED = "rejected", // match rejected by guest or by host
  TIMEOUT = "timeout", // timeout during awaiting for guest and host response
  AWAITING_RESPONSE = "awaiting_response", // match awaiting for guest and host response
  DEFAULT = "default",
}

export const toOffers: (xs: GetOffersListDTO) => Offer[] = (xs) =>
  xs.offers.map(toOffer);

export const toRequests: (xs: GetRequestsListDTO) => Request[] = (
  xs: GetRequestsListDTO
) => xs.requests.map(toRequest);

const toOffer = (o: OfferProps) => ({
  id: o.id,
  imageUrl:
    "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/617b2ba9b187491e7c56dfca/getting-started-on-airbnb-optimized.jpg", //TODO: need to be mapped
  beds: o.beds,
  city: o.city,
  duration: toAccomodationTime(o.duration_category),
  name: toName(o), //TODO: check if name is shelter_type
  state: toMatchOfferState(o), //TODO: check match state algo
});
const toMatchOfferState: (o: OfferProps) => MatchState = (o) => {
  const matchStatus = o.match_status;
  if (!matchStatus) {
    return "LOOKING_FOR_A_MATCH";
  }
  switch (matchStatus) {
    case MatchStatus.ACCEPTED:
      return "CONFIRMED";
    case MatchStatus.AWAITING_RESPONSE:
      return "FOUND_MATCH";
    case MatchStatus.DEFAULT:
      return "LOOKING_FOR_A_MATCH";
    case MatchStatus.REJECTED:
      return "INACTIVE";
    case MatchStatus.TIMEOUT:
      return "INACTIVE";
  }
  return "LOOKING_FOR_A_MATCH";
};

const toRequest: (r: RequestProps) => Request = (r) => ({
  id: r.id,
  beds: r.beds,
  city: r.city ?? "N/A",
  duration: toAccomodationTime(r.duration_category),
  state: toMatchRequestState(r),
});

const toName: (_: OfferProps) => string = (o) =>
  o.shelter_type.length === 0 ? "N/A" : o.shelter_type.join(", ");
const toAccomodationTime: (duration_category: string[]) => AccommodationTime = (
  duration_category
) => {
  return (
    duration_category
      .map((c) => {
        switch (c) {
          case "less_than_week":
            return AccommodationTime.LESS_THAN_WEEK;
          case "week":
            return AccommodationTime.WEEK;
          case "two_weeks":
            return AccommodationTime.TWO_WEEKS;
          case "month":
            return AccommodationTime.MONTH;
          case "longer":
            return AccommodationTime.LONGER;
          default:
            return undefined;
        }
      })
      .slice(-1)
      .pop() ?? AccommodationTime.LESS_THAN_WEEK
  );
};
const toMatchRequestState: (o: RequestProps) => MatchState = (r) => {
  const matchStatus = r.match_status;
  if (!matchStatus) {
    return "LOOKING_FOR_A_MATCH";
  }
  switch (matchStatus) {
    case MatchStatus.ACCEPTED:
      return "CONFIRMED";
    case MatchStatus.AWAITING_RESPONSE:
      return "FOUND_MATCH";
    case MatchStatus.DEFAULT:
      return "LOOKING_FOR_A_MATCH";
    case MatchStatus.REJECTED:
      return "INACTIVE";
    case MatchStatus.TIMEOUT:
      return "INACTIVE";
  }
  return "LOOKING_FOR_A_MATCH";
};
