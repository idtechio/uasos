import { useTranslation } from "next-i18next";

import Tile from "../Tile";
import SectionTitle from "../SectionTitle";
import { MatchedCardsWrapper } from "./LandingMatchedSection.styled";

export const LandingMatchedSection = () => {
  const { t } = useTranslation("landingPage");

  return (
    <>
      <SectionTitle title={t("weMatched.title")} />

      <MatchedCardsWrapper>
        <Tile value="4 329" text={t("weMatched.cards.helpedPeople")} />
        <Tile
          value="51 329"
          text={t("weMatched.cards.lookingForHelp")}
          spaced
        />
        <Tile value="1 731" text={t("weMatched.cards.currentOffers")} />
      </MatchedCardsWrapper>
    </>
  );
};
