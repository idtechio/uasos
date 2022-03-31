import React from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { RequestProps } from "../../../pages/api/listing/requests";
import AtIcon from "../../style/svgs/at.svg";
import DurationIcon from "../../style/svgs/calendar.svg";
import ArrowIcon from "../../style/svgs/chevron-down.svg";
import AddressIcon from "../../style/svgs/marker.svg";
import PhoneIcon from "../../style/svgs/phone2.svg";
import GuestsIcon from "../../style/svgs/users.svg";
import DataField from "./DataField";
import GuestAdditionalInfo from "./GuestAdditionalInfo";
import { FlexWrapper, Header, Title } from "./style";

interface GuestCardContentProps {
  request: RequestProps | null;
  showContact?: boolean;
}

export default function GuestCardContent({
  request,
  showContact,
}: GuestCardContentProps) {
  const { t: t2 } = useTranslation("common");
  const { t } = useTranslation("offer-details");

  const [showAdditionalInfo, setShowAdditionalInfo] =
    React.useState<boolean>(false);

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
        {request?.name && (
          <DataField
            Icon={GuestsIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("guest")}
            value={request?.name}
          />
        )}

        {showContact && request?.email && (
          <DataField
            isBlue={true}
            Icon={AtIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("emailAddress")}
            value={request?.email}
          />
        )}

        {showContact && request?.phone_num && (
          <DataField
            isBlue={true}
            Icon={PhoneIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("phoneNumber")}
            value={request?.phone_num}
          />
        )}

        {request?.duration_category && (
          <DataField
            Icon={DurationIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("duration")}
            value={(typeof request.duration_category === "string"
              ? request.duration_category.split(",")
              : request.duration_category
            )
              .map((el: string) => t2(`staticValues.timePeriod.${el}`))
              .join(", ")}
          />
        )}

        {request?.city && (
          <DataField
            Icon={AddressIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("address")}
            value={request?.city}
          />
        )}

        {request?.beds && (
          <DataField
            Icon={GuestsIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("peopleNumber")}
            value={request?.beds}
          />
        )}

        {request?.group_relation && (
          <DataField
            Icon={GuestsIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("groupType")}
            value={(typeof request.group_relation === "string"
              ? request.group_relation.split(",")
              : request.group_relation
            )
              .map((el: string) => t2(`staticValues.groupRelations.${el}`))
              .join(", ")}
          />
        )}
      </FlexWrapper>
      {showAdditionalInfo ? (
        <GuestAdditionalInfo info={additionalInfo} />
      ) : null}
    </>
  );
}
