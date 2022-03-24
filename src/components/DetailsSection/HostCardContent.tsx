import React from "react";
import DataField from "./DataField";
import { Header, Title, FlexWrapper } from "./style";
import { TouchableOpacity } from "react-native";
import ArrowIcon from "../../style/svgs/chevron-down.svg";
import HostAdditionalInfo from "./HostAdditionalInfo";
import HostIcon from "../../style/svgs/user-check.svg";
import AddressIcon from "../../style/svgs/marker.svg";
import AccommodationIcon from "../../style/svgs/home.svg";
import GuestsIcon from "../../style/svgs/users.svg";
import DurationIcon from "../../style/svgs/calendar.svg";
import { useTranslation } from "react-i18next";

interface HostCardContentProps {
  // offer: {
  //   type: string;
  //   name: string;
  //   country: string;
  //   phone_num: string;
  //   email: string;
  //   city: string;
  //   listing_country: string;
  //   shelter_type: string;
  //   group_relation: string;
  //   acceptable_group_relations: string;
  //   beds: string;
  //   ok_for_pregnant: boolean;
  //   ok_for_disabilities: boolean;
  //   ok_for_animals: boolean;
  //   ok_for_elderly: boolean;
  //   ok_for_any_nationality: boolean;
  //   duration_category: string;
  //   transport_included: boolean;
  //   attachments: any;
  //   matchedRequest: any;
  // };
  offer: any;
}

export default function HostCardContent({ offer }: HostCardContentProps) {
  const { t } = useTranslation("offer-details");
  const [showAdditionalInfo, setShowAdditionalInfo] =
    React.useState<boolean>(false);
  const additionalInfo = { animals: true, transport: true, disability: true };

  return (
    <>
      <Header>
        <Title>{t("hostProfile")}</Title>
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
          Icon={HostIcon}
          iconWidth={15}
          iconHeight={15}
          label={t("host")}
          value={offer.name}
        />
        <DataField
          Icon={AddressIcon}
          iconWidth={15}
          iconHeight={15}
          label={t("hostAddress")}
          value={offer.city}
        />
        <DataField
          Icon={AccommodationIcon}
          iconWidth={15}
          iconHeight={15}
          label={t("accomType")}
          value={offer.shelter_type}
        />
        <DataField
          Icon={GuestsIcon}
          iconWidth={15}
          iconHeight={15}
          label={t("maxPeople")}
          value={offer.beds}
        />
        <DataField
          Icon={DurationIcon}
          iconWidth={15}
          iconHeight={15}
          label={t("durationHost")}
          value={offer.duration_category}
        />
        {/* TODO: display attached photos */}
      </FlexWrapper>
      {showAdditionalInfo ? <HostAdditionalInfo info={additionalInfo} /> : null}
    </>
  );
}
