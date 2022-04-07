import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useContext } from "react";
import { Text } from "react-native";
import AppBack from "../../src/components/AppBack";
import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdGuest from "../../src/components/FormAdGuest";
import Redirect from "../../src/components/Redirect";
import { AuthContext } from "../_app";
import { useRouter } from "next/router";
import { RequestProps } from "../api/listing/requests";
import { useRequestsList } from "../../src/queries/useRequestsList";

export default function Account() {
  const { identity, loaded } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;
  const [request, setRequest] = React.useState<RequestProps | null>(null);
  const { data: requestsData } = useRequestsList();

  const requests = requestsData ? requestsData.requests : undefined;

  React.useEffect(() => {
    if (id && requests && requests.length && !request) {
      const matchedRequest = requests.filter((el) => el.id === id)[0];

      if (matchedRequest) {
        setRequest(matchedRequest);
      }
    }
  }, [requests, id, request]);

  if (loaded) {
    if (identity) {
      return (
        <CompositionAppBody>
          <AppBack to="/dashboard" />
          <FormAdGuest
            name={identity.displayName}
            email={identity.email}
            phoneNumber={identity.phoneNumber}
            data={request}
          />
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
