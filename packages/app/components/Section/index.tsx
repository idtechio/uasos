import React from "react";
import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

const StyledSection = styled.View<{ bgColor?: string; theme: Theme }>`
  background-color: ${(props) => props.bgColor};
  z-index: 1;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 30px 0;
      `,
      native: css`
        padding-vertical: ${theme.scale(30)}px;
        padding-horizontal: ${theme.scale(0)}px;
      `,
    })}
`;

const StyledSectionContent = styled.Text``;

const Container = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        max-width: ${theme.maxContainerWidth}px
        padding: 0 16px;
        margin: 0 auto;
      `,
      native: css`
        max-width: ${theme.scale(theme.maxContainerWidth)}px;
        padding-vertical: ${theme.scale(0)}px;
        padding-horizontal: ${theme.scale(16)}px;
        margin-vertical: ${theme.scale(0)};
        margin-horizontal: auto;
      `,
    })}
`;

type SectionProps = {
  bgColor?: string;
  style?: object;
  children?: React.ReactNode;
};

function Section({ bgColor, children, style }: SectionProps) {
  return (
    <StyledSection bgColor={bgColor}>
      <StyledSectionContent>
        {" "}
        <Container style={style}>{children}</Container>
      </StyledSectionContent>
    </StyledSection>
  );
}

export default Section;
