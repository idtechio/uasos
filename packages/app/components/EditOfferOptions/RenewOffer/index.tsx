import React from "react";
import { useWindowDimensions, ActivityIndicator } from "react-native";
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
  styles,
} from "../style";
import RenderHtml from "react-native-render-html";

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
  const { width } = useWindowDimensions();

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
        <RenderHtml
          tagsStyles={{ body: styles.html }}
          contentWidth={width}
          source={{ html: t("others:offer.popup.renew.expiredMsg") }}
        />
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
