import { ConfirmationResult } from "firebase/auth";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { StyleProp, ViewStyle, ActivityIndicator } from "react-native";
import styled, { useTheme } from "styled-components/native";
import { AuthContext } from "../../../pages/_app";
import { Authorization } from "../../hooks/useAuth";
import EmailIcon from "../../style/svgs/email.svg";
import PhoneIcon from "../../style/svgs/phone.svg";
import { Theme } from "../../style/theme.config";
import SmsVerificationModal from "../SmsVerificationModal";
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
  const [modalOpened, setModalOpened] = useState(false);
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(
    null
  );
  const { identity } = useContext(AuthContext);

  const prepareModal = useCallback(
    async function () {
      if (!identity?.phoneNumber) {
        router.push("user-profile");

        return null;
      }

      const confirmation = await Authorization.signInWithPhone(
        identity?.phoneNumber,
        Authorization.initCaptcha("verify_captcha_container")
      );

      setConfirmation(confirmation);
    },

    [identity?.phoneNumber]
  );

  function openModal() {
    setModalOpened(true);
  }

  function onSuccessCallback() {
    setModalOpened(false);
  }

  useEffect(() => {
    if (modalOpened) {
      prepareModal();
    }

    if (!modalOpened) {
      setConfirmation(null);
    }
  }, [modalOpened, prepareModal]);

  return (
    <>
      <div id="verify_captcha_container" />
      {modalOpened && identity?.phoneNumber && confirmation && (
        <SmsVerificationModal
          mode="LINK"
          callback={onSuccessCallback}
          confirmation={confirmation}
          setVerificationSuccess={() => {}}
          phoneNumber={identity.phoneNumber}
          close={() => setModalOpened(false)}
        />
      )}
      <Toast
        color={theme.colors.error}
        label={t("others:desktop.checks.phoneNotVerified")}
        cta={{ onPress: openModal, label: t("verify") }}
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
