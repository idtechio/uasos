import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdGuest from "../../src/components/FormAdGuest";
import { withSession } from "../../src/helpers/withSession";
import { SIGN_IN_ROUTE } from "../../src/consts/router";

export default function Account(props) {
  const { t } = useTranslation();

  return (
    <CompositionAppBody>
      <FormAdGuest />
    </CompositionAppBody>
  );
}

export const getServerSideProps = withSession(async ({ locale }, session) => {
  if (!session) {
    return {
      redirect: {
        destination: SIGN_IN_ROUTE,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      ...(await serverSideTranslations(locale)),
    },
  };
});
