import { useTranslation } from "app/common-i18n/use-translation";
import React from "react";

import Tile from "../Tile";
import SectionTitle from "../SectionTitle";
import { MatchedCardsWrapper } from "./LandingMatchedSection.styled";

export type LandingMatchedSectionProps = {
  numberList: {
    matched_beds: string;
    available_beds: string;
    requested_beds: string;
  };
};

export const LandingMatchedSection = ({
  numberList,
}: LandingMatchedSectionProps) => {
  const { t } = useTranslation("landingPage");

  return (
    <>
      <SectionTitle title={t("weMatched.title")} />

      <MatchedCardsWrapper>
        <Tile
          value={numberList.matched_beds}
          text={t("weMatched.cards.helpedPeople")}
        />
        <Tile
          value={numberList.requested_beds}
          text={t("weMatched.cards.lookingForHelp")}
          spaced
        />
        <Tile
          value={numberList.available_beds}
          text={t("weMatched.cards.currentOffers")}
        />
      </MatchedCardsWrapper>
    </>
  );
};
