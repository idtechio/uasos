import React from "react";
import { Image } from "react-native";
import { Wrapper, StyledHeader, ButtonSubmit } from "./style";
import CardModal from "../../../../apps/next/src/components/CardModal";
import SmsSent from "../../../../apps/next/public/assets/PasswordReset.png";
import { useTranslation } from "../../common-i18n/use-translation";
import { useRouter } from "solito/router";

export default function SmsVerificationSuccessModal() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <CardModal closeable={false}>
      <Wrapper>
        <Image source={SmsSent} />
        <StyledHeader>
          {t("others:common.sms.verificationSuccess")}
        </StyledHeader>
        <ButtonSubmit
          onPress={() => router.push("/dashboard")}
          anchor={"Continue"}
        />
      </Wrapper>
    </CardModal>
  );
}
