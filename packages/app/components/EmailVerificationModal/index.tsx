import React from "react";
import { Image } from "react-native";
import { Wrapper, StyledHeader, StyledText, StyledTextButton } from "./style";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";

import SmsSent from "../../assets/images/PasswordReset.png";
import { TouchableOpacity } from "react-native";
import { useTranslation } from "app/common-i18n/use-translation";
import { styleFor } from "app/utils/styleFor";
import { scale } from "app/utils/scale";

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
        <Image source={SmsSent} />
        <StyledHeader>{t("others:common.email.verification")}</StyledHeader>
        <StyledText>{t("others:common.email.sentInfo")}</StyledText>
        <ButtonCta
          onPress={() => onClose()}
          anchor={t("others:common.buttons.close")}
          style={styleFor({
            web: { width: "100px", marginTop: "30px" },
            native: { width: scale(100), marginTop: scale(30) },
          })}
        />
        <TouchableOpacity
          disabled={error || seconds !== 0}
          onPress={restartTimer}
        >
          <StyledTextButton disabled={error || seconds !== 0}>
            {t("others:common.links.re-sendCode")}
          </StyledTextButton>
        </TouchableOpacity>
        <StyledText disabled={error || seconds !== 0} border={true}>
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
