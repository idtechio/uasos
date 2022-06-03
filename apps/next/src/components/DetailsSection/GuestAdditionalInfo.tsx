/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import { Subtitle, Info, FlexWrapper, ItemsColumn } from "./style";
import { Bullet, ListItem } from "../../../../../packages/app/components/WarningSection/style";
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
  const { t } = useTranslation();

  return (
    <FlexWrapper style={borderTopStyle}>
      <Subtitle>
        {t("others:forms.generic.additionalGroupInformation")}
      </Subtitle>
      <ItemsColumn>
        {info.disability === "TRUE" && (
          <ListItem>
            <Bullet />
            <Info>{t("others:forms.generic.groupInformation.disability")}</Info>
          </ListItem>
        )}

        {info.pregnancy === "TRUE" && (
          <ListItem>
            <Bullet />
            <Info>{t("others:forms.generic.groupInformation.pregnancy")}</Info>
          </ListItem>
        )}

        {info.diversity === "TRUE" && (
          <ListItem>
            <Bullet />
            <Info>
              {t("others:forms.generic.groupInformation.multicultural")}
            </Info>
          </ListItem>
        )}

        {info.animals === "TRUE" && (
          <ListItem>
            <Bullet />
            <Info>{t("others:forms.generic.groupInformation.animals")}</Info>
          </ListItem>
        )}

        {info.elderly === "TRUE" && (
          <ListItem>
            <Bullet />
            <Info>{t("others:forms.generic.groupInformation.elders")}</Info>
          </ListItem>
        )}
      </ItemsColumn>
    </FlexWrapper>
  );
}
