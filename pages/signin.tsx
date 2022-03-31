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
import { useContext } from "react";
import { AuthContext } from "./_app";
import Redirect from "../src/components/Redirect";
import CardModal from "../src/components/CardModal";
import { ActivityIndicator } from "react-native";
type Providers = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
>;

export type SignInProps = {
  providers: Providers;
  csrfToken: string;
};

const SignIn = ({ providers, csrfToken }: SignInProps) => {
  const { identity, loaded } = useContext(AuthContext);
  return (
    <CompositionAppBody>
      <AppBack to={Routes.HOMEPAGE} />
      {loaded ? (
        identity ? (
          identity?.phoneNumber ? (
            <Redirect path="/dashboard"></Redirect>
          ) : (
            <FormRegisterWithSocials></FormRegisterWithSocials>
          )
        ) : (
          <LoginForm providers={providers} csrfToken={csrfToken} />
        )
      ) : (
        <CardModal closeable={false}>
          <ActivityIndicator size="large" />
        </CardModal>
      )}
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
