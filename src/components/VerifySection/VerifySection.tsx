import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { StyleProp, ViewStyle, ActivityIndicator } from "react-native";
import styled, { useTheme } from "styled-components/native";
import EmailIcon from "../../style/svgs/email.svg";
import PhoneIcon from "../../style/svgs/phone.svg";
import { Theme } from "../../style/theme.config";
import Toast from "../Toast";

const VerifySectionWrapper = styled.View``;

export type Verifications = {
  needEmail: boolean;
  needPhone: boolean;
  needAccount: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  emailOnPress: () => void;
};

const VerifyPhoneToast = () => {
  const router = useRouter();
  const theme = useTheme() as Theme;

  const { t } = useTranslation("desktop");

  const goToProfile = useCallback(() => router.push("/user-profile"), [router]);

  return (
    <>
      <Toast
        color={theme.colors.error}
        label={t("others:desktop.checks.phoneNotVerified")}
        cta={{ onPress: goToProfile, label: t("verify") }}
        icon={<PhoneIcon />}
        contaierStyle={{ marginBottom: 0 }}
      />
    </>
  );
};

export default function VerifySection({
  needEmail,
  needPhone,
  needAccount,
  containerStyle,
  emailOnPress,
}: Verifications) {
  const theme = useTheme() as Theme;

  const { t } = useTranslation("desktop");
  return (
    <VerifySectionWrapper style={containerStyle}>
      {needEmail && (
        <Toast
          color={theme.colors.error}
          label={t("others:desktop.checks.emailNotVerified")}
          cta={{ onPress: emailOnPress, label: t("verify") }}
          icon={<EmailIcon />}
          contaierStyle={{ marginBottom: 10 }}
        />
      )}
      {needAccount && (
        <Toast
          color={theme.colors.error}
          label={t("others:desktop.checks.accountInCreation")}
          cta={{ onPress: () => null, label: "" }}
          icon={<ActivityIndicator />}
          contaierStyle={{ marginBottom: 10 }}
        />
      )}
      {needPhone && <VerifyPhoneToast />}
    </VerifySectionWrapper>
  );
}
