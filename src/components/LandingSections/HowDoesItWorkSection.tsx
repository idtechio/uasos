import { useTranslation } from "next-i18next";
import { Text } from "react-native";
import styled, { css, useTheme } from "styled-components/native";
import SectionTitle from "../SectionTitle";
import pathSVG from "../../../public/how-does-it-work-path.png";
import { Fragment, useMemo } from "react";
import Section from "../Section";
import { Theme } from "../../style/theme.config";

type CustomIndex = "0" | "1" | "2" | "3" | "4";

const Image = styled.Image`
  flex: 1;
`;

const ContentContainer = styled.View`
  width: 100%;
  padding-left: 16px;
  margin: 0 auto;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        flex-direction: row;
        padding-left: 50px;
        padding-right: 50px;
        margin-top: 30px;
        margin-bottom: 100px;
        max-width: 632px;
      `,
    })}
`;

const ImageSize = styled.View`
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        height: auto;
        aspect-ratio: 1.35;
        flex: 1;
      `,
    })}
`;

const PathItemDot = styled.View`
  justify-content: center;
  align-items: center;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  border: 3px solid ${({ theme }: { theme: Theme }) => theme.colors.text};
  border-radius: 50%;
  width: 42px;
  height: 42px;
  background: #fff;
  margin-right: 20px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        width: 50px;
        height: 50px;
        margin-right: 0;
      `,
    })}
`;

const PathItemDotText = styled.Text`
  font-size: 22px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        font-size: 25px;
      `,
    })}
`;

const PathDotConnector = styled.View`
  border: 0 dashed ${({ theme }: { theme: Theme }) => theme.colors.cta};
  border-left-width: 3px;
  height: 55px;
  width: 1px;
  margin-left: 20px;
`;

const PathItemText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 16px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin-top: 20px;
        text-align: center;
        font-size: 20px;
      `,
    })}
`;

const PathItemMobileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PathItemDesktopContainer = styled.View<{ number?: number }>`
  align-items: center;
  position: absolute;
  ${(props) => {
    switch (props.number) {
      case 0:
        return css`
          top: 30%;
          left: -6%;
        `;
      case 1:
        return css`
          top: -5%;
          left: 55%;
        `;
      case 2:
        return css`
          top: 39%;
          right: 10%;
        `;
      case 3:
        return css`
          bottom: -19%;
          left: 40%;
        `;
      case 4:
        return css`
          bottom: -13%;
          right: -4%;
        `;
    }
  }}
`;

export function HowDoesItWorkSection() {
  const { getBreakPoint } = useTheme() as Theme;
  const { t } = useTranslation("landingPage");
  const isDesktop = getBreakPoint({ default: false, lg: true });

  const points = useMemo(() => {
    if (isDesktop) {
      return (
        <>
          {Array.from({ length: 5 }).map((_, index) => {
            // Shitty code, just changing order of items
            let customIndex = index;
            if (index === 3) {
              customIndex = 4;
            }

            if (index === 4) {
              customIndex = 3;
            }

            return (
              <PathItemDesktopContainer key={index} number={index}>
                <PathItemDot>
                  <PathItemDotText>{index + 1}</PathItemDotText>
                </PathItemDot>
                <PathItemText>
                  {t(
                    `howDoesItWork.points.${String(customIndex) as CustomIndex}`
                  )}
                </PathItemText>
              </PathItemDesktopContainer>
            );
          })}
        </>
      );
    }

    return (
      <>
        {Array.from({ length: 5 }).map((_, index, arr) => {
          let customIndex = index;
          if (index === 3) {
            customIndex = 4;
          }

          if (index === 4) {
            customIndex = 3;
          }

          return (
            <Fragment key={index}>
              <PathItemMobileContainer>
                <PathItemDot>
                  <Text>{index + 1}</Text>
                </PathItemDot>
                <PathItemText>
                  {t(
                    `howDoesItWork.points.${String(customIndex) as CustomIndex}`
                  )}
                </PathItemText>
              </PathItemMobileContainer>
              {index !== arr.length - 1 && <PathDotConnector />}
            </Fragment>
          );
        })}
      </>
    );
  }, [isDesktop, t]);
  return (
    <Section>
      <SectionTitle title={t("howDoesItWork.title")} />
      <ContentContainer>
        {isDesktop && (
          <ImageSize>
            {/* @ts-expect-error TODO: fix prop types */}
            <Image source={pathSVG.src} resizeMode="cover" alt="infographic" />
          </ImageSize>
        )}
        {points}
      </ContentContainer>
    </Section>
  );
}
