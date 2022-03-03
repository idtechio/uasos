import React, { useEffect, useState } from "react";
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
import { InstructionsCarousel, InstructionsGrid } from "../Instructions";
import SectionTitle from "../SectionTitle";
import { useTheme } from "styled-components/native";

const WhatWeDoSection = () => {
  const { getBreakPoint } = useTheme();
  const isDesktop = getBreakPoint({ default: false, lg: true });

  const { t } = useTranslation("common");

  const [isOpen, setOpen] = useState(false);

  const toggleRolldown = () => setOpen((open) => !open);

  useEffect(() => {
    setOpen(isDesktop ? true : false);
  }, [isDesktop, setOpen]);

  return (
    <Section bgColor="#F8F8F8">
      <View
        style={{
          flexDirection: isDesktop ? "row" : "column",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: "100px",
          paddingBottom: "50px",
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            width: isDesktop ? "33%" : "auto",
          }}
        >
          <SectionTitle title={t("whatSosUaDoesSection.title")} />
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
          {!isDesktop && (
            <ButtonContainer>
              <ButtonDefault
                anchor={t(
                  isOpen
                    ? "whatSosUaDoesSection.rollup"
                    : "whatSosUaDoesSection.rolldown"
                )}
                onPress={toggleRolldown}
                chevronVisible
                chevronUpsideDown={isOpen}
              />
            </ButtonContainer>
          )}
        </View>

        <View
          style={{ alignSelf: "stretch", width: isDesktop ? "60%" : "auto" }}
        >
          {isDesktop ? <InstructionsGrid /> : <InstructionsCarousel />}
        </View>
      </View>
    </Section>
  );
};

export default WhatWeDoSection;
