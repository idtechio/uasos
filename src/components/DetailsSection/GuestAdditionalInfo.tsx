import React from "react";
import { Subtitle, Info, FlexWrapper, ItemsColumn } from "./style";
import { Bullet, ListItem } from "../WarningSection/style";
import { StyleProp, ViewStyle } from "react-native";
import { useTranslation } from "react-i18next";
import { Boolean } from "../../../pages/api/listing/requests";

interface GuestAdditionalInfoProps {
  info: {
    disability?: Boolean;
    pregnancy?: Boolean;
    diversity?: Boolean;
    animals?: Boolean;
    elderly?: Boolean;
  };
}
export const borderTopStyle: StyleProp<ViewStyle> = {
  borderTopWidth: 3,
  borderTopColor: "#F2F2F2",
};

export default function GuestAdditionalInfo({
  info,
}: GuestAdditionalInfoProps) {
  const { t } = useTranslation("offer-details");

  return (
    <FlexWrapper style={borderTopStyle}>
      <Subtitle>{t("groupExtraInfo")}</Subtitle>
      <ItemsColumn>
        {info.disability === "TRUE" && (
          <ListItem>
            <Bullet />
            <Info>{t("disabilityPresent")}</Info>
          </ListItem>
        )}

        {info.pregnancy === "TRUE" && (
          <ListItem>
            <Bullet />
            <Info>{t("pregnancyPresent")}</Info>
          </ListItem>
        )}

        {info.diversity === "TRUE" && (
          <ListItem>
            <Bullet />
            <Info>{t("diversityPresent")}</Info>
          </ListItem>
        )}

        {info.animals === "TRUE" && (
          <ListItem>
            <Bullet />
            <Info>{t("animalsPresent")}</Info>
          </ListItem>
        )}

        {info.elderly === "TRUE" && (
          <ListItem>
            <Bullet />
            <Info>{t("elderPresent")}</Info>
          </ListItem>
        )}
      </ItemsColumn>
    </FlexWrapper>
  );
}
