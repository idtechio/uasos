import { StyleSheet, View } from "react-native";
import { ButtonCta } from "../Buttons";
import FormSentIcon from "../../style/svgs/form_sent.svg";
import {
  DeactivateHeader,
  DeactivateModalButtonCtaWrapper,
  DeactivateModalContentWrapper,
  DeactivateModalTextWrapper,
  DeactivateText,
} from "./style";
import CardModal from "../CardModal";
import Link from "next/link";
import { AfterDeactivateModalProps } from "./types";
import { Routes } from "../../consts/router";

const ICON_BASE_WIDTH = 160;
const ICON_WIDTH = ICON_BASE_WIDTH * 1.25;
const ICON_BASE_HEIGHT = 105;
const ICON_HEIGHT = ICON_BASE_HEIGHT * 1.25;

export const AfterDeactivateModal = ({
  onClose,
  isHost,
}: AfterDeactivateModalProps) => {
  return (
    <CardModal onModalClose={onClose} closeable={false} cardStyle={styles.card}>
      <DeactivateModalContentWrapper>
        <View style={styles.wrapper}>
          <FormSentIcon
            width={ICON_WIDTH}
            height={ICON_HEIGHT}
            viewBox={`0 0 ${ICON_BASE_WIDTH} ${ICON_BASE_HEIGHT}`}
          />
        </View>

        <DeactivateModalTextWrapper>
          <DeactivateHeader>Dziękujemy za informację</DeactivateHeader>
          <DeactivateText>
            {isHost && "Przyjęliśmy Twoją prośbę o usunięcie oferty."}
            {!isHost && "Przyjęliśmy Twoją prośbę o usunięcie zgłoszenia."}
          </DeactivateText>
        </DeactivateModalTextWrapper>

        <View style={styles.divider} />

        <DeactivateModalTextWrapper>
          <DeactivateHeader>Спасибі за інформацію</DeactivateHeader>
          <DeactivateText>
            {isHost && "Ми прийняли запит на видалення пропозиції."}
            {!isHost && "Ми прийняли запит на видалення програми."}
          </DeactivateText>
        </DeactivateModalTextWrapper>

        <View style={styles.divider} />

        <DeactivateModalTextWrapper>
          <DeactivateHeader>Thank you for the information</DeactivateHeader>
          <DeactivateText>
            {isHost && "We have accepted the request to remove the offer."}
            {!isHost &&
              "We have accepted the request to remove the application."}
          </DeactivateText>
        </DeactivateModalTextWrapper>

        <DeactivateModalButtonCtaWrapper>
          <Link href={Routes.HOMEPAGE}>
            <a>
              <ButtonCta anchor="Strona główna / Home page" />
            </a>
          </Link>
        </DeactivateModalButtonCtaWrapper>
      </DeactivateModalContentWrapper>
    </CardModal>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 12,
  },
  card: {
    padding: 20,
  },
  divider: {
    width: "100%",
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#C8C8C8",
    marginVertical: 28,
  },
  wrapper: {
    minWidth: ICON_WIDTH,
    minHeight: ICON_HEIGHT,
    marginTop: 12,
    marginBottom: 24,
  },
});
