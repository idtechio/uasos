import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

const StyledSection = styled.View<{ bgColor?: string }>`
  background-color: ${(props) => props.bgColor};
  padding: 30px 0;
  z-index: 1;
`;

const StyledSectionContent = styled.Text``;

const Container = styled.View`
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
