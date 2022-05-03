import { useQuery } from "react-query";
import { QueryKeys } from "./queryKeys";
import { fetchAutocomplete } from "../client-api/autocomplete";

export const useAutocomplete = (query: string) =>
  useQuery([QueryKeys.AUTOCOMPLETE, query], () => fetchAutocomplete(query));
