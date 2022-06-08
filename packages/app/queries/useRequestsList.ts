/* eslint-disable @typescript-eslint/ban-types */
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getRequestsList, GetRequestsListDTO } from "../client-api/requests";

import addGuestToApi from "../helpers/addGuestToApi";
import { API_REFRESH_LATENCY, uid } from "../helpers/misc";
import { QueryKeys } from "./queryKeys";
import updateGuestToApi from "../helpers/updateGuestToApi";
import { useProgressToastContext } from "../provider/progress-toast-provider";

enum Boolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

enum GuestHostType {
  INACTIVE = "inactive", // timeout, waiting to move to LOOKING_FOR_MATCH
  LOOKING_FOR_MATCH = "looking_for_match", // new | during matching process
  FOUND_A_MATCH = "found_a_match", // matched with guest/hosts and awaiting for response
  BEING_CONFIRMED = "being_confirmed", // matched confirmed by one side (host or guest)
  CONFIRMED = "confirmed", // match confirmed by two sides (host and guest)
  REJECTED = "rejected", // match rejected by one side
}

enum GuestHostStatus {
  ACCEPTED = "accepted", // default status after creation
  REJECTED = "rejected", // for future moderation purpose
  BEING_PROCESS = "being_processed", // during matching process
  MATCHED = "matched", // matched with guest/hosts and awaiting for response
  MATCH_ACCEPTED = "match_accepted", // match accepted by host and guest
  DEFAULT = "default",
}

export type ShelterType =
  | "bed"
  | "room"
  | "flat"
  | "house"
  | "collective"
  | "public_shared_space";

export interface MatchedOfferProps {
  id: string;
  name: string;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  closest_city: string;

  shelter_type: Array<ShelterType>;
  beds: number;
  acceptable_group_relations: Array<string>;
  ok_for_pregnant: Boolean;
  ok_for_disabilities: Boolean;
  ok_for_animals: Boolean;
  ok_for_elderly: Boolean;
  ok_for_any_nationality: Boolean;
  duration_category: Array<string>;
  transport_included: Boolean;

  status: GuestHostStatus;
}

enum MatchStatus {
  ACCEPTED = "accepted", // match accepted by guest and by host
  REJECTED = "rejected", // match rejected by guest or by host
  TIMEOUT = "timeout", // timeout during awaiting for guest and host response
  AWAITING_RESPONSE = "awaiting_response", // match awaiting for guest and host response
  DEFAULT = "default",
}

interface RequestProps {
  id: string;
  name: string;
  status: GuestHostStatus;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  acceptable_shelter_types: Array<string>;
  beds: number;
  group_relation: Array<string>;
  is_pregnant: Boolean;
  is_with_disability: Boolean;
  is_with_animal: Boolean;
  is_with_elderly: Boolean;
  is_ukrainian_nationality: Boolean;
  duration_category: Array<string>;
  type: GuestHostType;
  match_id?: string | null;
  match_status?: MatchStatus | null;
  matchedOffer?: MatchedOfferProps;
  client_only?: boolean;
}

export const useRequestsList = () =>
  useQuery([QueryKeys.GET_REQUESTS_LIST], getRequestsList);

export const useAddGuestToApi = () => {
  const queryClient = useQueryClient();

  const { actions } = useProgressToastContext();

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
        type: GuestHostType.LOOKING_FOR_MATCH,
        country: variables.country ?? "",
        city: variables.city ?? "",
        is_pregnant: variables.is_pregnant as Boolean,
        is_ukrainian_nationality: variables.is_ukrainian_nationality as Boolean,
        is_with_animal: variables.is_with_animal as Boolean,
        is_with_disability: variables.is_with_disability as Boolean,
        is_with_elderly: variables.is_with_elderly as Boolean,
        client_only: true,
      };

      actions.showProgressToast();

      queryClient.setQueryData<GetRequestsListDTO | undefined>(
        [QueryKeys.GET_REQUESTS_LIST],
        (data) => data && { ...data, requests: [...data.requests, newItem] }
      );

      setTimeout(() => {
        queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST]);
        queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST]);
      }, API_REFRESH_LATENCY);
    },
  });
};

export const useUpdateGuestToApi = () => {
  const queryClient = useQueryClient();

  const { actions } = useProgressToastContext();

  return useMutation(updateGuestToApi, {
    onSuccess: (_, variables) => {
      queryClient.setQueryData<GetRequestsListDTO | undefined>(
        [QueryKeys.GET_REQUESTS_LIST],
        (data) =>
          data && {
            ...data,
            requests: data.requests.map((request) => {
              if (request.id === variables.id) {
                return {
                  ...request,
                  ...(variables as RequestProps),
                  client_only: true,
                };
              }
              return request;
            }),
          }
      );

      actions.showProgressToast();
    },
  });
};
