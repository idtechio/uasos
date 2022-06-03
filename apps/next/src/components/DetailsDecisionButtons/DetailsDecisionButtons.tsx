import React, { useCallback, useState } from "react";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import CardModal from "../CardModal";
import { CardModalStyle } from "../EditOfferOptions/EditOfferButton/style";
import { FormFooter } from "../EditOfferOptions/style";
import ModalOnConfirm from "./ModalOnConfirm";
import ModalOnReject from "./ModalOnReject";
import { useTranslation } from "react-i18next";
import Spinner from "../../../../../packages/app/components/Spinner";

interface DetailsDecisionButtonsProps {
  typeOfUser: string;
  matchId: string | null | undefined;
}

export default function DetailsDecisionButtons({
  matchId,
  typeOfUser,
}: DetailsDecisionButtonsProps) {
  const { t } = useTranslation();
  const [modalOpened, setModalOpened] = useState<"accept" | "reject" | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setModalOpened(null);
    setShowError(false);
    setShowSuccess(false);
  }, []);

  const handleConfirmMatch = async () => {
    setModalOpened("accept");
    setIsLoading(true);
    if (typeOfUser === "host") {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}api/hosts/matchesconfirm/${matchId}?accepted=1`,
        { method: "GET" }
      );
      if (res) {
        setIsLoading(false);
        if (res.status === 200) {
          setShowSuccess(true);
        } else {
          setShowError(true);
        }
      }
    } else {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}api/guests/matchesconfirm/${matchId}?accepted=1`,
        { method: "GET" }
      );
      if (res) {
        setIsLoading(false);
        if (res.status === 200) {
          setShowSuccess(true);
        } else {
          setShowError(true);
        }
      }
    }
  };

  const handleRejectMatch = async () => {
    setModalOpened("reject");
    setIsLoading(true);
    if (typeOfUser === "host") {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}api/hosts/matchesconfirm/${matchId}?accepted=0`,
        { method: "GET" }
      );
      if (res) {
        setIsLoading(false);
        if (res.status === 200) {
          setShowSuccess(true);
        } else {
          setShowError(true);
        }
      }
    } else {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN}api/guests/matchesconfirm/${matchId}?accepted=0`,
        { method: "GET" }
      );
      if (res) {
        setIsLoading(false);
        if (res.status === 200) {
          setShowSuccess(true);
        } else {
          setShowError(true);
        }
      }
    }
  };

  const Modal = useCallback(() => {
    switch (modalOpened) {
      case "accept":
        return (
          <CardModal closeable={false} cardStyle={CardModalStyle}>
            {isLoading ? (
              <Spinner />
            ) : (
              <ModalOnConfirm
                close={closeModal}
                showSuccess={showSuccess}
                showError={showError}
              />
            )}
          </CardModal>
        );

      case "reject":
        return (
          <CardModal closeable={false} cardStyle={CardModalStyle}>
            {isLoading ? (
              // TODO: nice spinner
              <Spinner />
            ) : (
              <ModalOnReject
                close={closeModal}
                showSuccess={showSuccess}
                showError={showError}
              />
            )}
          </CardModal>
        );

      case null:
      default:
        return null;
    }
  }, [modalOpened, closeModal, isLoading, showSuccess, showError]);

  return (
    <FormFooter
      style={{
        marginTop: 0,
        marginBottom: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Modal />
      <ButtonCta
        variant="outlined"
        anchor={t("others:common.buttons.reject")}
        onPress={handleRejectMatch}
      />
      <ButtonCta
        anchor={t("others:common.buttons.confirm")}
        onPress={handleConfirmMatch}
      />
    </FormFooter>
  );
}
