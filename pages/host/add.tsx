import { CompositionAppBody } from "../../src/components/Compositions";
import AddAccommodationAdvancedForm from "../../src/components/AddAccommodationAdvancedForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default function Account() {
  return (
    <CompositionAppBody>
      <AddAccommodationAdvancedForm />
    </CompositionAppBody>
  );
}
