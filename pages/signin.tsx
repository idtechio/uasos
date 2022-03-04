import React from "react";
import { getProviders, getCsrfToken } from "next-auth/react";
import { ScrollView, StyleSheet } from "react-native";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "../src/components/Header";
import LoginForm from "../src/components/LoginForm";
import AppFooter from "../src/components/AppFooter";
import AppBack from "../src/components/AppBack";

export const FormHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textOnCta};
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

const SignIn = ({ providers, csrfToken }) => {
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
      <AppBack to={"/"} />
      <LoginForm providers={providers} csrfToken={csrfToken} />
      <AppFooter />
    </ScrollView>
  );
};

export async function getServerSideProps({ locale }) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken();
  return {
    props: { providers, csrfToken, ...(await serverSideTranslations(locale)) },
  };
}
export default SignIn;
