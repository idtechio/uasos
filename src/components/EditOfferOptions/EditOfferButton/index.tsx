import React, {
  createContext,
  useMemo,
  useCallback,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
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
import { Routes } from "../../../consts/router";
import { useRouter } from "next/router";
import { ModalTypes, TargetTypes } from "./types";

const { AlertIcon, BinIcon, ClockIcon, EditIcon } = Icons;

export const EditOfferContext = createContext<{
  targetID: string;
  targetType: "hosts" | "guests";
  matchID?: string | null;
}>({ targetType: "hosts", targetID: "", matchID: "" });

export default function EditOfferButton({
  targetID,
  targetType,
  matchID,
}: {
  targetID: string;
  matchID?: string | null;
  targetType: TargetTypes;
}) {
  const containerRef = useRef<View | null>(null);

  const { t } = useTranslation();
  const router = useRouter();

  const [popoverOpened, setPopoverOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState<ModalTypes>(null);

  const getButtonList = useMemo(
    () => [
      {
        icon: <ClockIcon />,
        type: "renew",
        hide: true,
        label: "others:common.words.renew",
      },
      {
        icon: <EditIcon />,
        type: "edit",
        label: "others:desktop.contextMenu.edit",
      },
      {
        icon: <AlertIcon />,
        type: "report",
        hide: !matchID,
        label: "others:desktop.contextMenu.reportProblem",
      },
      {
        icon: <BinIcon />,
        type: "delete",
        label: "hostAdd.accomodationPhotoReset",
      },
    ],
    []
  );

  const getEditButtonLink = useMemo(
    () =>
      `${
        targetType === TargetTypes.HOSTS ? Routes.HOST : Routes.GUEST
      }?id=${targetID}`,
    [targetID, targetType]
  );

  const onTriggerPress = useCallback(
    () => setPopoverOpened((currentValue) => !currentValue),
    []
  );

  const closeModal = useCallback(() => setModalOpened(null), []);

  const triggerModal = (modalType: ModalTypes) => () =>
    setModalOpened(modalType);

  const Modal = useCallback(() => {
    let modalComponent = null;

    switch (modalOpened) {
      case "delete":
        modalComponent = (
          <DeleteOfferForm
            close={closeModal}
            targetID={targetID}
            targetType={targetType}
          />
        );
        break;

      case "renew":
        modalComponent = (
          <RenewOffer
            close={closeModal}
            targetID={targetID}
            targetType={targetType}
          />
        );
        break;

      case "report":
        modalComponent = <ReportOffer close={closeModal} />;
        break;

      case "edit":
        modalComponent = null;
        router.push(getEditButtonLink);
        break;

      default:
        modalComponent = null;
    }

    return (
      modalComponent && (
        <CardModal closeable={false} cardStyle={CardModalStyle}>
          {modalComponent}
        </CardModal>
      )
    );
  }, [modalOpened, closeModal, targetID, targetType]);

  const PopoverOptions = useCallback(
    () => (
      <Options>
        {getButtonList.map((button, i, array) => {
          if (button.hide) {
            return <></>;
          }

          return (
            <ListButton
              key={button.type}
              icon={button.icon}
              withBottomBorder={i !== array.length - 1}
              onPress={triggerModal(button.type as ModalTypes)}
            >
              {t(button.label)}
            </ListButton>
          );
        })}
      </Options>
    ),
    [t]
  );

  useWebHandleClickOutside(containerRef, popoverOpened, () =>
    setPopoverOpened(false)
  );

  return (
    <ButtonContainer ref={(ref) => (containerRef.current = ref)}>
      <TriggerButton onPress={onTriggerPress} />
      <EditOfferContext.Provider value={{ targetType, targetID, matchID }}>
        <Modal />
      </EditOfferContext.Provider>
      {popoverOpened && <PopoverOptions />}
    </ButtonContainer>
  );
}
