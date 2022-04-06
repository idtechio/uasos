import { useMutation, useQuery, useQueryClient } from "react-query";
import { OfferProps } from "../../pages/api/listing/offers";
import { getOffersList, GetOffersListDTO } from "../client-api/offers";
import {
  GuestHostStatus,
  GuestHostType,
  Boolean,
} from "../components/SupportSection/mapper";
import addHostToApi from "../helpers/addHostToApi";
import { API_REFRESH_LATENCY, uid } from "../helpers/misc";
import updateHostToApi from "../helpers/updateHostToApi";
import { QueryKeys } from "./queryKeys";

export const useOffersList = () =>
  useQuery([QueryKeys.GET_OFFERS_LIST], getOffersList);

export const useAddHostToApi = () => {
  const queryClient = useQueryClient();

  return useMutation(addHostToApi, {
    onSuccess: (_, variables) => {
      const clientOnlyId = uid();
      const newItem: OfferProps = {
        ...variables,
        name: variables.name ?? "",
        phone_num: variables.phone_num ?? "",
        email: variables.email ?? "",
        id: `not-yet-ready-${clientOnlyId}`,
        status: GuestHostStatus.DEFAULT,
        type: GuestHostType.FOUND_A_MATCH,
        can_be_verified: Boolean[variables.can_be_verified],
        transport_included: Boolean[variables.transport_included],
        ok_for_pregnant: Boolean[variables.ok_for_pregnant],
        ok_for_elderly: Boolean[variables.ok_for_elderly],
        ok_for_disabilities: Boolean[variables.ok_for_disabilities],
        ok_for_any_nationality: Boolean[variables.ok_for_any_nationality],
        ok_for_animals: Boolean[variables.ok_for_animals],
        client_only: true,
      };

      queryClient.setQueryData<GetOffersListDTO | undefined>(
        [QueryKeys.GET_OFFERS_LIST],
        (data) => data && { ...data, offers: [...data.offers, newItem] }
      );

      // Backend won't return new offer in list immediately after successful form submit.
      // We have to wait few seconds to synchronize list locally with server changes.
      setTimeout(() => {
        queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST]);
        queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST]);
      }, API_REFRESH_LATENCY);
    },
  });
};

export const useUpdateHostToApi = () => {
  const queryClient = useQueryClient();

  return useMutation(updateHostToApi, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST]);
      queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST]);
    },
  });
};
