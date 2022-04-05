import { useMutation, useQuery, useQueryClient } from "react-query";
import { getRequestsList } from "../client-api/requests";
import addGuestToApi from "../helpers/addGuestToApi";
import { QueryKeys } from "./queryKeys";

export const useRequestsList = () =>
  useQuery([QueryKeys.GET_REQUESTS_LIST], getRequestsList);

export const useAddGuestToApi = () => {
  const queryClient = useQueryClient();

  return useMutation(addGuestToApi, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST]);
      queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST]);
    },
  });
};
