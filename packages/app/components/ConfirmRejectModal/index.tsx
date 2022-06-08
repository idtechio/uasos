import React, { useEffect, useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CardModal from "../CardModal";

import ConfirmRejectAbstractModal from "./ConfirmRejectAbstractModal";
import { useOffersList } from "../../queries/useOffersList";
import { useRequestsList } from "../../queries/useRequestsList";
import { Status, ResultItem, AlreadyShowed } from "./types";
import { MODAL_STATUS, ALREADY_SHOWN } from "./constants";
import {
  filterByAlreadyShowed,
  filterByStatus,
  prepareToStorage,
} from "./helpers";

interface ConfirmRejectModalProps {
  status: Status;
}

export default function ConfirmRejectModal({
  status,
}: ConfirmRejectModalProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { data: offers } = useOffersList();
  const { data: requests } = useRequestsList();
  const isAccept = !!(status === MODAL_STATUS.ACCEPT);

  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    const checkIsMatches = async () => {
      const offersArray = offers?.offers ?? [];
      const requestsArray = requests?.requests ?? [];

      const valueFromLocalStorage = await AsyncStorage.getItem(
        `${ALREADY_SHOWN}${status}`
      );

      const alreadyShowedIds: AlreadyShowed = valueFromLocalStorage
        ? JSON.parse(valueFromLocalStorage)
        : {};

      const withoutAlreadyShowed: ResultItem[] = filterByAlreadyShowed(
        alreadyShowedIds,
        [...offersArray, ...requestsArray]
      );

      const result: ResultItem[] = filterByStatus(status, withoutAlreadyShowed);

      AsyncStorage.setItem(
        `${ALREADY_SHOWN}${status}`,
        prepareToStorage(alreadyShowedIds, result)
      );

      setModalOpen(!!result.length);
    };

    checkIsMatches();
  }, [offers, requests, status]);

  return modalOpen ? (
    <CardModal closeable={true}>
      <ConfirmRejectAbstractModal close={closeModal} confirm={isAccept} />
    </CardModal>
  ) : null;
}
