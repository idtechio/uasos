import React from "react";
import { Subtitle, FlexWrapper, ItemsRow } from "./style";
import { StyleProp, ViewStyle } from "react-native";
import DataField from "./DataField";
import DisabilityIcon from "../../style/svgs/disability.svg";
import AnimalsIcon from "../../style/svgs/animals.svg";
import TransportIcon from "../../style/svgs/truck.svg";
import { useTranslation } from "react-i18next";

interface HostAdditionalInfoProps {
  info: { animals: boolean; disability: boolean; transport: boolean };
}
export const borderTopStyle: StyleProp<ViewStyle> = {
  borderTopWidth: 3,
  borderTopColor: "#F2F2F2",
};

export default function HostAdditionalInfo({ info }: HostAdditionalInfoProps) {
  const { t } = useTranslation("offer-details");

  return (
    <FlexWrapper style={borderTopStyle}>
      <Subtitle>{t("accommodationExtraInfo")}</Subtitle>
      <ItemsRow>
        {info.transport && (
          <DataField
            Icon={TransportIcon}
            iconWidth={12}
            iconHeight={12}
            label={t("transportOffered")}
          />
        )}

        {info.animals && (
          <DataField
            Icon={AnimalsIcon}
            iconWidth={16}
            iconHeight={14}
            label={t("petsAccepted")}
          />
        )}

        {info.disability && (
          <DataField
            Icon={DisabilityIcon}
            iconWidth={12}
            iconHeight={13}
            label={t("disabilityAccepted")}
          />
        )}
      </ItemsRow>
    </FlexWrapper>
  );
}
