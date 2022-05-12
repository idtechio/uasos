import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { ContentContainer, TextComponent } from "./style";
import RemoveImage from "../../style/svgs/account_removed.svg";
import ButtonCta from "../Buttons/ButtonCta";

export default function ManageUserData() {
  const { t } = useTranslation("common");
  const [removed, setRemoved] = useState(false);

  return (
    <ContentContainer>
      <TextComponent marginBottom>{t("navigationDrawer.manage")}</TextComponent>
      {!removed ? (
        <>
          <RemoveImage />
          <TextComponent marginTop marginBottom alignCenter>
            {t("data removed")}
          </TextComponent>
          <ButtonCta anchor={t("thankfulnessModal.backToMainPage")} />
        </>
      ) : (
        <>
          <TextComponent small marginBottom>
            {t("Remove blablablablb")}
          </TextComponent>
        </>
      )}
    </ContentContainer>
  );
}
