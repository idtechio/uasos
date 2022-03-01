import OfferBox from "../src/components/OfferBox";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import Filters from "../src/components/Filters";
import Cities from "../src/consts/cities.json";
import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function Home(props) {
  const { t } = useTranslation();
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
            name: t("labels.location"),
            options: Cities.map(({ name }) => ({ value: name, label: name })),
            onSubmit: (e) => setFilters({ ...filters, city: e }),
            value: filters.city,
          },
          {
            name: t("labels.numberOfGuests"),
            options: [
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: ">5", label: t("more") },
            ],
            onSubmit: (e) => setFilters({ ...filters, guests: e }),
            value: filters.guests,
          },
          {
            name: t("labels.timePeriod"),
            options: [
              { value: "tydzień", label: t("staticValues.timePeriod.week") },
              {
                value: "2 tygodnie",
                label: t("staticValues.timePeriod.twoWeeks"),
              },
              { value: "miesiąc", label: t("staticValues.timePeriod.month") },
              { value: "dłuzej", label: t("staticValues.timePeriod.longer") },
            ],
            onSubmit: (e) => setFilters({ ...filters, timeframe: e }),
            value: filters.timeframe,
          },
          {
            name: t("labels.withKids"),
            options: [
              { value: "tak", label: t("staticValues.boolean.yes") },
              { value: "nie", label: t("staticValues.boolean.no") },
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
      data: [
        {
          location: "Warszawa",
          host: "owner",
          conditions: null,
          preferences: ["animals", "disability", "foof"],
          resources: null,
        },
      ],
    },
  };
}

export default Home;
