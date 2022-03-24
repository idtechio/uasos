import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AppBack from "../src/components/AppBack";
import { CompositionAppBody } from "../src/components/Compositions";
import EditUserProfileForm from "../src/components/EditUserProfileForm";
import PageContentWrapper from "../src/components/PageContentWrapper";
import { redirectIfUnauthorized } from "../src/helpers/redirectIfUnauthorized";
import { withSession } from "../src/helpers/withSession";

export default function UserProfile() {
  return (
    <CompositionAppBody>
      <PageContentWrapper>
        <AppBack to={"/dashboard"} />
        <EditUserProfileForm />
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
