import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 50px;
`;
export const StyledHeader = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  letter-spacing: 0.5px;
  color: #003566;
`;
export const StyledText = styled.Text`
  font-weight: bold;
  display: flex;
  margin: 10px 0px 50px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.5px;

  color: #003566;
`;
export const ModalContainer = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const StyledModalText = styled(StyledText)`
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
    width: 150,
  },
  confirmButton: {},
});
