import OfferBox from "../src/components/OfferBox";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import Filters from "../src/components/Filters";

export default function App(props) {
  return (
    <CompositionAppBody>
      <Filters filters={[{ name: "lokalizacja" }]} />
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
