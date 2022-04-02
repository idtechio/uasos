import { useMutation, useQuery, useQueryClient } from "react-query";
import { getOffersList } from "../client-api/offers";
import addGuestToApi from "../helpers/addGuestToApi";
import addHostToApi from "../helpers/addHostToApi";
import { QueryKeys } from "./queryKeys";

export const useOffersList = () =>
  useQuery([QueryKeys.GET_OFFERS_LIST], getOffersList);

export const useAddHostToApi = () => {
  const queryClient = useQueryClient();

  return useMutation(addHostToApi, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST], {
        exact: false,
      });
    },
  });
};

export const useAddGuestToApi = () => {
  const queryClient = useQueryClient();

  return useMutation(addGuestToApi, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST], {
        exact: false,
      });
    },
  });
};
