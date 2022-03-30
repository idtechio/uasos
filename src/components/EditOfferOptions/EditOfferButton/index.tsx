import React, { useCallback, useRef, useState } from "react";
import { View } from "react-native";
import CardModal from "../../CardModal";
import DeleteOfferForm from "../DeleteOffer";
import RenewOffer from "../RenewOffer";
import ReportOffer from "../ReportOffer";
import { useWebHandleClickOutside } from "./index.hooks";
import {
  ButtonContainer,
  CardModalStyle,
  Icons,
  ListButton,
  Options,
  TriggerButton,
} from "./style";

const { AlertIcon, BinIcon, ClockIcon, EditIcon } = Icons;

export default function EditOfferButton() {
  const containerRef = useRef<View | null>(null);

  const [popoverOpened, setPopoverOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState<
    "delete" | "report" | "renew" | null
  >(null);

  const onTriggerPress = useCallback(
    () => setPopoverOpened((currentValue) => !currentValue),
    []
  );

  const closeModal = useCallback(() => setModalOpened(null), []);

  const Modal = useCallback(() => {
    switch (modalOpened) {
      case "delete":
        return (
          <CardModal closeable={false} cardStyle={CardModalStyle}>
            <DeleteOfferForm close={closeModal} />
          </CardModal>
        );

      case "renew":
        return (
          <CardModal closeable={false} cardStyle={CardModalStyle}>
            <RenewOffer close={closeModal} />
          </CardModal>
        );

      case "report":
        return (
          <CardModal closeable={false} cardStyle={CardModalStyle}>
            <ReportOffer close={closeModal} />
          </CardModal>
        );

      case null:
      default:
        return null;
    }
  }, [modalOpened, closeModal]);

  const PopoverOptions = useCallback(
    () => (
      <Options>
        <ListButton
          icon={<ClockIcon />}
          onPress={() => setModalOpened("renew")}
          withBottomBorder
        >
          Renew
        </ListButton>
        <ListButton
          icon={<EditIcon />}
          onPress={() => {
            /*console.log("Edit")*/
          }}
          withBottomBorder
        >
          Edit
        </ListButton>
        <ListButton
          textColor="secondary"
          icon={<AlertIcon />}
          onPress={() => setModalOpened("report")}
          withBottomBorder
        >
          Report a problem
        </ListButton>
        <ListButton
          textColor="secondary"
          icon={<BinIcon />}
          onPress={() => setModalOpened("delete")}
        >
          Delete
        </ListButton>
      </Options>
    ),
    []
  );

  useWebHandleClickOutside(containerRef, popoverOpened, () =>
    setPopoverOpened(false)
  );

  return (
    <ButtonContainer ref={(ref) => (containerRef.current = ref)}>
      <TriggerButton onPress={onTriggerPress} />
      <Modal />
      {popoverOpened && <PopoverOptions />}
    </ButtonContainer>
  );
}
