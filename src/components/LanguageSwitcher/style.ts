import styled from "styled-components/native";
import { ViewStyle } from "react-native";
export const DropDownWrapperObject: ViewStyle = {
  borderWidth: 1,
  borderColor: "#dedede",
  width: "170px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 0,
};
export const DropDownWrapperMobileObject: ViewStyle = {
  ...DropDownWrapperObject,
  width: "70px",
};
export const DropDownListObject = {
  width: "200px",
  borderRadius: "3px",
  background: "#ffffff",
  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.14)",
};

export const DropDownListItemObject: ViewStyle = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
};

export const LanguageLabel = styled.Text`
  font-family: Roboto;
  font-weight: 700;
  color: #003566;
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
`;

export const InnerLink = {
  padding: "10px",
  display: "block",
};
export const DropDownListItemObjectSelected: ViewStyle = {
  backgroundColor: "rgba(0, 61, 128, 0.05)",
};
