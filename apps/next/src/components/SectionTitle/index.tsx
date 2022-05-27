import React from "react";
import { ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "../../style/landingPageStyle";
import { Theme } from "../../style/theme.config";

const TitleWrapper = styled.View`
  position: relative;
`;

const Title = styled.Text`
  color: #003566;
  position: relative;
  z-index: 1;
  margin-bottom: 25px;
  font-size: 20px;
  font-weight: 700;
  line-height: 56px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        font-size: 30px;
      `,
    })}
`;

const YellowHighlight = styled.View`
  position: absolute;
  top: 30px;
  height: 15px;
  width: 130px;
  background-color: ${colors.yellow};

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        width: 220px;
        top: 34px;
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
