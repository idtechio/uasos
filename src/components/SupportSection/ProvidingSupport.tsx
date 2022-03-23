/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Routes } from "../../consts/router";
import { AccommodationTime } from "../../helpers/FormTypes";
import { AnnouncementHighlights } from "./AnnouncementHighlights";
import CardAdd from "./CardAdd";
import DetailsLink from "./DetailsLink";
import { SupportCard, SupportWrapper, Title } from "./style";

export enum MatchState {
  inactive = "inactive",
  looking = "lookingForAMatch",
  matched = "weFoundAMatch",
  beingConfirmed = "beingConfirmed",
  confirmed = "confirmed",
}

export type Offer = {
  id: string;
  name: string;
  imageUrl: string;
  city: string;
  beds: number;
  duration: AccommodationTime;
  state: MatchState;
};

type OfferProps = {
  offers: Offer[];
};

export default function ProvidingSupport({ offers }: OfferProps) {
  const { t } = useTranslation("desktop");
  const router = useRouter();
  const NoOffer = () => (
    <CardAdd label={t("addOffer")} onPress={() => router.push(Routes.HOST)} />
  );
  const Offers = () => (
    <>
      {offers.map((o) => (
        <SupportCard key={o.id}>
          <img
            src={o.imageUrl}
            alt="Announcement image"
            width={80}
            height={80}
            style={{ borderRadius: 4 }}
          />

          <AnnouncementHighlights data={o} />

          <DetailsLink href={Routes.OFFER_DETAILS} />
        </SupportCard>
      ))}
    </>
  );
  return (
    <SupportWrapper>
      <Title>{t("overviewOfYourOffers")}</Title>
      {offers.length > 0 ? <Offers /> : <NoOffer />}
    </SupportWrapper>
  );
}
