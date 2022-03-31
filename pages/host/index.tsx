import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext } from "react";
import { Text } from "react-native";
import AppBack from "../../src/components/AppBack";
import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdHost from "../../src/components/FormAdHost";
import Redirect from "../../src/components/Redirect";
import { completeTranslation } from "../../src/helpers/completeTranslation";
import { withSession } from "../../src/helpers/withSession";
import { AuthContext } from "../_app";

export default function Account() {
  const { identity, loaded } = useContext(AuthContext);

  if (loaded) {
    if (identity) {
      return (
        <CompositionAppBody>
          <AppBack to="/" />
          <FormAdHost />
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

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }) =>
    completeTranslation({
      props: {
        ...(locale && (await serverSideTranslations(locale))),
      },
    })
);
