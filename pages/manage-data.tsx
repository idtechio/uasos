import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext } from "react";
import { Text } from "react-native";
import AppBack from "../src/components/AppBack";
import { CompositionAppBody } from "../src/components/Compositions";
import ManageUserData from "../src/components/ManageUserData";
import PageContentWrapper from "../src/components/PageContentWrapper";

import Redirect from "../src/components/Redirect";
import { AuthContext } from "./_app";

export default function ManageDataPage() {
  const { identity, loaded, account, refetchAccount } = useContext(AuthContext);

  if (!identity && loaded) {
    return <Redirect path="/signin"></Redirect>;
  }

  return (
    <>
      {loaded ? (
        <CompositionAppBody>
          <PageContentWrapper>
            <AppBack to={"/dashboard"} />
            <ManageUserData />
          </PageContentWrapper>
        </CompositionAppBody>
      ) : (
        <Text style={{ textAlign: "center", alignSelf: "center" }}>
          Loading
        </Text>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
