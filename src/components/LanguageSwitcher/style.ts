import styled from "styled-components/native";
import { ViewStyle } from "react-native";
export const DropDownWrapper = styled.Pressable`
  border: 1px solid #dedede;
  width: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
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

export const DropDownWrapperMobile = styled(DropDownWrapper)`
  border: none;
  width: 20px;
  padding: 0;
`;
export const DropDownWrapperMobileObject: ViewStyle = {
  ...DropDownWrapperObject,
  borderWidth: 0,
  width: 20,
  padding: 0,
};

export const ArrowDown = styled.View`
  border: 0 solid #003566;
  border-right-width: 3px;
  border-bottom-width: 3px;
  display: inline-block;
  padding: 4px;

  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
export const DropDownList = styled.View`
  width: 200px;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.14);
`;
export const DropDownListObject = {
  width: "200px",
  borderRadius: "3px",
  background: "#ffffff",
  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.14)",
};

export const DropDownListItem = styled.View`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const DropDownListItemObject: ViewStyle = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
};
export const DropDownListItemActive = styled(DropDownListItem)`
  background-color: rgba(0, 61, 128, 0.05);
`;
export const LanguageInfo = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const LanguageLabel = styled.Text`
  font-family: Roboto;
  font-weight: 700;
  color: #003566;
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
`;
export const Tick = styled.View`
  border: 0 solid #003566;
  border-right-width: 3px;
  border-bottom-width: 3px;
  display: inline-block;
  padding: 3px 2px 7px 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
export const InnerLink = {
  padding: "10px",
  display: "block",
};
