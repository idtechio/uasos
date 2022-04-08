import React from "react";
import { useTranslation } from "react-i18next";

import HomeIllustration from "../../../style/svgs/home_illustration.svg";
import ButtonCta from "../ButtonCta";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../style";

export default function RenewOffer({ close }: { close(): void }) {
  const { t } = useTranslation();

  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <HomeIllustration />
      <FormHeader style={{ marginTop: 38 }}>
        {t("others:common.words.renew")}
      </FormHeader>
      <p
        dangerouslySetInnerHTML={{
          __html: t("others:offer.popup.renew.expiredMsg"),
        }}
        style={{ fontSize: 16, marginTop: 40 }}
      />

      <FormDescription style={{ marginTop: 22 }}>
        {t("others:forms.renew.re-activateOffer")}
      </FormDescription>
      <FormFooter style={{ marginTop: 57 }}>
        <ButtonCta
          onPress={close}
          variant="outlined"
          anchor={t("others:common.buttons.cancel")}
        />
        <ButtonCta onPress={close} anchor={t("others:common.words.renew")} />
      </FormFooter>
    </FormWrapper>
  );
}
