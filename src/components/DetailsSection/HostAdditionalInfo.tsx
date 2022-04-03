import React from "react";
import { Subtitle, FlexWrapper, ItemsRow } from "./style";
import { StyleProp, ViewStyle } from "react-native";
import DataField from "./DataField";
import DisabilityIcon from "../../style/svgs/disability.svg";
import AnimalsIcon from "../../style/svgs/animals.svg";
import TransportIcon from "../../style/svgs/truck.svg";
import ElderIcon from "../../style/svgs/elder.svg";
import PregnantIcon from "../../style/svgs/pregnant.svg";
import DiversityIcon from "../../style/svgs/earth.svg";
import { useTranslation } from "react-i18next";
import { Boolean } from "../../../pages/api/listing/requests";

export type InfoType = {
  animals?: Boolean;
  disability?: Boolean;
  transport?: Boolean;
  pregnancy?: Boolean;
  elderly?: Boolean;
  diversity?: Boolean;
};
interface HostAdditionalInfoProps {
  info: InfoType;
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
        {info.transport === "TRUE" && (
          <DataField
            Icon={TransportIcon}
            iconWidth={12}
            iconHeight={12}
            label={t("transportOffered")}
          />
        )}

        {info.animals === "TRUE" && (
          <DataField
            Icon={AnimalsIcon}
            iconWidth={16}
            iconHeight={14}
            label={t("petsAccepted")}
          />
        )}

        {info.disability === "TRUE" && (
          <DataField
            Icon={DisabilityIcon}
            iconWidth={12}
            iconHeight={13}
            label={t("disabilityAccepted")}
          />
        )}

        {info.pregnancy === "TRUE" && (
          <DataField
            Icon={PregnantIcon}
            iconWidth={12}
            iconHeight={13}
            label={t("pregnancyAccepted")}
          />
        )}

        {info.elderly === "TRUE" && (
          <DataField
            Icon={ElderIcon}
            iconWidth={12}
            iconHeight={13}
            label={t("elderlyAccepted")}
          />
        )}

        {info.diversity === "TRUE" && (
          <DataField
            Icon={DiversityIcon}
            iconWidth={12}
            iconHeight={13}
            label={t("diversityAccepted")}
          />
        )}
      </ItemsRow>
    </FlexWrapper>
  );
}
