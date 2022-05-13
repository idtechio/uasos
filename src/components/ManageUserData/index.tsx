import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useTranslation } from "next-i18next";
import { ContentContainer, TextComponent } from "./style";
import RemoveImage from "../../style/svgs/account_removed.svg";
import ButtonCta from "../Buttons/ButtonCta";
import { Routes } from "../../consts/router";
import router from "next/router";

const BUTTONS_MARGIN = "25px 0";

export default function ManageUserData() {
  const { t } = useTranslation("common");
  const [removed, setRemoved] = useState(false);
  const [confirmRemove, setConfirmRemove] = useState(false);

  const goHomeHandler = () => {
    router.push(Routes.DASHBOARD);
  };

  const confirmHandler = (state: boolean) => () => {
    setConfirmRemove(state);
  };

  return (
    <ContentContainer>
      <TextComponent marginBottom>{t("navigationDrawer.manage")}</TextComponent>
      {removed ? (
        <>
          <RemoveImage />
          <TextComponent marginTop marginBottom alignCenter>
            {t("data removed")}
          </TextComponent>
          <ButtonCta
            anchor={t("thankfulnessModal.backToMainPage")}
            onPress={goHomeHandler}
          />
        </>
      ) : (
        <>
          <TextComponent small marginBottom>
            {t("Remove blablablablb")}
          </TextComponent>
          {confirmRemove ? (
            <>
              <ButtonCta
                anchor={t("others:common.buttons.confirm")}
                onPress={goHomeHandler}
                margin={BUTTONS_MARGIN}
              />
              <ButtonCta
                anchor={t("others:common.buttons.reject")}
                onPress={confirmHandler(false)}
                style={buttonStyles.rejectButton}
              />
            </>
          ) : (
            <ButtonCta
              anchor={t("hostAdd.accomodationPhotoReset")}
              anchorColor={"#fff"}
              onPress={confirmHandler(true)}
              style={buttonStyles.removeButton}
              margin={BUTTONS_MARGIN}
            />
          )}
        </>
      )}
    </ContentContainer>
  );
}

const buttonStyles = StyleSheet.create({
  rejectButton: {
    border: "1.5px solid #003566",
    backgroundColor: "none",
  },
  removeButton: {
    backgroundColor: "#F55A4F",
  },
});
