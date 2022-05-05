import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { OfferProps, ShelterType } from "../../../pages/api/listing/offers";
import { MatchedOfferProps } from "../../../pages/api/listing/requests";
import AtIcon from "../../style/svgs/at.svg";
import DurationIcon from "../../style/svgs/calendar.svg";
import ArrowIcon from "../../style/svgs/chevron-down.svg";
import AccommodationIcon from "../../style/svgs/home.svg";
import AddressIcon from "../../style/svgs/marker.svg";
import PhoneIcon from "../../style/svgs/phone2.svg";
import HostIcon from "../../style/svgs/user-check.svg";
import GuestsIcon from "../../style/svgs/users.svg";
import { toAccomodationTime } from "../SupportSection/mapper";
import DataField from "./DataField";
import HostAdditionalInfo, { InfoType } from "./HostAdditionalInfo";
import { FlexWrapper, Header, Title } from "./style";

interface HostCardContentProps {
  offer: OfferProps | MatchedOfferProps | null;
  showContact?: boolean;
}

export default function HostCardContent({
  offer,
  showContact,
}: HostCardContentProps) {
  const { t } = useTranslation(["others", "common"]);

  const [showAdditionalInfo, setShowAdditionalInfo] = React.useState(true);
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
        <Title>{t("others:forms.generic.hostProfile")}</Title>
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
            label={t("others:forms.generic.hostWithName", {
              name: offer?.name,
            })}
          />
        )}
        {showContact && offer?.email && (
          <DataField
            isBlue={true}
            Icon={AtIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.generic.emailAddressWithData", {
              mail: offer?.email,
            })}
          />
        )}

        {showContact && offer?.phone_num && (
          <DataField
            isBlue={true}
            Icon={PhoneIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.generic.phoneNumberWithData", {
              number: offer?.phone_num,
            })}
          />
        )}

        {offer?.city && (
          <DataField
            Icon={AddressIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.generic.city", {
              city: offer?.closest_city,
            })}
          />
        )}

        {offer?.shelter_type && offer?.shelter_type.length && (
          <DataField
            Icon={AccommodationIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.match.accommodationTypeWithData", {
              type: offer.shelter_type
                .map((el: ShelterType) =>
                  t(`common:staticValues.accommodationTypes.${el}`)
                )
                .join(", "),
            })}
          />
        )}
        {offer?.beds && (
          <DataField
            Icon={GuestsIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.match.numberOfPeopleWithData", {
              number: offer?.beds,
            })}
          />
        )}
        {offer?.duration_category && offer?.duration_category.length && (
          <DataField
            Icon={DurationIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.match.durationWithData", {
              number: t(
                `common:hostAdd.accommodationTimeLabel.${toAccomodationTime(
                  offer.duration_category
                )}`
              ),
              unit: "",
            })}
          />
        )}

        {/* TODO: display attached photos */}
      </FlexWrapper>
      {showAdditionalInfo ? <HostAdditionalInfo info={additionalInfo} /> : null}
    </>
  );
}
