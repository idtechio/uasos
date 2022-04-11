import { useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useTheme } from "styled-components/native";
import IDRed from "../../style/svgs/id_red.svg";
import IDGreen from "../../style/svgs/id_green.svg";
import { Theme } from "../../style/theme.config";
import Toast from "../Toast";
import { AuthContext } from "../../../pages/_app";
import { ActivityIndicator } from "react-native";
import { Routes } from "../../consts/router";
import {
  getIsWaitingVerification,
  removeIsWaitingVerification,
  getIsSuccessToastShown,
  setIsSuccessToastShown,
} from "./helpers";

const IdVerificationToast = () => {
  const theme = useTheme() as Theme;
  const router = useRouter();
  const { t } = useTranslation();

  const { account } = useContext(AuthContext);
  const identityVerified = !!account?.identityVerified;

  const isWaitingVerification = getIsWaitingVerification();
  const isSuccessToastShown = getIsSuccessToastShown();

  const [isToastOpened, setIsToastOpened] = useState(!identityVerified);

  useEffect(() => {
    if (identityVerified && !isSuccessToastShown) {
      setIsToastOpened(true);
      setIsSuccessToastShown();
      removeIsWaitingVerification();
    }
  }, [identityVerified, isSuccessToastShown]);

  const verifyHandler = useCallback(() => {
    router.push(Routes.ID_CHECK);
  }, [router]);

  const closeToastHandler = useCallback(() => {
    setIsToastOpened(false);
  }, []);

  const icon = identityVerified ? <IDGreen /> : <IDRed />;
  const label = identityVerified
    ? t("others:desktop.checks.idVerified")
    : t("others:desktop.checks.idNotVerified");
  const color = identityVerified ? theme.colors.positive : theme.colors.error;
  const cta = identityVerified
    ? { onPress: closeToastHandler, closable: true }
    : { onPress: verifyHandler, label: t("desktop:verify") };

  // TODO: Add translation for this text
  const waitingLabel =
    "Your identity is being verified, refresh page after couple seconds.";

  return (
    <>
      {isToastOpened && (
        <Toast
          color={color}
          label={isWaitingVerification ? waitingLabel : label}
          cta={isWaitingVerification ? {} : cta}
          icon={isWaitingVerification ? <ActivityIndicator /> : icon}
          contaierStyle={{ marginTop: 10 }}
        />
      )}
    </>
  );
};

export default IdVerificationToast;
