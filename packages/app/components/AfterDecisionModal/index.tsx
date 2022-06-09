import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useTranslation } from "app/common-i18n/use-translation";
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
import { AfterDecisionModalProps } from "./types";
import { Routes } from "../../consts/router";
import { parseAndSplitContent } from "./helpers";

import { useRouter } from "solito/router";

const ICON_BASE_WIDTH = 160;
const ICON_WIDTH = ICON_BASE_WIDTH * 1.25;
const ICON_BASE_HEIGHT = 105;
const ICON_HEIGHT = ICON_BASE_HEIGHT * 1.25;

export const AfterDecisionModal = ({ onClose }: AfterDecisionModalProps) => {
  const { t } = useTranslation(["others", "common"]);

  const router = useRouter();

  const accepted = t("others:desktop.confirmation.accepted");
  const cancellation = t("others:desktop.confirmation.cancellation");
  const text = t("others:desktop.confirmation.content", {
    accepted,
    cancellation,
  });

  const goToHomePage = useCallback(
    () => router.push(Routes.HOMEPAGE),
    [router]
  );

  const {
    acceptedBefore,
    acceptedAfter,
    cancellationBefore,
    cancellationAfter,
    acceptedSecondSentence,
    cancellationSecondSentence,
  } = parseAndSplitContent(text, { accepted, cancellation });

  return (
    <CardModal onModalClose={onClose} closeable={false}>
      <DecisionModalContentWrapper>
        <View style={styles.wrapper}>
          <FormSentIcon
            width={ICON_WIDTH}
            height={ICON_HEIGHT}
            viewBox={`0 0 ${ICON_BASE_WIDTH} ${ICON_BASE_HEIGHT}`}
          />
        </View>
        <DecisionModalTextWrapper>
          <DecisionHeader>
            {t("others:desktop.confirmation.header")}
          </DecisionHeader>
          <DecisionText>
            {acceptedBefore}
            <AcceptedText>{accepted}</AcceptedText>
            {`${acceptedAfter}.${acceptedSecondSentence}.`}
          </DecisionText>

          <DecisionText style={styles.textContainer}>
            {cancellationBefore}
            <CancelledText>{cancellation}</CancelledText>
            {`${cancellationAfter}.${cancellationSecondSentence}.`}
          </DecisionText>
        </DecisionModalTextWrapper>

        <DecisionModalButtonCtaWrapper>
          <ButtonCta
            onPress={goToHomePage}
            anchor={t("common:backToHomePage")}
          />
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
