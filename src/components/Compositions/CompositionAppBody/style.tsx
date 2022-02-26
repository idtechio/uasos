import styled from "styled-components/native";
import type { AppBodyProps } from "./types";

export const AppBodyWraper = styled.View<AppBodyProps>`
  background-color: #f5f4f4;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  background-color: #ffffff;
  width: 100%;
  height: 66px;
  padding: 18px 23px 13px 23px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;
