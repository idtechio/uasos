import React from "react";
import { ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "../../../../apps/next/src/style/landingPageStyle";
import { Theme } from "../../provider/theme/theme.config";

const TitleWrapper = styled.View`
  position: relative;
`;

const Title = styled.Text`
  color: #003566;
  position: relative;
  z-index: 1;
  font-size: 20px;
  font-weight: 700;
  line-height: 56px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        font-size: 30px;
      `,
    })}

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 25px;
      `,
      native: css`
        margin-bottom: ${theme.scale(25)}px;
      `,
    })}
`;

const YellowHighlight = styled.View`
  position: absolute;
  background-color: ${colors.yellow};

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        width: 220px;
        top: 34px;
      `,
    })}

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        top: 30px;
        width: 130px;
        height: 15px;
      `,
      native: css`
        top: ${theme.scale(30)}px;
        width: ${theme.scale(130)}px;
        height: ${theme.scale(15)}px;
      `,
    })}
`;

type SectionProps = {
  title?: string;
  style?: ViewStyle;
};

function SectionTitle({ title, style }: SectionProps) {
  return (
    <>
      {title !== undefined ? (
        <TitleWrapper style={style}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Title accessibilityRole="heading" accessibilityLevel={1}>
            {title}
          </Title>
          <YellowHighlight />
        </TitleWrapper>
      ) : null}
    </>
  );
}

export default SectionTitle;
