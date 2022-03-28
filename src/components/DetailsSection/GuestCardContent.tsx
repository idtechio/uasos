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
import { RequestProps } from "../../../pages/api/listing/requests";
import { MatchedRequestProps } from "../../../pages/api/listing/offers";

interface GuestCardContentProps {
  request: RequestProps | MatchedRequestProps | null;
}

export default function GuestCardContent({ request }: GuestCardContentProps) {
  const { t } = useTranslation(["offer-details", "common"]);

  const [showAdditionalInfo, setShowAdditionalInfo] =
    React.useState<boolean>(false);

  const additionalInfo = {
    diversity: !request?.is_ukrainian_nationality,
    pregnancy: request?.is_pregnant,
    disability: request?.is_with_disability,
    elderly: request?.is_with_elderly,
    animals: request?.is_with_animal,
  };

  console.log({ request });
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

        {request?.status &&
          request.status === "acceptedByboth" &&
          request?.email && (
            <DataField
              isBlue={true}
              Icon={DurationIcon}
              iconWidth={15}
              iconHeight={15}
              label={t("emailAddress")}
              value={request?.email}
            />
          )}

        {request?.status &&
          request.status === "acceptedByboth" &&
          request?.phone_num && (
            <DataField
              isBlue={true}
              Icon={DurationIcon}
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
            value={request?.duration_category
              .map((el: string) => t(`${el}`))
              .join(", ")}
          />
        )}

        {request?.city && (
          <DataField
            Icon={AddressIcon}
            iconWidth={15}
            iconHeight={15}
            label={t("address")}
            value={t(`${request?.city}`)}
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
            value={request?.group_relation
              .map((el: string) => t(`${el}`))
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
