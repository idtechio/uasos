import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdHost from "../../src/components/FormAdHost";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withSession } from "../../src/helpers/withSession";

export default function Account() {
  return (
    <CompositionAppBody>
      <FormAdHost />
    </CompositionAppBody>
  );
}

export const getServerSideProps = withSession(async ({ locale }, session) => {
  return {
    props: {
      session,
      ...(await serverSideTranslations(locale)),
    },
  };
});
