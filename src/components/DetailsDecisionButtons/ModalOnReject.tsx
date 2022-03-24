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

export default function ModalOnReject({ close }: { close(): void }) {
  const { t } = useTranslation("offer-details");
  const router = useRouter();
  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <HomeIllustration />
      <FormHeader style={{ marginTop: 17 }}> {t("thankYou")}</FormHeader>
      <FormDescription style={{ marginTop: 19, maxWidth: "40ch" }}>
        {t("longThanks")}
      </FormDescription>
      <FormDescription style={{ maxWidth: "30ch" }}>
        {t("rejectFeedback")}
      </FormDescription>
      <FormFooter style={{ marginTop: 60, justifyContent: "center" }}>
        <ButtonCta
          anchor={t("backToProfile")}
          onPress={() => {
            router.push("/dashboard");
          }}
        />
      </FormFooter>
    </FormWrapper>
  );
}
