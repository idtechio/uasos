import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StyleProp, ViewStyle } from "react-native";
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
import { LoadingCards } from "../../src/components/SupportSection/LoadingCards";
import { Error } from "../../src/components/Inputs/style";

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

function DetailsContent() {
  const router = useRouter();
  const { id, type } = router.query;
  const { t } = useTranslation("offer-details");
  const [dataToShow, setDataToShow] = React.useState<
    OfferProps | RequestProps | null
  >(null);
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

  return (
    <CompositionAppBody>
      <PageContentWrapper>
        {isOffersLoading || isRequestsLoading ? (
          <LoadingCards count={1} showImage={true} />
        ) : (
          <>
            <BackWrapper
              onPress={() => {
                router.push("/dashboard");
              }}
            >
              <ArrowLeftIcon />
              <BackText>{t("back")}</BackText>
            </BackWrapper>

            {isOffersError || isRequestsError ? (
              <Error>{t("could_not_load_details")}</Error>
            ) : (
              <>
                {dataToShow?.match_id ? (
                  <WarningSection containerStyle={topMarginStyle} />
                ) : null}
                <DetailsSection
                  isOffer={type === "offer"}
                  data={dataToShow}
                  containerStyle={bottomMarginStyle}
                />
                {dataToShow?.status === "matched" ? (
                  <DetailsDecisionButtons
                    matchId={dataToShow?.match_id}
                    typeOfUser={type === "offer" ? "host" : "guest"}
                  />
                ) : null}
              </>
            )}
          </>
        )}
      </PageContentWrapper>
    </CompositionAppBody>
  );
}

export default function Details() {
  const { identity, loaded } = useContext(AuthContext);

  if (!loaded) {
    return (
      <CompositionAppBody>
        <PageContentWrapper>
          <LoadingCards count={1} showImage={false} />
        </PageContentWrapper>
      </CompositionAppBody>
    );
  }

  if (loaded && !identity) {
    return <Redirect path="/signin"></Redirect>;
  }

  return <DetailsContent />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
