import styled from "styled-components/native";
import type { AppBodyProps } from "./types";

export const AppBodyWraper = styled.View<AppBodyProps>`
  background-color: #f5f4f4;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  width: 100%;
`;

export const StyledScrollView = styled.ScrollView`
  width: 100%;
`;

export const Content = styled.View`
  padding-top: 72px;
`;
