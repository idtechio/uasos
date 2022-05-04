import React, { useCallback, useState } from "react";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import CardModal from "../CardModal";
import { CardModalStyle } from "../EditOfferOptions/EditOfferButton/style";
import { FormDescription, FormFooter } from "../EditOfferOptions/style";
import ModalOnConfirm from "./ModalOnConfirm";
import ModalOnReject from "./ModalOnReject";
import { useTranslation } from "react-i18next";

interface DetailsDecisionButtonsProps {
  listingId: string | null | undefined;
  matchId: string | null | undefined;
}

export default function DetailsDecisionButtons({
  matchId,
  listingId,
}: DetailsDecisionButtonsProps) {
  enum MatchType {
    ACCEPT = "accept",
    REJECT = "reject",
  }

  const { t } = useTranslation();
  const [modalOpened, setModalOpened] = useState<MatchType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const closeModal = useCallback(() => {
    setModalOpened(null);
    setShowError(false);
    setShowSuccess(false);
  }, []);

  const handleMatch = async (type: MatchType) => {
    setModalOpened(type);
    setIsLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}api/matches/confirm`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          matches_id: matchId,
          listing_id: listingId,
          accepted: type === MatchType.ACCEPT ? "TRUE" : "FALSE",
        }),
      }
    );

    if (res) {
      setIsLoading(false);
      if (res.status === 200) {
        setShowSuccess(true);
      } else {
        setShowError(true);
      }
    }
  };

  const Modal = useCallback(() => {
    switch (modalOpened) {
      case "accept":
        return (
          <CardModal closeable={false} cardStyle={CardModalStyle}>
            {isLoading ? (
              // TODO: nice spinner
              <FormDescription>Loading...</FormDescription>
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
              <FormDescription>Loading...</FormDescription>
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
        onPress={() => handleMatch(MatchType.REJECT)}
      />
      <ButtonCta
        anchor={t("others:common.buttons.confirm")}
        onPress={() => handleMatch(MatchType.ACCEPT)}
      />
    </FormFooter>
  );
}
