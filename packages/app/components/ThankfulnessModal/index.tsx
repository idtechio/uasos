import { useTranslation } from "next-i18next";
import { TextLink } from "solito/link";
import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import FormSentIcon from "../../style/svgs/form_sent.svg";
import { ButtonCta } from "../Buttons";
import CardModal from "../../../../apps/next/src/components/CardModal";
import {
  ThankfulnessHeader,
  ThankfulnessModalButtonCtaWrapper,
  ThankfulnessModalContentWrapper,
  ThankfulnessModalTextWrapper,
  ThankfulnessText,
} from "./style";
import { ThankfulnessModalProps } from "./types";
import { scale } from "app/utils/scale";

const ICON_BASE_WIDTH = Platform.OS === "web" ? 160 : scale(160);
const ICON_WIDTH = ICON_BASE_WIDTH * 1.25;
const ICON_BASE_HEIGHT = Platform.OS === "web" ? 105 : scale(105);
const ICON_HEIGHT = ICON_BASE_HEIGHT * 1.25;

export const ThankfulnessModal = ({
  onClose,
  headerText,
  contentText,
  subHeaderText,
}: ThankfulnessModalProps) => {
  const { t } = useTranslation();
  return (
    <CardModal onModalClose={onClose}>
      <ThankfulnessModalContentWrapper>
        <View style={styles.wrapper}>
          <FormSentIcon
            width={ICON_WIDTH}
            height={ICON_HEIGHT}
            viewBox={`0 0 ${ICON_BASE_WIDTH} ${ICON_BASE_HEIGHT}`}
          />
        </View>
        <ThankfulnessModalTextWrapper>
          <ThankfulnessHeader>{headerText}</ThankfulnessHeader>
          <ThankfulnessText>{subHeaderText}</ThankfulnessText>

          <ThankfulnessText style={styles.textContainer}>
            {contentText}
          </ThankfulnessText>
        </ThankfulnessModalTextWrapper>
        <ThankfulnessModalButtonCtaWrapper>
          <TextLink href="/dashboard">
            <a>
              <ButtonCta pressable={false} anchor={t("backToHomePage")} />
            </a>
          </TextLink>
        </ThankfulnessModalButtonCtaWrapper>
      </ThankfulnessModalContentWrapper>
    </CardModal>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: Platform.OS === "web" ? 24 : scale(24),
  },
  wrapper: {
    minWidth: ICON_WIDTH,
    minHeight: ICON_HEIGHT,
  },
});
