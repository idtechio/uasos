import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { CompositionAppBody } from "../../src/components/Compositions";
import PageContentWrapper from "../../src/components/PageContentWrapper";
import Redirect from "../../src/components/Redirect";
import SupportSection from "../../src/components/SupportSection";
import {
  toOffers,
  toRequests,
} from "../../src/components/SupportSection/mapper";
import Tags from "../../src/components/Tags";
import VerifySection from "../../src/components/VerifySection/VerifySection";
import { AuthContext } from "../_app";
import { useOffersList } from "../../src/queries/useOffersList";
import { useRequestsList } from "../../src/queries/useRequestsList";

const bottomMarginStyle: StyleProp<ViewStyle> = { marginBottom: 20 };

const fakeTags = ["Sheller"];

export default function Dashboard() {
  const { identity, account, loaded } = useContext(AuthContext);

  const {
    data: offersDTO,
    isError: isOffersInError,
    isLoading: isOffersLoading,
  } = useOffersList();

  const {
    data: requestsDTO,
    isError: isRequestsInError,
    isLoading: isRequestsLoading,
  } = useRequestsList();

  if (!identity && loaded) return <Redirect path="/signin" />;

  const offers = offersDTO ? toOffers(offersDTO) : undefined;
  const requests = requestsDTO ? toRequests(requestsDTO) : undefined;
  const needEmailVerification: boolean =
    account !== undefined && account !== null && !account.confirmedEmail;
  const needPhoneVerification: boolean =
    account !== undefined && account !== null && !account.confirmedPhone;

  const readonly = needEmailVerification || needPhoneVerification;

  return (
    <CompositionAppBody>
      <PageContentWrapper outerStyles={{ paddingHorizontal: 16 }}>
        <>
          <VerifySection
            needEmail={needEmailVerification}
            needPhone={needPhoneVerification}
            containerStyle={[{ marginTop: 20 }, bottomMarginStyle]}
          />
          {loaded && (
            <Tags tags={fakeTags} containerStyle={[bottomMarginStyle]} />
          )}
          <SupportSection
            readonly={readonly}
            offers={offers}
            isOffersInError={loaded && !isOffersLoading && isOffersInError}
            isOffersLoading={!loaded || isOffersLoading}
            requests={requests}
            isRequestsInError={
              loaded && !isRequestsLoading && isRequestsInError
            }
            isRequestsLoading={!loaded || isRequestsLoading}
          />
        </>
      </PageContentWrapper>
    </CompositionAppBody>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
