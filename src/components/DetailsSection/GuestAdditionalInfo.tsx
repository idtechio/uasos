import React from "react";
import { Subtitle, Info, FlexWrapper, ItemsColumn } from "./style";
import { Bullet, ListItem } from "../WarningSection/style";
import { StyleProp, ViewStyle } from "react-native";
import { useTranslation } from "react-i18next";

interface GuestAdditionalInfoProps {
  info: {
    disability: boolean;
    pregnancy: boolean;
    diversity: boolean;
    animals: boolean;
    elderly: boolean;
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
        {info.disability && (
          <ListItem>
            <Bullet />
            <Info>{t("disabilityPresent")}</Info>
          </ListItem>
        )}

        {info.pregnancy && (
          <ListItem>
            <Bullet />
            <Info>{t("pregnancyPresent")}</Info>
          </ListItem>
        )}

        {info.diversity && (
          <ListItem>
            <Bullet />
            <Info>{t("diversityPresent")}</Info>
          </ListItem>
        )}

        {info.animals && (
          <ListItem>
            <Bullet />
            <Info>{t("animalsPresent")}</Info>
          </ListItem>
        )}

        {info.elderly && (
          <ListItem>
            <Bullet />
            <Info>{t("elderPresent")}</Info>
          </ListItem>
        )}
      </ItemsColumn>
    </FlexWrapper>
  );
}
