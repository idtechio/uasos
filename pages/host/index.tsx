import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdHost from "../../src/components/FormAdHost";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withSession } from "../../src/helpers/withSession";
import { SIGN_IN_ROUTE } from "../../src/consts/router";

export default function Account() {
  return (
    <CompositionAppBody>
      <FormAdHost />
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
