import { CompositionAppBody } from "../../../src/components/Compositions";
import Section from "../../../src/components/Section";
import { AfterDeactivateModal } from "../../../src/components/AfterDeactivateModal";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { withSession } from "../../../src/helpers/withSession";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//TODO: DRY pages/host/deactivate/[hash].js
const Deactivateconfirm = () => {
  const query = useRouter().query;

  useEffect(() => {
    fetch(`/api/listing/delete/`, {
      method: "post",
      body: JSON.stringify({
        listingType: "host",
        listingEmail: query.listingEmail,
        listingId: query.listing_id,
      }),
    });
  }, [query]);

  return (
    <CompositionAppBody>
      <Section>
        <AfterDeactivateModal isHost={true} />
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

export default Deactivateconfirm;
