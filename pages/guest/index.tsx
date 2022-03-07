import { signIn, useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ButtonCta } from "../../src/components/Buttons";
import { useTranslation } from "next-i18next";

import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdGuest from "../../src/components/FormAdGuest";
import { withSession } from "../../src/helpers/withSession";

export default function Account(props) {
  const { t } = useTranslation();
  const { data: session } = useSession();

  return (
    <CompositionAppBody>
      <FormAdGuest />
    </CompositionAppBody>
  );
}

export const getServerSideProps = withSession(async ({ locale }, session) => {
  return {
    props: {
      session,
      ...(await serverSideTranslations(locale)),
    },
  };
});
