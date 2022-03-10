import { CompositionAppBody } from "../../../src/components/Compositions";
import Section from "../../../src/components/Section";
import { ThankfulnessModal } from "../../../src/components/ThankfulnessModal";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { withSession } from "../../../src/helpers/withSession";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//TODO: DRY pages/guest/matchesconfirm/[matchesId].js
const Matchesconfirm = () => {
  const query = useRouter().query;

  useEffect(() => {
    fetch(
      `/api/guests/matchesconfirm/${query.matchesId}?accepted=${query.accepted}`,
      {
        method: "get",
      }
    );
  }, [query]);

  return (
    <CompositionAppBody>
      <Section>
        <ThankfulnessModal />
      </Section>
    </CompositionAppBody>
  );
};

export const getServerSideProps = withSession(async ({ locale }, session) => ({
  props: {
    session,
    ...(await serverSideTranslations(locale)),
  },
}));

export default Matchesconfirm;
