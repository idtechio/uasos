import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext } from "react";
import { Text } from "react-native";
import AppBack from "../src/components/AppBack";
import { CompositionAppBody } from "../src/components/Compositions";
import EditUserProfileForm from "../src/components/EditUserProfileForm";
import PageContentWrapper from "../src/components/PageContentWrapper";
import Redirect from "../src/components/Redirect";
import { AuthContext } from "./_app";

export default function UserProfile() {
  const { identity, loaded, account, getTokenForAPI } = useContext(AuthContext);

  if (!loaded) {
    return (
      <Text style={{ textAlign: "center", alignSelf: "center" }}>Loading</Text>
    );
  }

  if (!getTokenForAPI) {
    return <Redirect path="/signin"></Redirect>;
  }

  return (
    <CompositionAppBody>
      <PageContentWrapper>
        <AppBack to={"/dashboard"} />
        <EditUserProfileForm
          account={account}
          identity={identity}
          getTokenKey={getTokenForAPI}
        />
      </PageContentWrapper>
    </CompositionAppBody>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
