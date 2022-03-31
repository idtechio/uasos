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

export default function DetailsSection({
  containerStyle,
  isOffer,
  data,
}: DetailsSectionProps) {
  return (
    <View style={containerStyle}>
      {data ? (
        <DetailsCard type={isOffer ? "host" : "guest"}>
          {isOffer ? (
            <HostCardContent offer={data} />
          ) : (
            <GuestCardContent request={data} />
          )}
        </DetailsCard>
      ) : null}
      {data?.matchedRequest ? (
        <DetailsCard>
          <GuestCardContent
            request={data?.matchedRequest}
            showContact={data.match_status === "accepted"}
          />
        </DetailsCard>
      ) : data?.matchedOffer ? (
        <DetailsCard>
          <HostCardContent
            offer={data?.matchedOffer}
            showContact={data.match_status === "accepted"}
          />
        </DetailsCard>
      ) : null}
    </View>
  );
}
