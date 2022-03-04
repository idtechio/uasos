import * as React from "react";
import styled from "styled-components";

const StyledSection = styled.section<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding: 30px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  padding: 0 16px;
  margin: 0 auto;
  max-width: ${({ theme }) => `${theme.maxContainerWidth}px`};
`;

type SectionProps = {
  bgColor?: string;
  children?: React.ReactNode;
};

function Section({ bgColor, children }: SectionProps) {
  return (
    <StyledSection bgColor={bgColor}>
      <Container>{children}</Container>
    </StyledSection>
  );
}

export default Section;
