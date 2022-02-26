import type { FiltersProps } from "./types";
import styled from "styled-components/native";

export const FiltersWraper = styled.View`
  padding: 16px 20px;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 1000px;
  width: 1000%;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

export const Filter = styled.View`
  margin-right: 5px;
`;
