import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CompositionAppBody } from "../src/components/Compositions";
import { GetServerSideProps } from "next";
import FaqContent from "../src/components/Faq/FaqContent";

const FaqPage = () => {
  return (
    <CompositionAppBody>
      <FaqContent />
    </CompositionAppBody>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});

export default FaqPage;
