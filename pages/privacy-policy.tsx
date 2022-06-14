import {
  CompositionAppBody,
  CompositionSection,
} from "../src/components/Compositions";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { withSession } from "../src/helpers/withSession";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Routes } from "../src/consts/router";
import AppBack from "../src/components/AppBack";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation("privacyPolicy");

  return (
    <CompositionAppBody>
      <AppBack to={Routes.HOMEPAGE} />
      <CompositionSection padding={[40, 15, 40, 15]} flexGrow="2">
        <div
          dangerouslySetInnerHTML={{
            __html: t("privacyPolicy"),
          }}
        />
      </CompositionSection>
    </CompositionAppBody>
  );
};

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) => ({
    props: {
      session,
      ...(locale && (await serverSideTranslations(locale))),
    },
  })
);

export default PrivacyPolicyPage;
