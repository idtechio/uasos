import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import ProblemIllustraionImage from "../../../assets/images/problem_illustration.png";
import { DropdownStylesProps } from "../../Dropdown/types";

export const ProblemIllustraion = () => (
  <Image source={ProblemIllustraionImage} />
);

export const StyledLabel = styled.Text`
  width: 100%;
`;

export const DropdownStyles: DropdownStylesProps = {
  wrapper: { width: "100%", zIndex: 9999 },
  item: { backgroundColor: "white" },
  itemTextStyle: { textAlign: "left" },
};
