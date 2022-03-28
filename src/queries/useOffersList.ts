import { useQuery } from "react-query";
import { getOffersList } from "../client-api/offers";
import { QueryKeys } from "./queryKeys";

export const useOffersList = () =>
  useQuery([QueryKeys.GET_OFFERS_LIST], getOffersList);
