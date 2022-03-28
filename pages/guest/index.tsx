import { useContext } from "react";
import { Text } from "react-native";
import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdGuest from "../../src/components/FormAdGuest";
import Redirect from "../../src/components/Redirect";
import { AuthContext } from "../_app";

export default function Account() {
  const { identity, loaded } = useContext(AuthContext);

  if (loaded) {
    if (identity) {
      return (
        <CompositionAppBody>
          <FormAdGuest />
        </CompositionAppBody>
      );
    } else {
      return <Redirect path="/signin"></Redirect>;
    }
  } else {
    // TODO: add nice spinner
    return (
      <Text style={{ textAlign: "center", alignSelf: "center" }}>Loading</Text>
    );
  }
}

// export const getServerSideProps: GetServerSideProps = withSession(
//   async ({ locale }, session) =>
//     redirectIfUnauthorized(session, {
//       props: {
//         session,
//         ...(locale && (await serverSideTranslations(locale))),
//       },
//     })
// );
