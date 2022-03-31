import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StyleProp, Text, ViewStyle } from "react-native";
import { CompositionAppBody } from "../../src/components/Compositions";
import DetailsDecisionButtons from "../../src/components/DetailsDecisionButtons/DetailsDecisionButtons";
import DetailsSection from "../../src/components/DetailsSection/DetailsSection";
import WarningSection from "../../src/components/WarningSection/WarningSection";
import ArrowLeftIcon from "../../src/style/svgs/chevron-left.svg";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../src/style/theme.config";
import PageContentWrapper from "../../src/components/PageContentWrapper";
import { AuthContext } from "../_app";
import Redirect from "../../src/components/Redirect";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useOffersList } from "../../src/queries/useOffersList";
import { useRequestsList } from "../../src/queries/useRequestsList";
import { OfferProps } from "../api/listing/offers";
import { RequestProps } from "../api/listing/requests";

const topMarginStyle: StyleProp<ViewStyle> = { marginTop: 15 };

const bottomMarginStyle: StyleProp<ViewStyle> = { marginBottom: 15 };

const BackWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-top: 18px;
`;

const BackText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  text-align: left;
`;

export default function OfferDetails() {
  const { identity, loaded } = useContext(AuthContext);
  const router = useRouter();
  const { id, type } = router.query;
  const { t } = useTranslation("offer-details");
  const [dataToShow, setDataToShow] = React.useState<
    OfferProps | RequestProps | null
  >(null);
  const [isOffer, setIsOffer] = React.useState<boolean>(false);
  const {
    data: offersData,
    isError: isOffersError,
    isLoading: isOffersLoading,
  } = useOffersList();

  const {
    data: requestsData,
    isError: isRequestsError,
    isLoading: isRequestsLoading,
  } = useRequestsList();

  const offers = offersData ? offersData.offers : undefined;
  const requests = requestsData ? requestsData.requests : undefined;

  React.useEffect(() => {
    if (offers && offers.length && !dataToShow) {
      const data = offers.filter((el) => el.id === id)[0];
      if (data) {
        setDataToShow(data);
        setIsOffer(true);
      }
    }
  }, [offers]);

  React.useEffect(() => {
    if (requests && requests.length && !dataToShow) {
      const data = requests.filter((el) => el.id === id)[0];
      if (data) {
        setDataToShow(data);
      }
    }
  }, [requests]);

  if (!identity && loaded) return <Redirect path="/signin" />;

  console.log({ offers });
  console.log({ requests });

  if (loaded) {
    if (identity) {
      return (
        <CompositionAppBody>
          <PageContentWrapper>
            <>
              <BackWrapper
                onPress={() => {
                  router.push("/dashboard");
                }}
              >
                <ArrowLeftIcon />
                <BackText>{t("back")}</BackText>
              </BackWrapper>
              {dataToShow?.match._id ? (
                <WarningSection containerStyle={topMarginStyle} />
              ) : null}
              <DetailsSection
                isOffer={isOffer}
                data={dataToShow}
                containerStyle={bottomMarginStyle}
              />
              {dataToShow?.match_id ? (
                <DetailsDecisionButtons
                  matchId={dataToShow.match_id}
                  typeOfUser={type === "offer" ? "host" : "guest"}
                />
              ) : null}
            </>
          </PageContentWrapper>
        </CompositionAppBody>
      );
    } else {
      return <Redirect path="/signin"></Redirect>;
    }
  } else {
    // TODO: add nice spinner or use react-loading-skeleton as components/SupportSection/LoadingCards
    return (
      <Text style={{ textAlign: "center", alignSelf: "center" }}>Loading</Text>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
