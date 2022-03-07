import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdGuest from "../../src/components/FormAdGuest";
import { withSession } from "../../src/helpers/withSession";
import { redirectIfUnauthorized } from "../../src/helpers/redirectIfUnauthorized";
import { GetServerSideProps } from "next";

export default function Account(props) {
  const { t } = useTranslation();

  return (
    <CompositionAppBody>
      <FormAdGuest />
    </CompositionAppBody>
  );
}

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) =>
    redirectIfUnauthorized(session, {
      props: {
        session,
        ...(await serverSideTranslations(locale)),
      },
    })
);
