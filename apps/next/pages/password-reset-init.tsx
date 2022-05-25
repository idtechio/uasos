import React from "react";
import loadNamespaces from "next-translate/loadNamespaces";
import AppBack from "../src/components/AppBack";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import FormInitPasswordReset from "../src/components/FormInitPasswordReset";
import { Routes } from "../src/consts/router";
import { GetServerSideProps } from "next";
export default function App() {
  return (
    <CompositionAppBody>
      <CompositionContainer>
        <AppBack to={Routes.SIGN_IN} />
        <FormInitPasswordReset />
      </CompositionContainer>
    </CompositionAppBody>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await loadNamespaces(locale))),
  },
});
