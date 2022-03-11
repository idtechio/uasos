import { StyleSheet, View } from "react-native";
import { ButtonCta } from "../Buttons";
import FormSentIcon from "../../style/svgs/form_sent.svg";
import {
  AcceptedText,
  CancelledText,
  DecisionHeader,
  DecisionModalButtonCtaWrapper,
  DecisionModalContentWrapper,
  DecisionModalTextWrapper,
  DecisionText,
} from "./style";
import CardModal from "../CardModal";
import Link from "next/link";
import { AfterDecisionModalProps } from "./types";
import { Routes } from "../../consts/router";

const ICON_BASE_WIDTH = 160;
const ICON_WIDTH = ICON_BASE_WIDTH * 1.25;
const ICON_BASE_HEIGHT = 105;
const ICON_HEIGHT = ICON_BASE_HEIGHT * 1.25;

export const AfterDecisionModal = ({ onClose }: AfterDecisionModalProps) => {
  return (
    <CardModal onModalClose={onClose} closeable={false} cardStyle={styles.card}>
      <DecisionModalContentWrapper>
        <View style={styles.wrapper}>
          <FormSentIcon
            width={ICON_WIDTH}
            height={ICON_HEIGHT}
            viewBox={`0 0 ${ICON_BASE_WIDTH} ${ICON_BASE_HEIGHT}`}
          />
        </View>

        <DecisionModalTextWrapper>
          <DecisionHeader>Dziękujemy za Twoją decyzję.</DecisionHeader>
          <DecisionText>
            Jeśli <AcceptedText>zaakceptaowałeś</AcceptedText>, poczekaj na
            decyzję drugiej strony. Po zaakceptowaniu przez drugą stronę,
            otrzymasz e-mail z danymi kontatkowymi.
          </DecisionText>

          <DecisionText style={styles.textContainer}>
            W przypadku <CancelledText>rezygnacji</CancelledText> Twoje
            zgłoszenie wróci do puli aktywnych zgłoszeń. Poinformujemy Cię
            mailowo o kolejnej propozycji.
          </DecisionText>
        </DecisionModalTextWrapper>

        <View style={styles.divider} />

        <DecisionModalTextWrapper>
          <DecisionHeader>Дякую за ваше рішення.</DecisionHeader>
          <DecisionText>
            Якщо ви <AcceptedText>погодилися</AcceptedText>, дочекайтеся рішення
            іншої сторони. Після погодження іншої сторони ви отримаєте
            електронний лист з контактними даними.
          </DecisionText>

          <DecisionText style={styles.textContainer}>
            Якщо ваш запит буде <CancelledText>скасований</CancelledText>, вiн
            буде повернен до загального списку активних запитiв. Щойно ми
            знайдемо запит, що відповідає Вашим критеріям - ми повідомимо Вам.
          </DecisionText>
        </DecisionModalTextWrapper>

        <View style={styles.divider} />

        <DecisionModalTextWrapper>
          <DecisionHeader>Thank you for you decision</DecisionHeader>
          <DecisionText>
            If you have <AcceptedText>accepted</AcceptedText>, wait for the
            other person{"'"}s decision. Once the other side accepts, you will
            receive an email with contact information.
          </DecisionText>

          <DecisionText style={styles.textContainer}>
            In case of <CancelledText>cancellation</CancelledText>, your
            application will be returned to the pool of active applications. We
            will inform you by email about the next offer.
          </DecisionText>
        </DecisionModalTextWrapper>

        <DecisionModalButtonCtaWrapper>
          <Link href={Routes.HOMEPAGE}>
            <a>
              <ButtonCta anchor="Strona główna / Home page" />
            </a>
          </Link>
        </DecisionModalButtonCtaWrapper>
      </DecisionModalContentWrapper>
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
