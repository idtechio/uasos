import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useContext } from "react";
import AppBack from "../../src/components/AppBack";
import { CompositionAppBody } from "../../src/components/Compositions";
import FormAdHost from "../../src/components/FormAdHost";
import Redirect from "../../src/components/Redirect";
import { AuthContext } from "../_app";
import { useRouter } from "next/router";
import { useOffersList } from "../../src/queries/useOffersList";
import { OfferProps } from "../api/listing/offers";
import Spinner from "../../src/components/Spinner";

export default function Account() {
  const { identity, loaded } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;
  const [offer, setOffer] = React.useState<OfferProps | null>(null);
  const { data: offersData } = useOffersList();

  const offers = offersData ? offersData.offers : undefined;

  React.useEffect(() => {
    if (id && offers && offers.length && !offer) {
      const matchedOffer = offers.filter((el) => el.id === id)[0];

      if (matchedOffer) {
        setOffer(matchedOffer);
      }
    }
  }, [offers, id, offer]);

  if (loaded) {
    if (identity) {
      return (
        <>
          <CompositionAppBody>
            <AppBack to="/dashboard" />
            <FormAdHost data={offer} />
          </CompositionAppBody>
          <div
            style={{
              position: "relative",
            }}
            id="photo-viewer"
          />
        </>
      );
    } else {
      return <Redirect path="/signin"></Redirect>;
    }
  } else {
    return <Spinner />;
  }
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(locale && (await serverSideTranslations(locale))),
  },
});
