import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styled from "styled-components/native";
import { AccommodationTime } from "../../../src/helpers/FormTypes";
import CardAdd from "./CardAdd";
import { SupportWrapper, SupportCard, Title } from "./style";
import MarkerIcon from "../../../src/style/svgs/marker.svg";
import UsersIcon from "../../../src/style/svgs/users.svg";
import ClockIcon from "../../../src/style/svgs/clock.svg";
import ArrowIcon from "../../../src/style/svgs/arrow.svg";
import { Theme } from "../../../src/style/theme.config";
import { Routes } from "../../../src/consts/router";

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
          <div>[here header]</div>
          <SectionInfo>
            <Info>
              <MarkerIcon width="20" height="20" />
              <Label>{t("city")}:</Label>
              <Label>{o.city}</Label>
            </Info>
            <Info>
              <UsersIcon width="20" height="20" />
              <Label>{t("numberOfPeople")}:</Label>
              <Label>{o.beds}</Label>
            </Info>
            <Info>
              <ClockIcon width="20" height="20" />
              <Label>{t("duration")}:</Label>
              <Label>{t(o.duration)}</Label>
            </Info>
          </SectionInfo>
          <SectionDetails
            onPress={() => {
              router.push(Routes.OFFER_DETAILS);
            }}
          >
            <DetailsText>{t("details")}</DetailsText>
            <ArrowIconWrapper>
              <ArrowIcon width="20" height="20" />
            </ArrowIconWrapper>
          </SectionDetails>
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

const SectionInfo = styled.View``;
const Info = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  padding-bottom: 7px;
`;
const Label = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  padding-right: 5px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;
const SectionDetails = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const DetailsText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  padding: 0px 12px;
`;
const ArrowIconWrapper = styled.View`
  transform: rotate(270deg);
  top: -4px;
`;
