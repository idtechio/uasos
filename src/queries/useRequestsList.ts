import { useMutation, useQuery, useQueryClient } from "react-query";
import { RequestProps } from "../../pages/api/listing/requests";
import { getRequestsList, GetRequestsListDTO } from "../client-api/requests";
import {
  GuestHostStatus,
  GuestHostType,
  Boolean,
} from "../components/SupportSection/mapper";
import addGuestToApi from "../helpers/addGuestToApi";
import { API_REFRESH_LATENCY, uid } from "../helpers/misc";
import { QueryKeys } from "./queryKeys";

export const useRequestsList = () =>
  useQuery([QueryKeys.GET_REQUESTS_LIST], getRequestsList);

export const useAddGuestToApi = () => {
  const queryClient = useQueryClient();

  return useMutation(addGuestToApi, {
    onSuccess: (_, variables) => {
      const clientOnlyId = uid();
      const newItem: RequestProps = {
        ...variables,
        name: variables.name ?? "",
        phone_num: variables.phone_num ?? "",
        email: variables.email ?? "",
        id: `not-yet-ready-${clientOnlyId}`,
        status: GuestHostStatus.DEFAULT,
        type: GuestHostType.FOUND_A_MATCH,
        country: variables.country ?? "",
        city: variables.city ?? "",
        is_pregnant: variables.is_pregnant as Boolean,
        is_ukrainian_nationality: variables.is_ukrainian_nationality as Boolean,
        is_with_animal: variables.is_with_animal as Boolean,
        is_with_disability: variables.is_with_disability as Boolean,
        is_with_elderly: variables.is_with_elderly as Boolean,
        client_only: true,
      };

      queryClient.setQueryData<GetRequestsListDTO | undefined>(
        [QueryKeys.GET_OFFERS_LIST],
        (data) => data && { ...data, offers: [...data.requests, newItem] }
      );

      setTimeout(() => {
        queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST]);
        queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST]);
      }, API_REFRESH_LATENCY);
    },
  });
};
