import React from "react";
import { ActivityIndicator } from "react-native";
import { useTranslation } from "react-i18next";
import { useRenewItem } from "../../../queries/useListing";

import HomeIllustration from "../../../style/svgs/home_illustration.svg";
import { ButtonCta } from "../../../components/Buttons";
import { TargetTypes } from "../EditOfferButton/types";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
  InnerHTML,
  InnerHTMLText,
} from "../style";
import RenderHtml from "react-native-render-html";
import { primary } from "app/provider/theme/theme.config";

const tagsStyles = {
  body: {
    color: primary.colors.text,
    fontFamily: "RobotoRegular",
  },
};

export default function RenewOffer({
  close,
  targetID,
  targetType,
}: {
  close(): void;
  targetID: string;
  targetType: TargetTypes;
}) {
  const { t } = useTranslation();

  const { mutate, isLoading } = useRenewItem();

  const handleRenew = () => mutate({ targetID, targetType });

  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <HomeIllustration />
      <FormHeader style={{ marginTop: 38 }}>
        {t("others:common.words.renew")}
      </FormHeader>
      <InnerHTML>
        <InnerHTMLText>
          <RenderHtml
            tagsStyles={tagsStyles}
            source={{ html: t("others:offer.popup.renew.expiredMsg") }}
          />
        </InnerHTMLText>
      </InnerHTML>

      <FormDescription style={{ marginTop: 22 }}>
        {t("others:forms.renew.re-activateOffer")}
      </FormDescription>
      <FormFooter style={{ marginTop: 57 }}>
        <ButtonCta
          onPress={close}
          variant="outlined"
          anchor={t("others:common.buttons.cancel")}
        />
        <ButtonCta
          onPress={handleRenew}
          anchor={
            isLoading ? <ActivityIndicator /> : t("others:common.words.renew")
          }
        />
      </FormFooter>
    </FormWrapper>
  );
}
