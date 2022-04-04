import { StyleProp, View, ViewStyle } from "react-native";
import { OfferProps } from "../../../pages/api/listing/offers";
import { RequestProps } from "../../../pages/api/listing/requests";
import DetailsCard from "./DetailsCard";
import GuestCardContent from "./GuestCardContent";
import HostCardContent from "./HostCardContent";

export type DetailsSectionProps = {
  containerStyle?: StyleProp<ViewStyle>;
  isOffer?: boolean;
  data?: OfferProps | RequestProps | null;
};

// TODO: fix as RequestProps | OfferProps typing
export default function DetailsSection({
  containerStyle,
  isOffer,
  data,
}: DetailsSectionProps) {
  return (
    <View style={containerStyle}>
      {(data as RequestProps)?.matchedOffer && (
        <DetailsCard>
          <HostCardContent
            offer={(data as RequestProps)?.matchedOffer as OfferProps}
            showContact={(data as OfferProps).match_status === "accepted"}
          />
        </DetailsCard>
      )}
      {(data as OfferProps)?.matchedRequest && (
        <DetailsCard>
          <GuestCardContent
            request={(data as OfferProps)?.matchedRequest as RequestProps}
            showContact={(data as RequestProps).match_status === "accepted"}
          />
        </DetailsCard>
      )}
      {data ? (
        <DetailsCard type={isOffer ? "host" : "guest"}>
          {isOffer ? (
            <HostCardContent offer={data as OfferProps} />
          ) : (
            <GuestCardContent request={data as RequestProps} />
          )}
        </DetailsCard>
      ) : null}
    </View>
  );
}
