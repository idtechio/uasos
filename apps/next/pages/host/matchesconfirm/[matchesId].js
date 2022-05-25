import { CompositionAppBody } from "../../../src/components/Compositions";
import Section from "../../../src/components/Section";
import { AfterDecisionModal } from "../../../src/components/AfterDecisionModal";
import { withSession } from "../../../src/helpers/withSession";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import loadNamespaces from "next-translate/loadNamespaces";

//TODO: DRY pages/host/matchesconfirm/[matchesId].js
const Matchesconfirm = () => {
  const query = useRouter().query;
  useEffect(() => {
    fetch(
      `/api/hosts/matchesconfirm/${query.matchesId}?accepted=${query.accepted}`,
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
