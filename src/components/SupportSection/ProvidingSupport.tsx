/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import "react-loading-skeleton/dist/skeleton.css";
import { ActivityIndicator } from "react-native";
import { Routes } from "../../consts/router";
import EditOfferButton from "../EditOfferOptions/EditOfferButton";
import { TargetTypes } from "../EditOfferOptions/EditOfferButton/types";
import { Error } from "../Inputs/style";
import StatusBadge from "../StatusBadge";
import { AnnouncementHighlights } from "./AnnouncementHighlights";
import CardAdd from "./CardAdd";
import DetailsLink from "./DetailsLink";
import ImageThumbnail from "./ImageThumbnail";
import { LoadingCards } from "./LoadingCards";
import {
  HeaderWrapper,
  MoreButtonWrapper,
  OfferTitle,
  SupportCard,
  SupportWrapper,
  TextWrapper,
  Title,
} from "./style";
import { Offer } from "./types";

type ProvidingSupportProps = {
  offers?: Offer[];
  isError: boolean;
  isLoading: boolean;
  readonly: boolean;
};

export default function ProvidingSupport({
  offers,
  isLoading,
  isError,
  readonly,
}: ProvidingSupportProps) {
  const { t } = useTranslation();

  if (!isLoading && (isError || !offers)) {
    return (
      <SupportWrapper>
        <Error>{t("could_not_fetch_offers_list")}</Error>
      </SupportWrapper>
    );
  }

  return (
    <SupportWrapper>
      <Title>{t("others:desktop.yourOffers")}</Title>
      <Content isLoading={isLoading} offers={offers} readonly={readonly} />
    </SupportWrapper>
  );
}

const Content = ({
  isLoading,
  readonly,
  offers,
}: {
  isLoading: boolean;
  readonly: boolean;
  offers?: Offer[];
}) => {
  if (isLoading || offers === undefined) {
    return <LoadingCards count={3} showImage={true} />;
  }

  return (
    <>
      <Offers offers={offers} readonly={readonly} />
      <NoOffer readonly={readonly} />
    </>
  );
};

const NoOffer = ({ readonly }: { readonly: boolean }) => {
  const { t } = useTranslation("desktop");

  const router = useRouter();
  return (
    <CardAdd
      label={t("others:common.actions.addOffer")}
      readonly={readonly}
      onPress={() => {
        if (!readonly) router.push(Routes.HOST);
      }}
    />
  );
};

const Offers = ({
  offers,
  readonly,
}: {
  offers: Offer[];
  readonly: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <>
      {offers.map((o) => {
        const notYetReady = o.clientOnly;

        return (
          <SupportCard key={o.id}>
            <HeaderWrapper>
              <MoreButtonWrapper>
                {notYetReady ? (
                  <ActivityIndicator />
                ) : (
                  <EditOfferButton
                    targetID={o.id}
                    targetType={TargetTypes.HOSTS}
                    matchID={o.matchId}
                    targetStatusType={o.type}
                  />
                )}
              </MoreButtonWrapper>
              <ImageThumbnail url={o.imageUrl} />
              <TextWrapper>
                <OfferTitle>
                  {t(`common:staticValues.accommodationTypes.${o.name}`)}
                </OfferTitle>
                <div
                  style={{
                    alignSelf: "flex-start",
                    justifySelf: "flex-end",
                    marginTop: 14,
                  }}
                >
                  <StatusBadge state={o.type} />
                </div>
              </TextWrapper>
            </HeaderWrapper>

            {/* {o.matchedRequest ? (
            <MetchedInfo
              name={o.matchedRequest.name}
              email={o.matchedRequest.email}
              phone_num={o.matchedRequest.phone_num}
            />
          ) : ( */}
            <AnnouncementHighlights
              beds={o.beds}
              city={o?.closestCity}
              duration={o.duration}
            />
            {/* )} */}
            {!readonly && !notYetReady && (
              <DetailsLink
                href={{
                  pathname: Routes.DETAILS,
                  query: { id: o.id, type: "offer" },
                }}
              />
            )}
          </SupportCard>
        );
      })}
    </>
  );
};
