import Image from "next/image";
import styled from "styled-components/native";
import { DropdownStylesProps } from "../../Dropdown/types";
export const ProblemIllustraion = () => (
  <Image
    src="/problem_illustration.png"
    alt="Problem illustration"
    width={138}
    height={102}
  />
);

export const StyledLabel = styled.Text`
  width: 100%,
  background-color: pink,
  align-text: left;
`;

export const DropdownStyles: DropdownStylesProps = {
  wrapper: { width: "100%", zIndex: 9999 },
  item: { backgroundColor: "white" },
  itemTextStyle: { textAlign: "left" },
};
