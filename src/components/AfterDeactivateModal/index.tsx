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
          <DeactivateHeader>Dziękujemy za Twoją decyzję.</DeactivateHeader>
          <DeactivateText>
            Jeśli zaakceptowałeś, poczekaj na decyzję drugiej strony. Po
            zaakceptowaniu przez drugą stronę, otrzymasz e-mail z danymi
            kontatkowymi.
          </DeactivateText>
        </DeactivateModalTextWrapper>

        <View style={styles.divider} />

        <DeactivateModalTextWrapper>
          <DeactivateHeader>Дякую за ваше рішення.</DeactivateHeader>
          <DeactivateText>
            Якщо ви погодилися, дочекайтеся рішення іншої сторони. Після
            погодження іншої сторони ви отримаєте електронний лист з контактними
            даними.
          </DeactivateText>
        </DeactivateModalTextWrapper>

        <View style={styles.divider} />

        <DeactivateModalTextWrapper>
          <DeactivateHeader>Thank you for your decision</DeactivateHeader>
          <DeactivateText>
            If you have accepted, wait for the other person{"'"}s decision. Once
            the other side accepts, you will receive an email with contact
            information.
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
