import GuestCard from "../src/components/GuestCard";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import Filters from "../src/components/Filters";
import Cities from "../src/consts/cities.json";
import { useState } from "react";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default function App(props) {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({
    city: null,
    guests: null,
    timeframe: null,
    toddler: null,
  });
  const [showModal, setShowModal] = useState(false);
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
        <GuestCard
          name="Ivan"
          arrival="28 lutego 2022"
          preferredPlace="Wrocław"
          numberOfGuests={3}
          elderly
          guests={["zona", "corka", "syn"]}
          animals={["pies", "kot"]}
          avatar="https://placehold.jp/3d4070/ffffff/150x150.png"
        />
        <GuestCard
          name="Anna"
          arrival="1 marca 2022"
          preferredPlace="Poznań"
          numberOfGuests={1}
          animals={["pies", "kot"]}
        />
        <GuestCard
          name="Nazar"
          arrival="1 marca 2022"
          numberOfGuests={4}
          toddler="6 months"
          animals={["pies"]}
          disabled
        />
      </CompositionContainer>
    </CompositionAppBody>
  );
}
