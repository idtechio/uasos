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
  const { t } = useTranslation();

  return (
    <Section bgColor={colors.yellow}>
      <MatchedCardTitle>{t("landingPage.weMatched.title")}</MatchedCardTitle>

      <MatchedCardsWrapper>
        <Tile
          value="4 329"
          text={t("landingPage.weMatched.cards.helpedPeople")}
        />
        <Tile
          value="51 329"
          text={t("landingPage.weMatched.cards.lookingForHelp")}
          spaced
        />
        <Tile
          value="1 731"
          text={t("landingPage.weMatched.cards.currentOffers")}
        />
      </MatchedCardsWrapper>
    </Section>
  );
};

export default LandingMatchedSection;
