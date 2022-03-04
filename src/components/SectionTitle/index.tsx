import * as React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../style/landingPageStyle";

const TitleWrapper = styled.div`
  position: relative;
`;

const Title = styled.h1`
  color: #003566;
  position: relative;
  z-index: 1;
  margin-bottom: 25px;

  ${({ theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        font-size: 30px;
      `,
    })}
`;

const YellowHighlight = styled.div`
  background-color: ${colors.yellow};
  min-width: 130px;
  width: 40%;
  height: 15px;
  position: absolute;
  top: 39px;

  ${({ theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        width: 100%;
        top: 45px;
      `,
    })}
`;

type SectionProps = {
  title?: string;
};

function SectionTitle({ title }: SectionProps) {
  return (
    <>
      {title !== undefined ? (
        <TitleWrapper>
          <Title>{title}</Title>
          <YellowHighlight />
        </TitleWrapper>
      ) : null}
    </>
  );
}

export default SectionTitle;
