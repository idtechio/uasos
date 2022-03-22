import {
  getProviders,
  getCsrfToken,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LoginForm from "../src/components/FormLogin";
import FormRegisterWithSocials from "../src/components/FormRegisterWithSocials";
import AppBack from "../src/components/AppBack";
import { BuiltInProviderType } from "next-auth/providers";
import { Routes } from "../src/consts/router";
import { withSession } from "../src/helpers/withSession";
import { GetServerSideProps } from "next";
import { CompositionAppBody } from "../src/components/Compositions";

type Providers = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
>;

export type SignInProps = {
  providers: Providers;
  csrfToken: string;
};

const SignIn = ({ providers, csrfToken }: SignInProps) => {
  return (
    <CompositionAppBody>
      <AppBack to={Routes.HOMEPAGE} />
      <FormRegisterWithSocials></FormRegisterWithSocials>
      {/* <LoginForm providers={providers} csrfToken={csrfToken} /> */}
    </CompositionAppBody>
  );
};

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) => {
    const providers = await getProviders();
    const csrfToken = await getCsrfToken();

    return {
      props: {
        session,
        providers,
        csrfToken,
        ...(locale && (await serverSideTranslations(locale))),
      },
    };
  }
);

export default SignIn;
