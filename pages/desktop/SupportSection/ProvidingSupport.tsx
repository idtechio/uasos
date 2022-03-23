import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import CardAdd from "./CardAdd";
import { SupportWrapper, SupportCard, Title } from "./style";

type Offer = {
  id: string;
};

type OfferProps = {
  offers: Offer[];
};

export default function ProvidingSupport({ offers }: OfferProps) {
  const { t } = useTranslation("desktop");
  const router = useRouter();
  const NoOffer = () => (
    <CardAdd label={t("addOffer")} onPress={() => router.push("/host")} />
  );
  const Offers = () => (
    <>
      {offers.map((_) => (
        <SupportCard>
          <span>i'm an host</span>
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
