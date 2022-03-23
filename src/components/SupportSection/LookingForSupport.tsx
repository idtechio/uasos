import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Routes } from "../../consts/router";
import { AnnouncementHighlights } from "./AnnouncementHighlights";
import CardAdd from "./CardAdd";
import DetailsLink from "./DetailsLink";
import { Offer } from "./ProvidingSupport";
import { SupportCard, SupportWrapper, Title } from "./style";

type RequestProps = {
  requests: Offer[];
};

export default function LookingForSupport({
  requests,
}: RequestProps): JSX.Element {
  const { t } = useTranslation("desktop");
  const router = useRouter();
  const NoOffer = () => (
    <CardAdd
      label={t("addSubmission")}
      onPress={() => router.push(Routes.GUEST)}
    />
  );
  const Offers = () => (
    <>
      {requests.map((_) => (
        <SupportCard key={_.id}>
          <span>{"I'm an guest"}</span>
          <AnnouncementHighlights data={_} />
          <DetailsLink href={Routes.OFFER_DETAILS} />
        </SupportCard>
      ))}
    </>
  );
  return (
    <SupportWrapper>
      <Title>{t("yourSubmission")}</Title>
      {requests.length > 0 ? <Offers /> : <NoOffer />}
    </SupportWrapper>
  );
}
