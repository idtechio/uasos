import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { StyleSheet, View } from "react-native";
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
import { Theme } from "../../style/theme.config";

const WhatWeDoSection = () => {
  const { getBreakPoint } = useTheme() as Theme;
  const isDesktop = getBreakPoint({ default: false, lg: true });

  const { t } = useTranslation("landingPage");

  const [isOpen, setOpen] = useState(false);

  const toggleRolldown = () => setOpen((open) => !open);

  useEffect(() => {
    setOpen(isDesktop ? true : false);
  }, [isDesktop, setOpen]);

  return (
    <Section bgColor="#F8F8F8">
      <View
        style={[
          {
            flexDirection: isDesktop ? "row" : "column",
          },
          styles.section,
        ]}
      >
        <View
          style={[
            styles.wrapper,
            {
              width: isDesktop ? "33%" : "auto",
            },
          ]}
        >
          <SectionTitle title={t("whatSosUaDoesSection.title")} />
          <Container isOpen={isOpen}>
            <Text>{t("whatSosUaDoesSection.description")}</Text>

            <TextBold>{t("whatSosUaDoesSection.howItWorks")}</TextBold>

            <UnorderedList
              texts={[
                t("whatSosUaDoesSection.bulletPoints.0", {
                  returnObjects: true,
                }),
                t("whatSosUaDoesSection.bulletPoints.1", {
                  returnObjects: true,
                }),
                t("whatSosUaDoesSection.bulletPoints.2", {
                  returnObjects: true,
                }),
              ]}
            ></UnorderedList>
            <View style={styles.spacer} />

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
          style={[
            styles.instructionsWrapper,
            { width: isDesktop ? "60%" : "auto" },
          ]}
        >
          {isDesktop ? <InstructionsGrid /> : <InstructionsCarousel />}
        </View>
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  section: {
    justifyContent: "space-between",
    width: "100%",
    paddingTop: "100px",
    paddingBottom: "50px",
  },
  wrapper: {
    alignItems: "flex-start",
  },
  spacer: {
    marginTop: "10px",
  },
  instructionsWrapper: {
    alignSelf: "stretch",
  },
});

export default WhatWeDoSection;
