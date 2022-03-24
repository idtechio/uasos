import styled from "styled-components/native";

const OuterWrapper = styled.View`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerWrapper = styled.View`
  width: 100%;
  max-width: 450px;
`;

const PageContentWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <OuterWrapper>
    <InnerWrapper>{children}</InnerWrapper>
  </OuterWrapper>
);

export default PageContentWrapper;
