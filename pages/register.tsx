import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext } from "react";
import { CompositionAppBody } from "../src/components/Compositions";
import Redirect from "../src/components/Redirect";
import { completeTranslation } from "../src/helpers/completeTranslation";
import { withSession } from "../src/helpers/withSession";
import { AuthContext } from "./_app";
import { Routes } from "../src/consts/router";
import FormRegisterUser from "../src/components/FormRegisterUser";

export default function Account() {
  const { identity, account, loaded } = useContext(AuthContext);

  if (identity && identity.phoneNumber && account?.prefferedLang && loaded) {
    return <Redirect path={Routes.HOMEPAGE} />;
  } else {
    return (
      <CompositionAppBody>
        <FormRegisterUser />
      </CompositionAppBody>
    );
  }
}

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }) =>
    completeTranslation({
      props: {
        ...(locale && (await serverSideTranslations(locale))),
      },
    })
);
