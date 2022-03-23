import { useState } from "react";
import styled from "styled-components/native";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CompositionAppBody } from "../../src/components/Compositions";
import { withSession } from "../../src/helpers/withSession";
import { GetServerSideProps } from "next";
import { redirectIfUnauthorized } from "../../src/helpers/redirectIfUnauthorized";
import Container from "../../src/components/Container";
import VerifySection, { Verifications } from "./VerifySection";
import Tags from "../../src/components/Tags";
import SupportSection from "./SupportSection";
import { bottomMarginStyle } from "./style";

const ListingWrapper = styled(Container)``;

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
