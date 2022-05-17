import { StyleSheet, View } from "react-native";
import { useTranslation } from "next-i18next";
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
import { parseAndSplitContent } from "./helpers";

const ICON_BASE_WIDTH = 160;
const ICON_WIDTH = ICON_BASE_WIDTH * 1.25;
const ICON_BASE_HEIGHT = 105;
const ICON_HEIGHT = ICON_BASE_HEIGHT * 1.25;

export const AfterDecisionModal = ({
  isAccepted,
  showError,
  onClose,
}: AfterDecisionModalProps) => {
  const { t } = useTranslation("others");
  const { t: tod } = useTranslation("offer-details");

  const accepted = t("desktop.confirmation.accepted");
  const cancellation = t("desktop.confirmation.cancellation");
  const text = t("desktop.confirmation.content", { accepted, cancellation });

  const {
    acceptedBefore,
    acceptedAfter,
    cancellationBefore,
    cancellationAfter,
    acceptedSecondSentence,
    cancellationSecondSentence,
  } = parseAndSplitContent(text, { accepted, cancellation });

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
          {showError && (
            <DecisionText>{tod("confirm_match_error")}</DecisionText>
          )}

          {!showError && (
            <>
              <DecisionHeader>
                {t("desktop.confirmation.header")}
              </DecisionHeader>

              {isAccepted === true && (
                <DecisionText>
                  {acceptedBefore}
                  <AcceptedText>{accepted}</AcceptedText>
                  {`${acceptedAfter}.${acceptedSecondSentence}.`}
                </DecisionText>
              )}

              {isAccepted === false && (
                <DecisionText>
                  {cancellationBefore}
                  <CancelledText>{cancellation}</CancelledText>
                  {`${cancellationAfter}.${cancellationSecondSentence}.`}
                </DecisionText>
              )}
            </>
          )}
        </DecisionModalTextWrapper>

        <DecisionModalButtonCtaWrapper>
          <Link href={Routes.HOMEPAGE}>
            <a>
              <ButtonCta anchor={t("common:backToHomePage")} />
            </a>
          </Link>
        </DecisionModalButtonCtaWrapper>
      </DecisionModalContentWrapper>
    </CardModal>
  );
};

const styles = StyleSheet.create({
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
