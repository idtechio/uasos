import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdHost from "../../src/components/FormAdHost";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withSession } from "../../src/helpers/withSession";
import { GetServerSideProps } from "next";
import { redirectIfUnauthorized } from "../../src/helpers/redirectIfUnauthorized";

export default function Account() {
  return (
    <CompositionAppBody>
      <FormAdHost />
    </CompositionAppBody>
  );
}

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) =>
    redirectIfUnauthorized(session, {
      props: {
        session,
        ...(await serverSideTranslations(locale as string)),
      },
    })
);
