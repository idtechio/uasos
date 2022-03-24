import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { CompositionAppBody } from "../../src/components/Compositions";
import PageContentWrapper from "../../src/components/PageContentWrapper";
import SupportSection from "../../src/components/SupportSection";
import Tags from "../../src/components/Tags";
import VerifySection, {
  Verifications,
} from "../../src/components/VerifySection/VerifySection";
import { redirectIfUnauthorized } from "../../src/helpers/redirectIfUnauthorized";
import { withSession } from "../../src/helpers/withSession";

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
  return (
    <CompositionAppBody>
      <PageContentWrapper>
        <VerifySection
          {...desktopStatus.verifications}
          containerStyle={[{ marginTop: 20 }, bottomMarginStyle]}
        />
        <Tags tags={desktopStatus.tags} containerStyle={[bottomMarginStyle]} />
        <SupportSection />
      </PageContentWrapper>
    </CompositionAppBody>
  );
}

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) =>
    redirectIfUnauthorized(session, {
      props: {
        session,
        ...(locale && (await serverSideTranslations(locale))),
      },
    })
);
