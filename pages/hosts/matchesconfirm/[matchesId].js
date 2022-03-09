import { CompositionAppBody } from "../../../src/components/Compositions";
import Section from "../../../src/components/Section";
import { ThankfulnessModal } from "../../../src/components/ThankfulnessModal";
import { useEffect } from "react";
import { useRouter } from "next/router";

//TODO: DRY pages/host/matchesconfirm/[matchesId].js
const Matchesconfirm = () => {
  const query = useRouter().query;

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
            title: "Dziękujemy za poinformowanie nas o swojej decyzji",
            subtitle: "",
            text: "",
            buttonText: "Wróc do strony głównej",
          }}
        />
      </Section>
    </CompositionAppBody>
  );
};

export default Matchesconfirm;
