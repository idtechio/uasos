import {
  CompositionAppBody,
  CompositionSection,
} from "../src/components/Compositions";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import styled from "styled-components/native";
import { withSession } from "../src/helpers/withSession";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Routes } from "../src/consts/router";
import AppBack from "../src/components/AppBack";

const RegulationsPage = () => {
  const { t } = useTranslation("regulations");

  return (
    <CompositionAppBody>
      <AppBack to={Routes.HOMEPAGE} />
      <CompositionSection padding={[40, 15, 40, 15]} flexGrow="2">
        <InnerHTML>
          <InnerHTMLText>{t("regulations")}</InnerHTMLText>
        </InnerHTML>
      </CompositionSection>
    </CompositionAppBody>
  );
};

const InnerHTML = styled.View``;

const InnerHTMLText = styled.Text``;

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) => ({
    props: {
      session,
      ...(locale && (await serverSideTranslations(locale))),
    },
  })
);

export default RegulationsPage;
