import { View } from "react-native";
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

export const ThankfulnessModal = ({
  onClose,
  conntent,
}: ThankfulnessModalProps) => {
  const { t } = useTranslation();
  return (
    <CardModal onModalClose={onClose}>
      <ThankfulnessModalContentWrapper>
        <View
          style={{
            minWidth: 160 * 1.25,
            minHeight: 105 * 1.25,
          }}
        >
          <FormSentIcon
            width={160 * 1.25}
            height={105 * 1.25}
            viewBox="0 0 160 105"
          />
        </View>
        <ThankfulnessModalTextWrapper>
          <ThankfulnessHeader>
            {conntent && conntent.title
              ? conntent.title
              : t("thankfulnessModal.thankYou")}
          </ThankfulnessHeader>
          <ThankfulnessText>
            {conntent && conntent.subTitle
              ? conntent.subTitle
              : t("thankfulnessModal.applicationSent")}
          </ThankfulnessText>

          <ThankfulnessText style={{ marginTop: 24 }}>
            {conntent && conntent.text
              ? conntent.text
              : "thankfulnessModal.informWhenAccomodationFound"}
          </ThankfulnessText>
        </ThankfulnessModalTextWrapper>
        <ThankfulnessModalButtonCtaWrapper>
          <Link href={Routes.HOMEPAGE}>
            <a>
              <ButtonCta
                anchor={
                  conntent && conntent.buttonText
                    ? conntent.buttonText
                    : t("backToHomePage")
                }
              />
            </a>
          </Link>
        </ThankfulnessModalButtonCtaWrapper>
      </ThankfulnessModalContentWrapper>
    </CardModal>
  );
};
