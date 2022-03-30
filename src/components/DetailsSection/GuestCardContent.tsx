import React from "react";
import DataField from "./DataField";
import { TouchableOpacity } from "react-native";
import ArrowIcon from "../../style/svgs/chevron-down.svg";
import { Header, Title, FlexWrapper } from "./style";
import GuestAdditionalInfo from "./GuestAdditionalInfo";
import AddressIcon from "../../style/svgs/marker.svg";
import GuestsIcon from "../../style/svgs/users.svg";
import DurationIcon from "../../style/svgs/calendar.svg";
import { useTranslation } from "react-i18next";

interface GuestCardContentProps {
  offer: {
    name: string;
    beds: string;
    group_relation: string;
    duration_category: string;
    searched_city?: string;
  };
}

export default function GuestCardContent({ offer }: GuestCardContentProps) {
  const { t } = useTranslation("offer-details");
  const [showAdditionalInfo, setShowAdditionalInfo] =
    React.useState<boolean>(false);
  const additionalInfo = { diversity: true, pregnancy: true, disability: true };
  return (
    <>
      <Header>
        <Title>{t("guestProfile")}</Title>
        {additionalInfo ? (
          <TouchableOpacity
            onPress={() => setShowAdditionalInfo(!showAdditionalInfo)}
            style={
              showAdditionalInfo ? { transform: [{ rotate: "180deg" }] } : null
            }
          >
            <ArrowIcon />
          </TouchableOpacity>
        ) : null}
      </Header>
      <FlexWrapper>
        <DataField
          Icon={GuestsIcon}
          iconWidth={15}
          iconHeight={15}
          label={t("guest")}
          value={offer.name}
        />
        <DataField
          Icon={DurationIcon}
          iconWidth={15}
          iconHeight={15}
          label={t("duration")}
          value={offer.duration_category}
        />
        <DataField
          Icon={AddressIcon}
          iconWidth={15}
          iconHeight={15}
          label={t("address")}
          value={offer.searched_city}
        />
        <DataField
          Icon={GuestsIcon}
          iconWidth={15}
          iconHeight={15}
          label={t("peopleNumber")}
          value={offer.beds}
        />
        <DataField
          Icon={GuestsIcon}
          iconWidth={15}
          iconHeight={15}
          label={t("groupType")}
          value={offer.group_relation}
        />
      </FlexWrapper>
      {showAdditionalInfo ? (
        <GuestAdditionalInfo info={additionalInfo} />
      ) : null}
    </>
  );
}
