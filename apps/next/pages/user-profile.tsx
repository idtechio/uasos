import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useContext, useEffect } from "react";
import AppBack from "../src/components/AppBack";
import { CompositionAppBody } from "../src/components/Compositions";
import EditUserProfileForm from "../src/components/EditUserProfileForm";
import PageContentWrapper from "../src/components/PageContentWrapper";
import Redirect from "../src/components/Redirect";
import Spinner from "../src/components/Spinner";
import { AuthContext } from "./_app";

export default function UserProfile() {
  const { identity, loaded, account, refetchAccount } = useContext(AuthContext);

  useEffect(() => {
    if (refetchAccount) {
      refetchAccount().catch((err) => err);
    }
  }, []);

  if (!identity && loaded) {
    return <Redirect path="/signin"></Redirect>;
  }

  return (
    <CompositionAppBody>
      <PageContentWrapper>
        {!loaded ? (
          <Spinner />
        ) : (
          <>
            <AppBack to={"/dashboard"} />
            <EditUserProfileForm
              key={JSON.stringify(account)}
              account={account}
              identity={identity}
            />
          </>
        )}
      </PageContentWrapper>
    </CompositionAppBody>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
