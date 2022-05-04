import { CompositionAppBody } from "../../../src/components/Compositions";
import Section from "../../../src/components/Section";
import { useRouter } from "next/router";
import { withSession } from "../../../src/helpers/withSession";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ConfirmModal from "../../../src/components/ConfirmModal";

const Matchesreject = () => {
  const query = useRouter().query;
  const matchesId: string =
    typeof query.matchesId === "string" ? query.matchesId : "";
  const listingId: string =
    typeof query.listing_id === "string" ? query.listing_id : "";

  return (
    <CompositionAppBody>
      <Section>
        <ConfirmModal
          matchesId={matchesId}
          listingId={listingId}
          isAccepted={false}
        />
      </Section>
    </CompositionAppBody>
  );
};

export const getServerSideProps = withSession(async ({ locale }, session) => ({
  props: {
    session,
    ...(locale && (await serverSideTranslations(locale))),
  },
}));

export default Matchesreject;
