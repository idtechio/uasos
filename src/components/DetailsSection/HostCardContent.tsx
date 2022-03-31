import React from "react";
import DataField from "./DataField";
import { Header, Title, FlexWrapper } from "./style";
import { TouchableOpacity } from "react-native";
import ArrowIcon from "../../style/svgs/chevron-down.svg";
import HostAdditionalInfo, { InfoType } from "./HostAdditionalInfo";
import HostIcon from "../../style/svgs/user-check.svg";
import AddressIcon from "../../style/svgs/marker.svg";
import AccommodationIcon from "../../style/svgs/home.svg";
import GuestsIcon from "../../style/svgs/users.svg";
import DurationIcon from "../../style/svgs/calendar.svg";
import AtIcon from "../../style/svgs/at.svg";
import PhoneIcon from "../../style/svgs/phone2.svg";
import { useTranslation } from "react-i18next";
import { MatchedOfferProps } from "../../../pages/api/listing/requests";
import { OfferProps } from "../../../pages/api/listing/offers";

interface HostCardContentProps {
  offer: OfferProps | MatchedOfferProps | null;
  showContact?: boolean;
}

export default function HostCardContent({
  offer,
  showContact,
}: HostCardContentProps) {
  const { t } = useTranslation("offer-details");
  const { t: t2 } = useTranslation("common");

  const [showAdditionalInfo, setShowAdditionalInfo] =
    React.useState<boolean>(false);
  const additionalInfo: InfoType = {
    animals: offer?.ok_for_animals,
    transport: offer?.transport_included,
    disability: offer?.ok_for_disabilities,
    elderly: offer?.ok_for_elderly,
    diversity: offer?.ok_for_any_nationality,
    pregnancy: offer?.ok_for_pregnant,
  };

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
        {offer?.name && (
          <DataField
            Icon={HostIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("host")}
            value={offer?.name}
          />
        )}
        {showContact && offer?.email && (
          <DataField
            isBlue={true}
            Icon={AtIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("emailAddress")}
            value={offer?.email}
          />
        )}

        {showContact && offer?.phone_num && (
          <DataField
            isBlue={true}
            Icon={PhoneIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("phoneNumber")}
            value={offer?.phone_num}
          />
        )}

        {offer?.city && (
          <DataField
            Icon={AddressIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("hostAddress")}
            value={offer?.city}
          />
        )}

        {offer?.shelter_type && offer?.shelter_type.length && (
          <DataField
            Icon={AccommodationIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("accomType")}
            value={offer?.shelter_type
              .map((el: string) => t2(`staticValues.accommodationTypes.${el}`))
              .join(", ")}
          />
        )}
        {offer?.beds && (
          <DataField
            Icon={GuestsIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("maxPeople")}
            value={offer?.beds}
          />
        )}
        {offer?.duration_category && offer?.duration_category.length && (
          <DataField
            Icon={DurationIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("duration")}
            value={offer?.duration_category
              .map((el: string) => t2(`staticValues.timePeriod.${el}`))
              .join(", ")}
          />
        )}

        {/* TODO: display attached photos */}
      </FlexWrapper>
      {showAdditionalInfo ? <HostAdditionalInfo info={additionalInfo} /> : null}
    </>
  );
}
