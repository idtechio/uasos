import OfferBox from "../src/components/OfferBox";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import Filters from "../src/components/Filters";
import Cities from "../src/consts/cities.json";
import { useState, useEffect } from "react";
import firebase from "../firebaase/clientApp";
import { useCollection } from "react-firebase-hooks/firestore";

export default function App(props) {
  const [filters, setFilters] = useState({
    city: null,
    guests: null,
    timeframe: null,
    toddler: null,
  });
  console.log({ filters });

  const [votes, votesLoading, votesError] = useCollection(
    firebase.firestore().collection("votes"),
    {}
  );

  if (!votesLoading && votes) {
    votes.docs.map((doc) => console.log(doc.data()));
  }

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
        <OfferBox />
        <OfferBox />
        <OfferBox />
        <OfferBox />
        <OfferBox />
        <OfferBox />
      </CompositionContainer>
    </CompositionAppBody>
  );
}

/**
 * Temporary dumy data
 * TODO: api/getAccommodations
 */
