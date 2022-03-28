import { useContext, useState } from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import { CompositionAppBody } from "../../src/components/Compositions";
import PageContentWrapper from "../../src/components/PageContentWrapper";
import Redirect from "../../src/components/Redirect";
import SupportSection from "../../src/components/SupportSection";
import Tags from "../../src/components/Tags";
import VerifySection, {
  Verifications,
} from "../../src/components/VerifySection/VerifySection";
import { AuthContext } from "../_app";

const bottomMarginStyle: StyleProp<ViewStyle> = { marginBottom: 20 };

type DesktopStatus = { tags: string[]; verifications: Verifications };

export default function Dashboard() {
  const [desktopStatus, _] = useState<DesktopStatus>({
    tags: ["Sheller"],
    verifications: {
      needEmail: true,
      needPhone: true,
    },
  });

  const { identity, loaded } = useContext(AuthContext);

  if (loaded) {
    if (identity) {
      return (
        <CompositionAppBody>
          <PageContentWrapper outerStyles={{ paddingHorizontal: 16 }}>
            <>
              <VerifySection
                {...desktopStatus.verifications}
                containerStyle={[{ marginTop: 20 }, bottomMarginStyle]}
              />
              <Tags
                tags={desktopStatus.tags}
                containerStyle={[bottomMarginStyle]}
              />
              <SupportSection />
            </>
          </PageContentWrapper>
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
