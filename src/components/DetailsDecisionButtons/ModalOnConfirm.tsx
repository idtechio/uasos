import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeIllustration from "../../style/svgs/house-confirm.svg";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../EditOfferOptions/style";

export interface ModalProps {
  close: () => void;
  showSuccess: boolean;
  showError: boolean;
  isLoading: boolean;
}

export default function ModalOnConfirm({
  close,
  showSuccess,
  showError,
  isLoading,
}: ModalProps) {
  const { t } = useTranslation("offer-details");
  const router = useRouter();
  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      {isLoading ? "Loading..." : null}
      {showError ? (
        <FormDescription>{t("confirm_match_error")}</FormDescription>
      ) : null}
      {showSuccess ? (
        <>
          <HomeIllustration />
          <FormHeader style={{ marginTop: 17 }}>{t("thankYou")}</FormHeader>
          <FormDescription style={{ marginTop: 19, maxWidth: "35ch" }}>
            {t("confirmFeedback")}
          </FormDescription>
        </>
      ) : null}
      {showSuccess || showError ? (
        <FormFooter style={{ marginTop: 84, justifyContent: "center" }}>
          <ButtonCta
            anchor={t("backToProfile")}
            onPress={() => {
              router.push("/dashboard");
            }}
          />
        </FormFooter>
      ) : null}
    </FormWrapper>
  );
}
