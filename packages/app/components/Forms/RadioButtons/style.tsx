import styled from "styled-components/native";

export const Buttons = styled.View<{ justifyContent?: string }>`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
`;
