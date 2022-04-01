import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeIllustration from "../../style/svgs/house-reject.svg";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../EditOfferOptions/style";
import { ModalProps } from "./ModalOnConfirm";

export default function ModalOnReject({
  close,
  showSuccess,
  showError,
}: ModalProps) {
  const { t } = useTranslation("offer-details");
  const router = useRouter();
  return (
    <FormWrapper>
      {!showSuccess && <CloseButton onPress={close} />}
      {showError ? (
        <FormDescription>{t("reject_match_error")}</FormDescription>
      ) : null}
      {showSuccess ? (
        <>
          <HomeIllustration />
          <FormHeader style={{ marginTop: 17 }}> {t("thankYou")}</FormHeader>
          <FormDescription style={{ marginTop: 19, maxWidth: "40ch" }}>
            {t("longThanks")}
          </FormDescription>
          <FormDescription style={{ maxWidth: "30ch" }}>
            {t("rejectFeedback")}
          </FormDescription>
        </>
      ) : null}
      {showSuccess || showError ? (
        <FormFooter style={{ marginTop: 60, justifyContent: "center" }}>
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
