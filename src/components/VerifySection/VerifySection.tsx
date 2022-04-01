import styled, { useTheme } from "styled-components/native";
import { Theme } from "../../style/theme.config";
import Toast from "../Toast";
import EmailIcon from "../../style/svgs/email.svg";
import PhoneIcon from "../../style/svgs/phone.svg";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { useTranslation } from "next-i18next";

const VerifySectionWrapper = styled.View``;

export type Verifications = {
  needEmail: boolean;
  needPhone: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  emailOnPress: () => void;
};

export default function VerifySection({
  needEmail,
  needPhone,
  containerStyle,
  emailOnPress,
}: Verifications) {
  const theme = useTheme() as Theme;
  const { t } = useTranslation("desktop");
  return (
    <VerifySectionWrapper style={containerStyle}>
      {needEmail && (
        <TouchableOpacity onPress={emailOnPress}>
          <Toast
            color={theme.colors.error}
            label={t("emailNotVerified")}
            cta={{ href: "", label: t("verify") }}
            icon={<EmailIcon />}
            contaierStyle={{ marginBottom: 10 }}
          />
        </TouchableOpacity>
      )}
      {needPhone && (
        <Toast
          color={theme.colors.error}
          label={t("phoneNotVerified")}
          cta={{ href: "/", label: t("verify") }}
          icon={<PhoneIcon />}
          contaierStyle={{ marginBottom: 0 }}
        />
      )}
    </VerifySectionWrapper>
  );
}
