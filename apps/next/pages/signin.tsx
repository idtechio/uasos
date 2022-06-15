import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LoginForm from "../src/components/FormLogin";
import FormRegisterWithSocials from "../src/components/FormRegisterWithSocials";
import AppBack from "../src/components/AppBack";
import { Routes } from "../src/consts/router";
import { GetServerSideProps } from "next";
import { CompositionAppBody } from "../src/components/Compositions";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "./_app";
import Redirect from "../src/components/Redirect";
import CardModal from "../src/components/CardModal";
import { ActivityIndicator } from "react-native";

const SignIn = () => {
  const { identity, loaded } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
          <LoginForm />
        )
      ) : (
        <CardModal closeable={false}>
          <ActivityIndicator size="large" />
        </CardModal>
      )}
    </CompositionAppBody>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && (await serverSideTranslations(locale))),
    },
  };
};

export default SignIn;
