import { useQuery } from "react-query";
import { decideOnMatchAsHost } from "../client-api/decideOnMatchAsHost";
import { QueryKeys } from "./queryKeys";

export const decideAsHost = (matchesId, decision) =>
  useQuery(
    [QueryKeys.DECIDE_AS_HOST],
    decideOnMatchAsHost(matchesId, decision)
  );
