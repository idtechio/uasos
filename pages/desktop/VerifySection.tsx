import styled, { useTheme } from "styled-components/native";
import { Theme } from "../../src/style/theme.config";
import Toast from "../../src/components/Toast";
import EmailIcon from "../../src/style/svgs/email.svg";
import PhoneIcon from "../../src/style/svgs/phone.svg";
import { bottomMarginStyle } from "./const";

const VerifySectionWrapper = styled.View``;

export type Verifications = {
  needEmail: boolean;
  needPhone: boolean;
};

export default function VerifySection({ needEmail, needPhone }: Verifications) {
  const theme = useTheme() as Theme;
  return (
    <VerifySectionWrapper>
      {needEmail ? (
        <Toast
          color={theme.colors.error}
          label={"Email not verified"}
          cta={{ href: "/", label: "Verify" }}
          icon={<EmailIcon />}
          contaierStyle={bottomMarginStyle}
        />
      ) : (
        <></>
      )}
      {needPhone ? (
        <Toast
          color={theme.colors.error}
          label={"Phone not verified"}
          cta={{ href: "/", label: "Verify" }}
          icon={<PhoneIcon />}
          contaierStyle={bottomMarginStyle}
        />
      ) : (
        <></>
      )}
    </VerifySectionWrapper>
  );
}
