import React, { useEffect, useCallback, useState } from "react";
import CardModal from "../CardModal";
import { CardModalStyle } from "../EditOfferOptions/EditOfferButton/style";
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
    const checkIsMatches = () => {
      const offersArray = offers?.offers ?? [];
      const requestsArray = requests?.requests ?? [];

      const valueFromLocalStorage = localStorage.getItem(
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

      localStorage.setItem(
        `${ALREADY_SHOWN}${status}`,
        prepareToStorage(alreadyShowedIds, result)
      );

      setModalOpen(!!result.length);
    };

    checkIsMatches();
  }, [offers, requests, status]);

  return modalOpen ? (
    <CardModal closeable={true} cardStyle={CardModalStyle}>
      <ConfirmRejectAbstractModal close={closeModal} confirm={isAccept} />
    </CardModal>
  ) : null;
}
