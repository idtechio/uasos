import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { CompositionAppBody } from "../../src/components/Compositions";
import PageContentWrapper from "../../src/components/PageContentWrapper";
import Redirect from "../../src/components/Redirect";
import SupportSection from "../../../../packages/app/components/SupportSection";
import PortraitIcon from "../../src/style/svgs/portrait.svg";
import {
  toOffers,
  toRequests,
} from "../../../../packages/app/components/SupportSection/mapper";
// import Tags from "../../../../packages/app/components/Tags";
import VerifySection from "../../../../packages/app/components/VerifySection/VerifySection";
import { useOffersList } from "../../src/queries/useOffersList";
import { useRequestsList } from "../../src/queries/useRequestsList";
import { AuthContext } from "../_app";
import EmailVerificationModal from "../../src/components/EmailVerificationModal";
import { Authorization } from "../../src/hooks/useAuth";
import { useRouter } from "next/router";
import { useTimer } from "react-timer-hook";
import ConfirmRejectModal from "../../src/components/ConfirmRejectModal";
import { MODAL_STATUS } from "../../src/components/ConfirmRejectModal/constants";
import Toast from "../../../../packages/app/components/Toast";
import { Theme } from "../../src/style/theme.config";

import { useTheme } from "styled-components";
import { useProgressToastContext } from "../../src/providers/ProgressToastProvider";
import { useTranslation } from "react-i18next";
import Spinner from "../../../../packages/app/components/Spinner";

const bottomMarginStyle: StyleProp<ViewStyle> = { marginBottom: 20 };

// const fakeTags = ["Shelter"];

function DashboardContent() {
  const { t } = useTranslation();

  const { isProgressToastVisible, actions } = useProgressToastContext();
  const theme = useTheme() as Theme;

  const { account, loaded, identity } = useContext(AuthContext);
  const router = useRouter();
  const [sendVerificationEmailError, setSendVerificationEmailError] =
    useState(false);
  const [emailModalVisible, setEmailModalVisible] = useState(false);

  const { seconds, isRunning, restart } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: false,
    onExpire: () =>
      sendVerificationEmailError ? setSendVerificationEmailError(false) : "",
  });

  const restartTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 30);
    restart(time);
  };

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
        if (!isRunning) await sendVerificationEmail();
        setEmailModalVisible(true);
      } else {
        router.push("user-profile");
      }
    }
  };

  const sendVerificationEmail = async () => {
    if (identity) {
      await Authorization.sendVerificationEmail(identity).catch(() =>
        setSendVerificationEmailError(true)
      );
    }
    restartTimer();
  };

  const offers = useMemo(
    () => (offersDTO ? toOffers(offersDTO) : undefined),
    [offersDTO]
  );
  const requests = useMemo(
    () => (requestsDTO ? toRequests(requestsDTO) : undefined),
    [requestsDTO]
  );

  const isOffersChangeInProgress = useMemo(
    () => offers?.some((offer) => offer.clientOnly),
    [offers]
  );

  const isRequestChangeInProgress = useMemo(
    () => requests?.some((request) => request.clientOnly),
    [requests]
  );

  const needEmailVerification: boolean =
    account !== undefined && account !== null && !account.confirmedEmail;
  const needPhoneVerification: boolean =
    account !== undefined && account !== null && !account.confirmedPhone;
  const needBackendAccountCreation = account ? false : true;

  const readonly =
    needEmailVerification ||
    needPhoneVerification ||
    needBackendAccountCreation;

  useEffect(() => {
    if (!isOffersChangeInProgress && !isRequestChangeInProgress) {
      actions.hideProgressToast();
    }
  }, [isOffersChangeInProgress, isRequestChangeInProgress, actions]);

  return (
    <CompositionAppBody>
      <PageContentWrapper outerStyles={{ paddingHorizontal: 16 }}>
        <>
          <VerifySection
            emailOnPress={showEmailVerificationModal}
            needEmail={needEmailVerification}
            needPhone={needPhoneVerification}
            needAccount={needBackendAccountCreation}
            containerStyle={[{ marginTop: 20 }, bottomMarginStyle]}
          />
          {/* {loaded && (
            <Tags tags={fakeTags} containerStyle={[bottomMarginStyle]} />
          )} */}

          {isProgressToastVisible && (
            <Toast
              icon={<PortraitIcon />}
              color={theme.colors.accent}
              label={t("others:desktop.checks.changesInProgress")}
              contaierStyle={{ marginBottom: 10 }}
            />
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
          <ConfirmRejectModal status={MODAL_STATUS.ACCEPT} />
          <ConfirmRejectModal status={MODAL_STATUS.REJECT} />
        </>
        {emailModalVisible ? (
          <EmailVerificationModal
            onClose={() => setEmailModalVisible(false)}
            seconds={seconds}
            restartTimer={sendVerificationEmail}
            error={sendVerificationEmailError}
          />
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
    return <Spinner />;
  }

  if (!identity && loaded) return <Redirect path="/signin" />;

  return <DashboardContent />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
