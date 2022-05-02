import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CompositionAppBody } from "../src/components/Compositions";
import { GetServerSideProps } from "next";
import { withSession } from "../src/helpers/withSession";
import FaqContent from "../src/components/Faq/FaqContent";

const FaqPage = () => {
  return (
    <CompositionAppBody>
      <FaqContent />
    </CompositionAppBody>
  );
};

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) => ({
    props: {
      session,
      ...(locale && (await serverSideTranslations(locale))),
    },
  })
);

export default FaqPage;
