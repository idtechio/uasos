import React from "react";
import { useTranslation } from "../../common-i18n/use-translation";
import { useRouter } from 'solito/router'
import { useCallback } from "react";
import { StyleProp, ViewStyle, ActivityIndicator } from "react-native";
import styled, { useTheme } from "styled-components/native";
import EmailIcon from "../../../../apps/next/src/style/svgs/email.svg";
import PhoneIcon from "../../../../apps/next/src/style/svgs/phone.svg";
import { Theme } from "../../provider/theme/theme.config";
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

  const { t } = useTranslation(["desktop", "others"]);

  const goToProfile = useCallback(() => router.push("/user-profile"), [router]);

  return (
    <>
      <Toast
        color={theme.colors.error}
        label={t("others:desktop.checks.phoneNotVerified")}
        cta={{ onPress: goToProfile, label: t("desktop:verify") }}
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

  const { t } = useTranslation(["desktop", "others"]);
  return (
    <VerifySectionWrapper style={containerStyle}>
      {needEmail && (
        <Toast
          color={theme.colors.error}
          label={t("others:desktop.checks.emailNotVerified")}
          cta={{ onPress: emailOnPress, label: t("desktop:verify") }}
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
