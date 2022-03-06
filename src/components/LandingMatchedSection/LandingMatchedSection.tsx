import React from "react";
import { useTranslation } from "next-i18next";

import { colors } from "../../style/landingPageStyle";
import Section from "../Section";
import Tile from "../Tile";
import {
  MatchedCardsWrapper,
  MatchedCardTitle,
} from "./LandingMatchedSection.styled";

const LandingMatchedSection = () => {
  const { t } = useTranslation("landingPage");

  return (
    <Section bgColor={colors.yellow}>
      <MatchedCardTitle>{t("weMatched.title")}</MatchedCardTitle>

      <MatchedCardsWrapper>
        <Tile value="4 329" text={t("weMatched.cards.helpedPeople")} />
        <Tile
          value="51 329"
          text={t("weMatched.cards.lookingForHelp")}
          spaced
        />
        <Tile value="1 731" text={t("weMatched.cards.currentOffers")} />
      </MatchedCardsWrapper>
    </Section>
  );
};

export default LandingMatchedSection;
