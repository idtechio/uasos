import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext } from "react";
import { CompositionAppBody } from "../src/components/Compositions";
import Redirect from "../src/components/Redirect";
import { AuthContext } from "./_app";
import { Routes } from "../src/consts/router";
import FormRegisterUser from "../src/components/FormRegisterUser";
import PageContentWrapper from "../src/components/PageContentWrapper";

export default function Account() {
  const { identity, account, loaded } = useContext(AuthContext);

  if (identity && identity.phoneNumber && account?.prefferedLang && loaded) {
    return <Redirect path={Routes.HOMEPAGE} />;
  } else if (identity && !identity.phoneNumber) {
    return <Redirect path={Routes.SIGN_IN} />;
  } else {
    return (
      <CompositionAppBody>
        <PageContentWrapper>
          <FormRegisterUser />
        </PageContentWrapper>
      </CompositionAppBody>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
