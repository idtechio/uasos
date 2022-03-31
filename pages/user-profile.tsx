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
  const { identity, loaded, account } = useContext(AuthContext);

  if (!loaded) {
    // TODO: add nice spinner or use react-loading-skeleton as components/SupportSection/LoadingCards
    return (
      <Text style={{ textAlign: "center", alignSelf: "center" }}>Loading</Text>
    );
  }

  if (!identity && loaded) {
    return <Redirect path="/signin"></Redirect>;
  }

  return (
    <CompositionAppBody>
      <PageContentWrapper>
        <AppBack to={"/dashboard"} />
        <EditUserProfileForm account={account} identity={identity} />
      </PageContentWrapper>
    </CompositionAppBody>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
