import { AccommodationTime } from "../../helpers/FormTypes";

export type MatchState =
  | "INACTIVE"
  | "LOOKING_FOR_A_MATCH"
  | "FOUND_MATCH"
  | "BEING_CONFIRMED"
  | "CONFIRMED";

export type Offer = {
  id: string;
  name: string;
  imageUrl: string;
  city: string;
  beds: number;
  duration: AccommodationTime;
  state: MatchState;
};

export type Request = {
  id: string;
  city: string;
  beds: number;
  duration: AccommodationTime;
  state: MatchState;
};
