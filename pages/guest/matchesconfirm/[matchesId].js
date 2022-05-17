import { CompositionAppBody } from "../../../src/components/Compositions";
import Section from "../../../src/components/Section";
import { AfterDecisionModal } from "../../../src/components/AfterDecisionModal";
import { useEffect } from "react";
import { useRouter } from "next/router";
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
        <AfterDecisionModal />
      </Section>
    </CompositionAppBody>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Matchesconfirm;
