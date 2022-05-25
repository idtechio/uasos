import { CompositionAppBody } from "../../../src/components/Compositions";
import Section from "../../../src/components/Section";
import { AfterDecisionModal } from "../../../src/components/AfterDecisionModal";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { withSession } from "../../../src/helpers/withSession";
import loadNamespaces from "next-translate/loadNamespaces";

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

export const getServerSideProps = withSession(async ({ locale }, session) => ({
  props: {
    session,
    ...(await loadNamespaces(locale)),
  },
}));

export default Matchesconfirm;
