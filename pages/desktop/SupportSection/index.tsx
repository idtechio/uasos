import TabPanel from "../../../src/components/TabPanel";
import ProvidingSupport, { MatchState, Offer } from "./ProvidingSupport";
import LookingForSupport from "./LookingForSupport";
import { useTranslation } from "next-i18next";
import { AccommodationTime } from "../../../src/helpers/FormTypes";

const fakeOffers: Offer[] = [
  {
    id: "o1",
    imageUrl:
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/617b2ba9b187491e7c56dfca/getting-started-on-airbnb-optimized.jpg",
    beds: 3,
    city: "Warsaw",
    duration: AccommodationTime.TWO_WEEKS,
    name: "housing",
    state: MatchState.beingConfirmed,
  },
  {
    id: "o2",
    imageUrl:
      "https://www.airbnb.it/rooms/21798804/photos/619557536?federated_search_id=056e5b4d-187d-40d8-ac67-36ba9107e135&source_impression_id=p3_1648047574_mbwk9oiBJSKFFn1Q",
    beds: 2,
    city: "Gdańsk",
    duration: AccommodationTime.LONGER,
    name: "housing",
    state: MatchState.confirmed,
  },
];

export default function SupportSection() {
  const { t } = useTranslation("desktop");
  return (
    <TabPanel
      items={[
        {
          key: "1",
          title: t("providingSupport"),
          content: ProvidingSupport({ offers: fakeOffers }),
        },
        {
          key: "2",
          title: t("lookingForSupport"),
          content: LookingForSupport({ requests: [] }),
        },
      ]}
      initialSelectedIndex={0}
    />
  );
}
