import styled from "styled-components/native";
import { StyleSheet } from "react-native";
export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 30px;
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
  font-size: 24px;
  line-height: 24px;
  display: flex;
  letter-spacing: 0.5px;
  margin: 10px 0 50px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

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
    width: 190,
    marginTop: 50,
  },
  confirmButton: {},
});
