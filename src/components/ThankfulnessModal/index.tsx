import { StyleSheet, View } from "react-native";
import { ButtonCta } from "../Buttons";
import FormSentIcon from "../../style/svgs/form_sent.svg";
import {
  ThankfulnessHeader,
  ThankfulnessModalButtonCtaWrapper,
  ThankfulnessModalContentWrapper,
  ThankfulnessModalTextWrapper,
  ThankfulnessText,
} from "./style";
import CardModal from "../CardModal";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { ThankfulnessModalProps } from "./types";
import { Routes } from "../../consts/router";

const ICON_BASE_WIDTH = 160;
const ICON_WIDTH = ICON_BASE_WIDTH * 1.25;
const ICON_BASE_HEIGHT = 105;
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
          <Link href={Routes.HOMEPAGE}>
            <a>
              <ButtonCta anchor={t("backToHomePage")} />
            </a>
          </Link>
        </ThankfulnessModalButtonCtaWrapper>
      </ThankfulnessModalContentWrapper>
    </CardModal>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 24,
  },
  wrapper: {
    minWidth: ICON_WIDTH,
    minHeight: ICON_HEIGHT,
  },
});
