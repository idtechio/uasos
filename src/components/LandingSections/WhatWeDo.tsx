import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { View } from "react-native";
import { UnorderedList } from "../UnorderedList/UnorderedList";
import Section from "../Section";
import {
  Container,
  Text,
  TextBold,
  GradientBackground,
  ButtonContainer,
} from "./style";
import gradient from "../../../public/gradient.png";
import { ButtonDefault } from "../Buttons";
import InstructionsCarousel from "../InstructionsCarousel";

const WhatWeDoSection = () => {
  const { t } = useTranslation("common");

  const [isOpen, setOpen] = useState(false);

  const toggleRolldown = () => setOpen(!isOpen);

  return (
    <Section title={t("whatSosUaDoesSection.title")} bgColor="#F8F8F8">
      <Container isOpen={isOpen}>
        <Text>{t("whatSosUaDoesSection.description")}</Text>

        <TextBold>{t("whatSosUaDoesSection.howItWorks")}</TextBold>

        <UnorderedList
          texts={t("whatSosUaDoesSection.bulletPoints", {
            returnObjects: true,
          })}
        ></UnorderedList>
        <View style={{ marginTop: "10px" }} />

        <Text>{t("whatSosUaDoesSection.algorithmExplanation")}</Text>
        {!isOpen && <GradientBackground source={{ uri: gradient.src }} />}
      </Container>
      <ButtonContainer>
        <ButtonDefault
          anchor={t("whatSosUaDoesSection.rolldown")}
          onPress={toggleRolldown}
          chevronVisible
          chevronUpsideDown={isOpen}
        />
      </ButtonContainer>

      <InstructionsCarousel />
    </Section>
  );
};

export default WhatWeDoSection;
