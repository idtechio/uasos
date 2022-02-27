import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const FiltersWraper = styled.ScrollView`
  padding: 16px 20px;
  height: 110px;
  flex-direction: row;

  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
`;

export const Filter = styled.View`
  margin-right: 5px;
`;

export const FilterModal = styled.View`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  left: 0px;
  top: 0px;
`;

export const FilterBox = styled.View`
  position: fixed;
  width: 100vw;
  font-family: "sans-serif";
  font-size: 14px;
  background-color: rgb(255, 255, 255);
  padding: 22px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  z-index: 1000;
  left: 0px;
  bottom: 0px;
`;

export const FilterBoxHeader = styled.View`
  width: 100%;
  text-align: center;
  padding: 0px 0px 22px 0px;
  display: flex;
  color: #000000;
`;

export const FilterBoxFooter = styled.View`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 22px 22px 10px 22px;
  flex-direction: row;
  justify-content: center;
`;

export const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    padding: 22,
    paddingLeft: 0,
    paddingRight: 0,
    borderTopColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomColor: "#CCCCCC",
    borderBottomWidth: 1,
  },
});

export const FilterBoxButton = styled.View`
	background-color: #0057B8;
	border-radius: 50px;
	padding: 12px 25px,
  height: 50px;
	width: fit-content;
	cursor: pointer;
  margin-right:10px;
	&:hover {
		opacity: 0.7
	}
`;

export const FilterBoxButtonCancel = styled.View`
	background-color: #999999;
	border-radius: 50px;
	padding: 12px 25px,
  height: 50px;
	width: fit-content;
	cursor: pointer;
   margin-left:10px;
	&:hover {
		opacity: 0.7
	}
`;

export const FilterBoxButtonText = styled.Text`
  color: #ffffff;
`;
