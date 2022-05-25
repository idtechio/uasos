import { CompositionAppBody } from "../../../src/components/Compositions";
import Section from "../../../src/components/Section";
import { AfterDeactivateModal } from "../../../src/components/AfterDeactivateModal";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { withSession } from "../../../src/helpers/withSession";
import loadNamespaces from "next-translate/loadNamespaces";

//TODO: DRY pages/guest/deactivate/[hash].js
const Deactivateconfirm = () => {
  const query = useRouter().query;

  useEffect(() => {
    fetch(`/api/listing/delete/`, {
      method: "post",
      body: JSON.stringify({
        listing_type: "guest",
        listing_id: query.listing_id,
        listing_email: query.listingEmail,
      }),
    });
  }, [query]);

  return (
    <CompositionAppBody>
      <Section>
        <AfterDeactivateModal isHost={false} />
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

export default Deactivateconfirm;
