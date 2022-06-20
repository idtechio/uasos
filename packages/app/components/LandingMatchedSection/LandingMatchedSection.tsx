import { useTranslation } from "app/common-i18n/use-translation";
import React from "react";

import Tile from "../Tile";
import SectionTitle from "../SectionTitle";
import { MatchedCardsWrapper } from "./LandingMatchedSection.styled";
import { NumbersProps } from "../../api/listing/numbers";

export type LandingMatchedSectionProps = {
  numberList: NumbersProps;
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
