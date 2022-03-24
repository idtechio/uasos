import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styled from "styled-components/native";
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
          <HeaderWrapper>
            <TextWrapper>
              <IdContainer>Id: xxxx</IdContainer>
              <OfferTitle>Housing</OfferTitle>
            </TextWrapper>
          </HeaderWrapper>
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

const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

const TextWrapper = styled.View`
  flex: 1 1 100%;
`;

const IdContainer = styled.Text`
  letter-spacing: 0.5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
`;

const OfferTitle = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: 0.5px;

  color: #003566;

  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  padding-bottom: 8px;
`;
