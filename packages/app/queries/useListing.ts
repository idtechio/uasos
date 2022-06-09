import { useMutation, useQueryClient } from "react-query";
import { deleteListItem } from "../client-api/delete";
import { reportListItem } from "../client-api/report";
import { renewListItem } from "../client-api/renew";
import { GetOffersListDTO } from "../client-api/offers";
import { QueryKeys } from "./queryKeys";
import { GetRequestsListDTO } from "../client-api/requests";
import { API_REFRESH_LATENCY } from "../helpers/misc";

enum MatchStatus {
  ACCEPTED = "accepted", // match accepted by guest and by host
  REJECTED = "rejected", // match rejected by guest or by host
  TIMEOUT = "timeout", // timeout during awaiting for guest and host response
  AWAITING_RESPONSE = "awaiting_response", // match awaiting for guest and host response
  DEFAULT = "default",
}

export const useDeleteItem = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteListItem, {
    onSuccess: (_, variables) => {
      if (variables.targetType === "hosts") {
        queryClient.setQueryData<GetOffersListDTO | undefined>(
          [QueryKeys.GET_OFFERS_LIST],
          (data) =>
            data && {
              ...data,
              offers: data.offers.filter(
                (offer) => offer.id !== variables.targetID
              ),
            }
        );
      }

      if (variables.targetType === "guests") {
        queryClient.setQueryData<GetRequestsListDTO | undefined>(
          [QueryKeys.GET_REQUESTS_LIST],
          (data) =>
            data && {
              ...data,
              requests: data.requests.filter(
                (request) => request.id !== variables.targetID
              ),
            }
        );
      }

      setTimeout(() => {
        queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST]);
        queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST]);
      }, API_REFRESH_LATENCY);
    },
  });
};
export const useReportItem = () => useMutation(reportListItem);

export const useRenewItem = () => {
  const queryClient = useQueryClient();

  return useMutation(renewListItem, {
    onSuccess: (_, variables) => {
      if (variables.targetType === "hosts") {
        queryClient.setQueryData<GetOffersListDTO | undefined>(
          [QueryKeys.GET_OFFERS_LIST],
          (data) =>
            data && {
              ...data,
              offers: data.offers.map((offer) => {
                if (offer.id === variables.targetID) {
                  return {
                    ...offer,
                    client_only: true,
                    match_status: "default" as MatchStatus,
                  };
                }
                return offer;
              }),
            }
        );
      }

      if (variables.targetType === "guests") {
        queryClient.setQueryData<GetRequestsListDTO | undefined>(
          [QueryKeys.GET_REQUESTS_LIST],
          (data) =>
            data && {
              ...data,
              requests: data.requests.map((request) => {
                if (request.id === variables.targetID) {
                  return {
                    ...request,
                    client_only: true,
                    match_status: "default" as MatchStatus,
                  };
                }
                return request;
              }),
            }
        );
      }

      setTimeout(() => {
        queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST]);
        queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST]);
      }, API_REFRESH_LATENCY);
    },
  });
};
