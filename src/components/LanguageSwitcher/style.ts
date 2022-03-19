import styled from "styled-components/native";

export const DropDownWrapper = styled.Pressable`
  border: 1px solid #dedede;
  width: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
export const ArrowDown = styled.View`
  border: 0 solid black;
  border-right-width: 3px;
  border-bottom-width: 3px;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
