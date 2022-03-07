import React from "react";
import {
  getProviders,
  getCsrfToken,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import { ScrollView, StyleSheet } from "react-native";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "../src/components/Header";
import LoginForm from "../src/components/FormLogin";
import AppBack from "../src/components/AppBack";
import Footer from "../src/components/Footer";
import { BuiltInProviderType } from "next-auth/providers";
import { Routes } from "../src/consts/router";
import { withSession } from "../src/helpers/withSession";

type Providers = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
>;

export type SignInProps = {
  providers: Providers;
  csrfToken: string;
};

const SignIn = ({ providers, csrfToken }: SignInProps) => {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flexDirection: "column",
    },
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Header />
      <AppBack to={Routes.HOMEPAGE} />
      <LoginForm providers={providers} csrfToken={csrfToken} />
      <Footer />
    </ScrollView>
  );
};

export const getServerSideProps = withSession(async ({ locale }, session) => {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken();

  return {
    props: {
      session,
      providers,
      csrfToken,
      ...(await serverSideTranslations(locale)),
    },
  };
});

export default SignIn;
