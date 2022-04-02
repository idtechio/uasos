import { useMutation, useQuery, useQueryClient } from "react-query";
import { getOffersList } from "../client-api/offers";
import addHostToApi from "../helpers/addHostToApi";
import { QueryKeys } from "./queryKeys";

export const useOffersList = () =>
  useQuery([QueryKeys.GET_OFFERS_LIST], getOffersList);

export const useAddHostToApi = () => {
  const queryClient = useQueryClient();

  return useMutation(addHostToApi, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST]);
      queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST]);
    },
  });
};
