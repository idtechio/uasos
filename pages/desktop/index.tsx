import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { CompositionAppBody } from "../../src/components/Compositions";
import Container from "../../src/components/Container";
import SupportSection from "../../src/components/SupportSection";
import Tags from "../../src/components/Tags";
import VerifySection, {
  Verifications,
} from "../../src/components/VerifySection/VerifySection";
import { redirectIfUnauthorized } from "../../src/helpers/redirectIfUnauthorized";
import { withSession } from "../../src/helpers/withSession";

const ListingWrapper = styled(Container)``;

const bottomMarginStyle: StyleProp<ViewStyle> = { marginBottom: 20 };

type DesktopStatus = { tags: string[]; verifications: Verifications };

export default function Desktop() {
  const [desktopStatus, _] = useState<DesktopStatus>({
    tags: ["Sheller"],
    verifications: {
      needEmail: true,
      needPhone: true,
    },
  });
  return (
    <CompositionAppBody>
      <ListingWrapper>
        <VerifySection
          {...desktopStatus.verifications}
          containerStyle={[{ marginTop: 20 }, bottomMarginStyle]}
        />
        <Tags tags={desktopStatus.tags} containerStyle={[bottomMarginStyle]} />
        <SupportSection />
      </ListingWrapper>
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
