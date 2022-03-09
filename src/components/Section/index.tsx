import styled from "styled-components";
import { Theme } from "../../style/theme.config";

const StyledSection = styled.section<{ bgColor?: string }>`
  background-color: ${(props) => props.bgColor};
  padding: 30px 0;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  padding: 0 16px;
  margin: 0 auto;
  max-width: ${({ theme }: { theme: Theme }) => `${theme.maxContainerWidth}px`};
`;

type SectionProps = {
  bgColor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

function Section({ bgColor, children, style }: SectionProps) {
  return (
    <StyledSection bgColor={bgColor}>
      <Container style={style}>{children}</Container>
    </StyledSection>
  );
}

export default Section;
