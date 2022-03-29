import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const FormFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: -1;
  margin-bottom: 50px;
`;
export const ErrorText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: red;
  margin: 20px 0;
  text-align: center;
`;
export const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#fff",
    width: 90,
    borderWidth: 1,
    borderColor: "#003566",
  },
  verifyButton: {
    backgroundColor: "#FFD700",
    width: 90,
  },
});
