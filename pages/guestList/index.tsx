import GuestCard from "../../src/components/GuestCard";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../../src/components/Compositions";
import Filters from "../../src/components/Filters";

export default function App(props) {
  return (
    <CompositionAppBody>
      <Filters filters={[{ name: "lokalizacja" }]} />
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

/**
 * Temporary dumy data
 * TODO: api/getAccommodations
 */
