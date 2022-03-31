import { StyleProp, View, ViewStyle } from "react-native";
import DetailsCard from "./DetailsCard";
import GuestCardContent from "./GuestCardContent";
import HostCardContent from "./HostCardContent";

export type DetailsSectionProps = {
  containerStyle?: StyleProp<ViewStyle>;
};

const offer = {
  type: "host",
  name: "Alina",
  country: "Poland",
  phone_num: `098709879087`,
  email: "alina@test.com",
  city: "Warsaw",
  listing_country: "Poland",
  shelter_type: "room",
  group_relation: "mother_with_children",
  acceptable_group_relations: "mother_with_children",
  beds: "3",
  ok_for_pregnant: true,
  ok_for_disabilities: true,
  ok_for_animals: true,
  ok_for_elderly: true,
  ok_for_any_nationality: true,
  duration_category: "month",
  transport_included: true,
  attachments: [],
  matchedOffer: null,
  matchedRequest: {
    type: "guest",
    name: "Karina",
    phone_num: `1234563452324`,
    email: "karina@test.com",
    acceptable_shelter_types: "room",
    beds: "3",
    group_relation: "mother_with_children",
    is_pregnant: true,
    is_with_disability: true,
    is_with_animal: true,
    is_with_elderly: true,
    is_ukrainian_nationality: "ukraine",
    duration_category: "month",
    country: "Ukraine",
    searched_city: "Warsaw",
    matchedOffer: null,
  },
};

export default function DetailsSection({
  containerStyle,
}: DetailsSectionProps) {
  return (
    <View style={containerStyle}>
      {offer ? (
        <DetailsCard type={offer.type}>
          {offer.type === "host" ? (
            <HostCardContent offer={offer} />
          ) : (
            <GuestCardContent offer={offer} />
          )}
        </DetailsCard>
      ) : null}
      {offer && offer.matchedRequest ? (
        <DetailsCard>
          <GuestCardContent offer={offer.matchedRequest} />
        </DetailsCard>
      ) : offer.matchedOffer ? (
        <DetailsCard>
          <HostCardContent offer={offer.matchedOffer} />
        </DetailsCard>
      ) : null}
    </View>
  );
}
