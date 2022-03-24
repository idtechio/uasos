import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styled from "styled-components/native";
import { Routes } from "../../consts/router";
import { AnnouncementHighlights } from "./AnnouncementHighlights";
import CardAdd from "./CardAdd";
import DetailsLink from "./DetailsLink";
import { Offer } from "./types";
import { SupportCard, SupportWrapper, Title } from "./style";
import StatusBadge from "../StatusBadge";
import EditOfferButton from "../EditOfferOptions/EditOfferButton";

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
      {requests.map((o) => (
        <SupportCard key={o.id}>
          <HeaderWrapper>
            <MoreButtonWrapper>
              <EditOfferButton />
            </MoreButtonWrapper>

            <TextWrapper>
              <IdContainer>Id: xxxx</IdContainer>
              <OfferTitle>Housing</OfferTitle>
            </TextWrapper>
          </HeaderWrapper>
          <StatusBadgeContainer>
            <StatusBadge state={o.state} />
          </StatusBadgeContainer>
          <AnnouncementHighlights data={o} />
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

const MoreButtonWrapper = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9999999;
`;

const StatusBadgeContainer = styled.View`
  align-self: flex-start;
  margin-bottom: 15px;
`;

const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
  position: relative;
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
