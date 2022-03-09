import { CompositionAppBody } from "../../../src/components/Compositions";
import Section from "../../../src/components/Section";
import { ThankfulnessModal } from "../../../src/components/ThankfulnessModal";
import { withSession } from "../../../src/helpers/withSession";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//TODO: DRY pages/host/matchesconfirm/[matchesId].js
const Matchesconfirm = () => {
  const query = useRouter().query;
  const { t } = useTranslation();

  useEffect(() => {
    fetch(
      `/api/hosts/matchesconfirm/${query.matchesId}?accepted=${query.accepted}`,
      {
        method: "get",
      }
    );
  }, [query]);

  return (
    <CompositionAppBody>
      <Section>
        <ThankfulnessModal
          content={{
            title: t("thankfulnessModal.thanksForYourDecision"),
            subtitle: "",
            text: "",
            buttonText: t("thankfulnessModal.backToMainPage"),
          }}
        />
      </Section>
    </CompositionAppBody>
  );
};

export const getServerSideProps = withSession(async ({ locale }, session) => ({
  props: {
    session,
    ...(await serverSideTranslations(locale)),
  },
}));

export default Matchesconfirm;
