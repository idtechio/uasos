/* eslint-disable @typescript-eslint/ban-types */
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getOffersList, GetOffersListDTO } from "../client-api/offers";
import addHostToApi from "../helpers/addHostToApi";
import { API_REFRESH_LATENCY, uid } from "../helpers/misc";
import updateHostToApi from "../helpers/updateHostToApi";
import { useProgressToastContext } from "../provider/progress-toast-provider";
import { QueryKeys } from "./queryKeys";

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

export enum MatchStatus {
  ACCEPTED = "accepted", // match accepted by guest and by host
  REJECTED = "rejected", // match rejected by guest or by host
  TIMEOUT = "timeout", // timeout during awaiting for guest and host response
  AWAITING_RESPONSE = "awaiting_response", // match awaiting for guest and host response
  DEFAULT = "default",
}

export interface MatchedRequestProps {
  id: string;
  name: string;
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

  status: GuestHostStatus;
}

interface OfferProps {
  id: string;
  name: string;
  status: GuestHostStatus;
  country: string;
  phone_num: string;
  email: string;
  city: string;
  closest_city: string;
  zipcode: string;
  street: string;
  building_no: string;
  appartment_no: string;
  shelter_type: Array<string>;
  host_type: Array<string>;
  beds: number;
  acceptable_group_relations: Array<string>;
  ok_for_pregnant: Boolean;
  ok_for_disabilities: Boolean;
  ok_for_animals: Boolean;
  ok_for_elderly: Boolean;
  ok_for_any_nationality: Boolean;
  duration_category: Array<string>;
  type: GuestHostType;
  transport_included: Boolean;
  can_be_verified: Boolean;
  match_id?: string | null;
  match_status?: MatchStatus | null;
  matchedRequest?: MatchedRequestProps;
  client_only?: boolean;
}

export const useOffersList = () =>
  useQuery([QueryKeys.GET_OFFERS_LIST], getOffersList);

export const useAddHostToApi = () => {
  const queryClient = useQueryClient();
  const { actions } = useProgressToastContext();

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
        type: GuestHostType.LOOKING_FOR_MATCH,
        can_be_verified: Boolean[variables.can_be_verified],
        transport_included: Boolean[variables.transport_included],
        ok_for_pregnant: Boolean[variables.ok_for_pregnant],
        ok_for_elderly: Boolean[variables.ok_for_elderly],
        ok_for_disabilities: Boolean[variables.ok_for_disabilities],
        ok_for_any_nationality: Boolean[variables.ok_for_any_nationality],
        ok_for_animals: Boolean[variables.ok_for_animals],
        client_only: true,
      };

      actions.showProgressToast();

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
  const { actions } = useProgressToastContext();

  return useMutation(updateHostToApi, {
    onSuccess: (_, variables) => {
      queryClient.setQueryData<GetOffersListDTO | undefined>(
        [QueryKeys.GET_OFFERS_LIST],
        (data) =>
          data && {
            ...data,
            offers: data.offers.map((offer) => {
              if (offer.id === variables.id) {
                return {
                  ...offer,
                  ...(variables as OfferProps),
                  client_only: true,
                };
              }
              return offer;
            }),
          }
      );

      actions.showProgressToast();

      setTimeout(() => {
        queryClient.invalidateQueries([QueryKeys.GET_REQUESTS_LIST]);
        queryClient.invalidateQueries([QueryKeys.GET_OFFERS_LIST]);
      }, API_REFRESH_LATENCY);
    },
  });
};
