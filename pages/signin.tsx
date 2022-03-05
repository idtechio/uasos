import React from "react";
import { getProviders, getCsrfToken } from "next-auth/react";
import { ScrollView, StyleSheet } from "react-native";
import styled from "styled-components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Header from "../src/components/Header";
import LoginForm from "../src/components/FormLogin";
import AppBack from "../src/components/AppBack";
import Footer from "../src/components/Footer";

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
      <Footer />
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
