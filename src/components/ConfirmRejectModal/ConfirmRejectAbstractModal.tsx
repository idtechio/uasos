import React from "react";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import HouseConfirm from "../../style/svgs/house-confirm.svg";
import HouseReject from "../../style/svgs/house-reject.svg";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../EditOfferOptions/style";
import { CONFIRMATION_TEXT } from "./constants";

export interface ConfirmRejectModalProps {
  close: () => void;
  confirm?: boolean;
}

export default function ConfirmRejectAbstractModal({
  close,
  confirm,
}: ConfirmRejectModalProps) {
  const { t } = useTranslation("others");
  const text = confirm ? CONFIRMATION_TEXT.CONFIRM : CONFIRMATION_TEXT.REJECT;

  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      {confirm ? <HouseConfirm /> : <HouseReject />}
      <FormHeader style={styles.title}>{t(text.title)}</FormHeader>
      <FormDescription style={styles.content}>
        {t(text.content)}
      </FormDescription>
      <FormFooter style={styles.footer}>
        <ButtonCta anchor={t("common.buttons.backToProfile")} onPress={close} />
      </FormFooter>
    </FormWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 17,
  },
  content: {
    marginTop: 19,
    maxWidth: "30ch",
  },
  footer: {
    marginTop: 84,
    justifyContent: "center",
  },
});
