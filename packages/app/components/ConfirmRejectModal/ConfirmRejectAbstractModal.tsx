import React from "react";
import { StyleSheet } from "react-native";
import { useTranslation } from "app/common-i18n/use-translation";
import HouseConfirm from "../../style/svgs/house-confirm.svg";
import HouseReject from "../../style/svgs/house-reject.svg";
import { ButtonCta } from "../Buttons";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../EditOfferOptions/style";
import { CONFIRMATION_TEXT } from "./constants";
import { styleFor } from "app/utils/styleFor";
import { scale } from "app/utils/scale";

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
  title: styleFor({
    web: {
      marginTop: 17,
    },
    native: {
      marginTop: scale(17),
    },
  }),
  content: styleFor({
    web: {
      marginTop: 19,
      maxWidth: "30ch",
    },
    native: {
      marginTop: scale(19),
    },
  }),
  footer: styleFor({
    web: {
      marginTop: 84,
      justifyContent: "center",
    },
    native: {
      marginTop: scale(84),
    },
  }),
});
