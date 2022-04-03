import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext, useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { CompositionAppBody } from "../../src/components/Compositions";
import PageContentWrapper from "../../src/components/PageContentWrapper";
import Redirect from "../../src/components/Redirect";
import SupportSection from "../../src/components/SupportSection";
import {
  toOffers,
  toRequests,
} from "../../src/components/SupportSection/mapper";
// import Tags from "../../src/components/Tags";
import VerifySection from "../../src/components/VerifySection/VerifySection";
import { useOffersList } from "../../src/queries/useOffersList";
import { useRequestsList } from "../../src/queries/useRequestsList";
import { AuthContext } from "../_app";
import EmailVerificationModal from "../../src/components/EmailVerificationModal";
import { Authorization } from "../../src/hooks/useAuth";
import { useRouter } from "next/router";
import ConfirmRejectModal from "../../src/components/ConfirmRejectModal";
import { MODAL_STATUS } from "../../src/components/ConfirmRejectModal/constants";

const bottomMarginStyle: StyleProp<ViewStyle> = { marginBottom: 20 };

// const fakeTags = ["Shelter"];

function DashboardContent() {
  const { account, loaded, identity } = useContext(AuthContext);
  const router = useRouter();
  const [emailModalVisible, setEmailModalVisible] = useState(false);
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

  const showEmailVerificationModal = async () => {
    if (identity) {
      if (identity?.email) {
        await Authorization.sendVerificationEmail(identity);
        setEmailModalVisible(true);
      } else {
        router.push("user-profile");
      }
    }
  };

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
            emailOnPress={showEmailVerificationModal}
            needEmail={needEmailVerification}
            needPhone={needPhoneVerification}
            containerStyle={[{ marginTop: 20 }, bottomMarginStyle]}
          />
          {/* {loaded && (
            <Tags tags={fakeTags} containerStyle={[bottomMarginStyle]} />
          )} */}
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
          <ConfirmRejectModal status={MODAL_STATUS.ACCEPT} />
          <ConfirmRejectModal status={MODAL_STATUS.REJECT} />
        </>
        {emailModalVisible ? (
          <EmailVerificationModal onClose={() => setEmailModalVisible(false)} />
        ) : (
          <></>
        )}
      </PageContentWrapper>
    </CompositionAppBody>
  );
}

export default function Dashboard() {
  const { identity, loaded } = useContext(AuthContext);

  if (!loaded) {
    return <div>Loading</div>;
  }

  if (!identity && loaded) return <Redirect path="/signin" />;

  return <DashboardContent />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
