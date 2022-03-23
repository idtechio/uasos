import styled, { useTheme } from "styled-components/native";
import { Theme } from "../../src/style/theme.config";
import Toast from "../../src/components/Toast";
import EmailIcon from "../../src/style/svgs/email.svg";
import PhoneIcon from "../../src/style/svgs/phone.svg";
import { StyleProp, ViewStyle } from "react-native";
import { useTranslation } from "next-i18next";

const VerifySectionWrapper = styled.View``;

export type Verifications = {
  needEmail: boolean;
  needPhone: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export default function VerifySection({
  needEmail,
  needPhone,
  containerStyle,
}: Verifications) {
  const theme = useTheme() as Theme;
  const { t } = useTranslation("desktop");
  return (
    <VerifySectionWrapper style={containerStyle}>
      {needEmail ? (
        <Toast
          color={theme.colors.error}
          label={t("emailNotVerified")}
          cta={{ href: "/", label: t("verify") }}
          icon={<EmailIcon />}
          contaierStyle={{ marginBottom: 10 }}
        />
      ) : (
        <></>
      )}
      {needPhone ? (
        <Toast
          color={theme.colors.error}
          label={t("phoneNotVerified")}
          cta={{ href: "/", label: t("verify") }}
          icon={<PhoneIcon />}
          contaierStyle={{ marginBottom: 0 }}
        />
      ) : (
        <></>
      )}
    </VerifySectionWrapper>
  );
}
