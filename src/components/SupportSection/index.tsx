import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import TabPanel from "../TabPanel";
import { AccommodationTime } from "../../helpers/FormTypes";
import LookingForSupport from "./LookingForSupport";
import ProvidingSupport, { MatchState, Offer } from "./ProvidingSupport";

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
      "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltfbcc7f32e0cd6ff5/617b2ba9b187491e7c56dfca/getting-started-on-airbnb-optimized.jpg",
    beds: 2,
    city: "Gdańsk",
    duration: AccommodationTime.LONGER,
    name: "housing",
    state: MatchState.confirmed,
  },
];

export default function SupportSection() {
  const { t } = useTranslation("desktop");
  const items = useMemo(() => {
    return [
      {
        key: "1",
        title: t("providingSupport"),
        content: <ProvidingSupport offers={fakeOffers} />,
      },
      {
        key: "2",
        title: t("lookingForSupport"),
        content: <LookingForSupport requests={fakeOffers} />,
      },
    ];
  }, [t]);

  return <TabPanel items={items} initialSelectedIndex={0} />;
}
