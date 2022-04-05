import { useContext } from "react";
import { Wrapper, StyledHeader, StyledText } from "./style";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import Image from "next/image";
import SmsSent from "../../../public/assets/PasswordReset.png";
import { TouchableOpacity } from "react-native";
import { Authorization } from "../../hooks/useAuth";
import { AuthContext } from "../../../pages/_app";
import { useTranslation } from "next-i18next";

interface Props {
  onClose: () => void;
}
export default function EmailVerificationModal({ onClose }: Props) {
  const { identity } = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <CardModal closeable={false}>
      <Wrapper>
        <Image src={SmsSent} alt=""></Image>
        <StyledHeader>{t("others:common.email.verification")}</StyledHeader>
        <StyledText>{t("others:common.email.sentInfo")}</StyledText>
        <ButtonCta
          onPress={() => onClose()}
          anchor={t("others:common.buttons.close")}
          style={{ width: "100px", marginTop: "30px" }}
        />
        <TouchableOpacity>
          <StyledText
            onPress={() => {
              if (identity) {
                Authorization.sendVerificationEmail(identity);
              }
            }}
          >
            {t("others:common.links.re-sendCode")}
          </StyledText>
        </TouchableOpacity>
      </Wrapper>
    </CardModal>
  );
}
