import React from "react";
import {
  CompositionAppBody,
  CompositionSection,
} from "../src/components/Compositions";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import styled from "styled-components/native";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Routes } from "../src/consts/router";
import AppBack from "../src/components/AppBack";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation("privacyPolicy");

  return (
    <CompositionAppBody>
      <AppBack to={Routes.HOMEPAGE} />
      <CompositionSection padding={[40, 15, 40, 15]} flexGrow="2">
        <InnerHTML>
          <InnerHTMLText>{t("privacyPolicy")}</InnerHTMLText>
        </InnerHTML>
      </CompositionSection>
    </CompositionAppBody>
  );
};

const InnerHTML = styled.View``;

const InnerHTMLText = styled.Text``;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});

export default PrivacyPolicyPage;
