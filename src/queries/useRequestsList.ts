import { useQuery } from "react-query";
import { getRequestsList } from "../client-api/requests";
import { QueryKeys } from "./queryKeys";

export const useRequestsList = () =>
  useQuery([QueryKeys.GET_REQUESTS_LIST], getRequestsList);
