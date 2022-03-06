import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdHost from "../../src/components/FormAdHost";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default function Account() {
  return (
    <CompositionAppBody>
      <FormAdHost />
    </CompositionAppBody>
  );
}
