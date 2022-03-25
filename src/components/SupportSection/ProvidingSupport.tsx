/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styled from "styled-components/native";
import { Routes } from "../../consts/router";
import EditOfferButton from "../EditOfferOptions/EditOfferButton";
import StatusBadge from "../StatusBadge";
import { AnnouncementHighlights } from "./AnnouncementHighlights";
import CardAdd from "./CardAdd";
import DetailsLink from "./DetailsLink";
import { SupportCard, SupportWrapper, Title } from "./style";
import { Offer } from "./types";

type ProvidingSupportProps = {
  offers: Offer[];
};

export default function ProvidingSupport({ offers }: ProvidingSupportProps) {
  const { t } = useTranslation("desktop");
  const router = useRouter();
  const NoOffer = () => (
    <CardAdd label={t("addOffer")} onPress={() => router.push(Routes.HOST)} />
  );
  const Offers = () => (
    <>
      {offers.map((o) => (
        <SupportCard key={o.id}>
          <HeaderWrapper>
            <MoreButtonWrapper>
              <EditOfferButton />
            </MoreButtonWrapper>

            <ImageWrapper>
              <img
                src={o.imageUrl}
                alt="Announcement image"
                width={80}
                height={80}
                style={{ borderRadius: 4 }}
              />
            </ImageWrapper>
            <TextWrapper>
              <IdContainer>Id: xxxx</IdContainer>
              <OfferTitle>Housing</OfferTitle>
              <div
                style={{
                  alignSelf: "flex-start",
                  justifySelf: "flex-end",
                  marginTop: 14,
                }}
              >
                <StatusBadge state={o.state} />
              </div>
            </TextWrapper>
          </HeaderWrapper>

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

const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  position: relative;
`;

const MoreButtonWrapper = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9999999;
`;

const ImageWrapper = styled.View`
  height: 80px;
  flex: 0 0 80px;
`;

const TextWrapper = styled.View`
  flex: 1 1 100%;
  padding-left: 12.7px;
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
