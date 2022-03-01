import OfferBox from "../src/components/OfferBox";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import Filters from "../src/components/Filters";
import Cities from "../src/consts/cities.json";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home(props) {
  const [filters, setFilters] = useState({
    city: null,
    guests: null,
    timeframe: null,
    toddler: null,
  });

  const { data } = props;

  return (
    <CompositionAppBody>
      <Filters
        filters={[
          {
            name: "Lokalizacja",
            options: Cities.map(({ name }) => ({ value: name, label: name })),
            onSubmit: (e) => setFilters({ ...filters, city: e }),
            value: filters.city,
          },
          {
            name: "Liczba gości",
            options: [
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: ">5", label: "więcej" },
            ],
            onSubmit: (e) => setFilters({ ...filters, guests: e }),
            value: filters.guests,
          },
          {
            name: "Okres",
            options: [
              { value: "tydzień", label: "tydzień" },
              { value: "2 tygodnie", label: "2 tygodnie" },
              { value: "miesiąc", label: "miesiąc" },
              { value: "dłuzej", label: "dłuzej" },
            ],
            onSubmit: (e) => setFilters({ ...filters, timeframe: e }),
            value: filters.timeframe,
          },
          {
            name: "Jestem z dzieckiem",
            options: [
              { value: "tak", label: "tak" },
              { value: "nie", label: "nie" },
            ],
            onSubmit: (e) => setFilters({ ...filters, toddler: e }),
            value: filters.toddler,
          },
        ]}
      />
      <CompositionContainer>
        <>
          {data.map((accommodation, index) => {
            // TODO replace index with some id
            return <OfferBox {...accommodation} key={index} />;
          })}
        </>
      </CompositionContainer>
    </CompositionAppBody>
  );
}

export async function getStaticProps({ locale }) {
  /** TODO: Uncomment when remote API is ready */
  // const res = await fetch("http://localhost:3000/api/accommodations");
  // const data = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(locale)),
      data: [],
    },
  };
}

export default Home;
