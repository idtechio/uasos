import * as React from "react";
import styled from "styled-components";
import Container from "../Container";
import { colors } from "../../style/landingPageStyle";

const StyledSection = styled.section<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding: 30px 0;
`;

const Title = styled.h1`
  color: #003566;
  position: relative;
  z-index: 1;
  margin-bottom: 25px;

  ${(props) =>
    props.title !== undefined &&
    `
  &:after {
    width: 129px;
    height: 13px;
    position: absolute;
    bottom: -2px;
    left: 0;
    content: "";
    background-color: ${colors.yellow};
    z-index: -1;
  }`}
`;

type SectionProps = {
  title?: string;
  bgColor?: string;
  children?: React.ReactNode;
};

const YellowHighlight = styled.div`
  background-color: ${colors.yellow};
  width: 40%;
  height: 15px;
  position: absolute;
  top: 39px;
`;

function Section({ title, bgColor, children }: SectionProps) {
  return (
    <StyledSection bgColor={bgColor}>
      <Container>
        {title !== undefined ? (
          <>
            <Title>{title}</Title>
            <YellowHighlight />
          </>
        ) : null}
      </Container>
      {children}
    </StyledSection>
  );
}

export default Section;
