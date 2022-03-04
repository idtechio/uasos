import React from "react";
import { getProviders, getCsrfToken } from "next-auth/react";
import { ScrollView, StyleSheet } from "react-native";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "../src/components/Header";
import LoginForm from "../src/components/LoginForm";

export const FormHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textOnCta};
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

const SignIn = ({ providers, csrfToken }) => {
  console.log({ providers, csrfToken });

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "column",
    },
    error: {
      color: "#D8000C",
      marginTop: 10,
    },
    containerWrapper: {
      width: "100%",
    },
    input: {
      marginTop: 20,
    },
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.containerWrapper}
    >
      <Header />
      <LoginForm providers={providers} csrfToken={csrfToken} />
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
