import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { MatchedRequestProps } from "../../../pages/api/listing/offers";
import { RequestProps } from "../../../pages/api/listing/requests";
import AtIcon from "../../style/svgs/at.svg";
import DurationIcon from "../../style/svgs/calendar.svg";
import ArrowIcon from "../../style/svgs/chevron-down.svg";
import AddressIcon from "../../style/svgs/marker.svg";
import PhoneIcon from "../../style/svgs/phone2.svg";
import GuestsIcon from "../../style/svgs/users.svg";
import { toAccomodationTime } from "../SupportSection/mapper";
import DataField from "./DataField";
import GuestAdditionalInfo from "./GuestAdditionalInfo";
import { FlexWrapper, Header, Title } from "./style";

interface GuestCardContentProps {
  request: RequestProps | MatchedRequestProps | null;
  showContact?: boolean;
}

type GroupRelationLabel =
  | "single_man"
  | "single_woman"
  | "spouses"
  | "mother_with_children"
  | "family_with_children"
  | "unrelated_group";

export default function GuestCardContent({
  request,
  showContact,
}: GuestCardContentProps) {
  const { t } = useTranslation();

  const [showAdditionalInfo, setShowAdditionalInfo] = React.useState(true);

  const additionalInfo = {
    diversity: request?.is_ukrainian_nationality,
    pregnancy: request?.is_pregnant,
    disability: request?.is_with_disability,
    elderly: request?.is_with_elderly,
    animals: request?.is_with_animal,
  };

  return (
    <>
      <Header>
        <Title>{t("others:forms.match.guestProfile")}</Title>
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
        {request?.name && (
          <DataField
            Icon={GuestsIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.generic.guest", { name: request?.name })}
          />
        )}

        {showContact && request?.email && (
          <DataField
            isBlue={true}
            Icon={AtIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.generic.emailAddressWithData", {
              mail: request?.email,
            })}
          />
        )}

        {showContact && request?.phone_num && (
          <DataField
            isBlue={true}
            Icon={PhoneIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.generic.phoneNumberWithData", {
              number: request?.phone_num,
            })}
          />
        )}

        {request?.duration_category && (
          <DataField
            Icon={DurationIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.match.durationWithData", {
              number: t(
                `common:hostAdd.accommodationTimeLabel.${toAccomodationTime(
                  request.duration_category
                )}`
              ),
              unit: "",
            })}
          />
        )}

        {request?.city && (
          <DataField
            Icon={AddressIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.match.searchAddress", {
              city: request?.city,
            })}
          />
        )}

        {request?.beds && (
          <DataField
            Icon={GuestsIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.generic.peopleInGroup", {
              number: request?.beds,
            })}
          />
        )}

        {request?.group_relation && (
          <DataField
            Icon={GuestsIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("others:forms.generic.groupType", {
              type: (request.group_relation as Array<GroupRelationLabel>)
                .map((el: GroupRelationLabel) =>
                  t(
                    `common:staticValues.groupRelations.${
                      el as GroupRelationLabel
                    }`
                  )
                )
                .join(", "),
            })}
          />
        )}
      </FlexWrapper>
      {showAdditionalInfo ? (
        <GuestAdditionalInfo info={additionalInfo} />
      ) : null}
    </>
  );
}
