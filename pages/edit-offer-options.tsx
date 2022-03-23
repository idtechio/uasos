import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import EditOfferButton from "../src/components/EditOfferOptions/EditOfferButton";
import { withSession } from "../src/helpers/withSession";

export default function EditOffer() {
  return (
    <CompositionAppBody>
      <CompositionContainer>
        <div
          style={{
            padding: "30px 0px",
            display: "grid",
            gap: 30,
            justifyContent: "center",
            alignItems: "flex-start",
            gridAutoFlow: "row",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 8,
              paddingTop: 16,
              paddingBottom: 16,
              paddingRight: 16,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              width: 300,
              minHeight: 400,
            }}
          >
            <EditOfferButton />
          </div>
        </div>
      </CompositionContainer>
    </CompositionAppBody>
  );
}

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) => ({
    props: {
      session,
      ...(locale && (await serverSideTranslations(locale))),
    },
  })
);
