import { Wrapper, StyledHeader, StyledText, StyledTextButton } from "./style";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import Image from "next/image";
import SmsSent from "../../../public/assets/PasswordReset.png";
import { TouchableOpacity } from "react-native";
import { useTranslation } from "next-i18next";

interface Props {
  restartTimer: () => void;
  onClose: () => void;
  seconds: number;
  error: boolean;
}
export default function EmailVerificationModal({
  restartTimer,
  onClose,
  seconds,
  error,
}: Props) {
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
        <TouchableOpacity
          disabled={error || seconds !== 0}
          onPress={restartTimer}
        >
          <StyledTextButton disabled={error || seconds !== 0}>
            {t("others:common.links.re-sendCode")}
          </StyledTextButton>
        </TouchableOpacity>
        <StyledText disabled={error || seconds !== 0}>
          {/* {error
            ? `Too many requests. Try again in ${seconds} seconds`
            : seconds !== 0
            ? `Mail hasn’t arrived? Try again in ${seconds} seconds`
            : "Mail hasn’t arrived? Try again"} */}
          {error
            ? t("others:common.email.errorTooManyRequestsInSeconds", {
                number: seconds,
              })
            : seconds !== 0
            ? t("others:common.email.errorTryAgainInSeconds", {
                number: seconds,
              })
            : t("others:common.email.errorTryAgain")}
        </StyledText>
      </Wrapper>
    </CardModal>
  );
}
