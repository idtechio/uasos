import React, { useCallback, useState } from "react";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import CardModal from "../CardModal";
import { CardModalStyle } from "../EditOfferOptions/EditOfferButton/style";
import { FormFooter } from "../EditOfferOptions/style";
import ModalOnConfirm from "./ModalOnConfirm";
import ModalOnReject from "./ModalOnReject";

export default function DetailsDecisionButtons() {
  const [modalOpened, setModalOpened] = useState<"accept" | "reject" | null>(
    null
  );

  const closeModal = useCallback(() => setModalOpened(null), []);

  const Modal = useCallback(() => {
    switch (modalOpened) {
      case "accept":
        return (
          <CardModal closeable={false} cardStyle={CardModalStyle}>
            <ModalOnConfirm close={closeModal} />
          </CardModal>
        );

      case "reject":
        return (
          <CardModal closeable={false} cardStyle={CardModalStyle}>
            <ModalOnReject close={closeModal} />
          </CardModal>
        );

      case null:
      default:
        return null;
    }
  }, [modalOpened, closeModal]);

  return (
    <FormFooter style={{ marginBottom: 60 }}>
      <Modal />
      <ButtonCta
        variant="outlined"
        anchor="Reject"
        onPress={() => setModalOpened("reject")}
      />
      <ButtonCta anchor="Confirm" onPress={() => setModalOpened("accept")} />
    </FormFooter>
  );
}
