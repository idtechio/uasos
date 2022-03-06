import { signIn, useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ButtonCta } from "../../src/components/Buttons";
import { useTranslation } from "next-i18next";

import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdGuest from "../../src/components/FormAdGuest";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});
export default function Account(props) {
  const { t } = useTranslation();
  const { data: session } = useSession();

  return (
    <CompositionAppBody>
      <FormAdGuest />
    </CompositionAppBody>
  );
}
