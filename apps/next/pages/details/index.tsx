import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StyleProp, ViewStyle } from "react-native";
import AppBack from "../../src/components/AppBack";
import { CompositionAppBody } from "../../src/components/Compositions";
import DetailsDecisionButtons from "../../src/components/DetailsDecisionButtons/DetailsDecisionButtons";
import DetailsSection from "../../src/components/DetailsSection/DetailsSection";
import { Error } from "../../src/components/Inputs/style";
import PageContentWrapper from "../../src/components/PageContentWrapper";
import Redirect from "../../src/components/Redirect";
import { LoadingCards } from "../../src/components/SupportSection/LoadingCards";
import { GuestHostType } from "../../src/components/SupportSection/mapper";
import WarningSection from "../../src/components/WarningSection/WarningSection";
import { useOffersList } from "../../src/queries/useOffersList";
import { useRequestsList } from "../../src/queries/useRequestsList";
import { OfferProps } from "../api/listing/offers";
import { RequestProps } from "../api/listing/requests";
import { AuthContext } from "../_app";

const bottomMarginStyle: StyleProp<ViewStyle> = { marginBottom: 15 };
const DETAIL_TYPE = {
  offer: "offer",
  request: "request",
};

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
  }, [dataToShow, id, offers]);

  React.useEffect(() => {
    if (requests && requests.length && !dataToShow) {
      const data = requests.filter((el) => el.id === id)[0];
      if (data) {
        setDataToShow(data);
      }
    }
  }, [dataToShow, id, requests]);

  return (
    <CompositionAppBody>
      <PageContentWrapper>
        {isOffersLoading || isRequestsLoading ? (
          <LoadingCards count={1} showImage={true} />
        ) : (
          <>
            <AppBack to="/dashboard" />

            {isOffersError || isRequestsError ? (
              <Error>{t("could_not_load_details")}</Error>
            ) : (
              <>
                {dataToShow?.match_id && type === DETAIL_TYPE.offer ? (
                  <WarningSection />
                ) : null}
                <DetailsSection
                  isOffer={type === DETAIL_TYPE.offer}
                  data={dataToShow}
                  containerStyle={bottomMarginStyle}
                />
                {dataToShow?.type &&
                [
                  GuestHostType.FOUND_A_MATCH,
                  GuestHostType.BEING_CONFIRMED,
                ].includes(dataToShow.type) ? (
                  <DetailsDecisionButtons
                    matchId={dataToShow?.match_id}
                    typeOfUser={type === DETAIL_TYPE.offer ? "host" : "guest"}
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
