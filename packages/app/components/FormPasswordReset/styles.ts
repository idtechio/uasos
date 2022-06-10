import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";
import { StyleSheet } from "react-native";

export const ButtonContainer = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  ${({ theme }) =>
    theme.styledFor({
      web: css`
        margin-bottom: 30px;
      `,
      native: css`
        margin-bottom: ${theme.scale(30)}px;
      `,
    })}
`;

export const StyledHeader = styled.Text`
  display: flex;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #003566;
`;

export const StyledText = styled.Text<{ theme: Theme }>`
  display: flex;
  font-style: normal;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #003566;

  ${({ theme }) =>
    theme.styledFor({
      web: css`
        margin: 10px 0 50px;
      `,
      native: css`
        margin: ${theme.scale(10)}px 0 ${theme.scale(50)}px;
      `,
    })}
`;

export const ModalContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledModalText = styled(StyledText)`
  text-align: center;
`;

export const VerticalDivider = styled.View<{
  height?: string;
}>`
  height: ${(props) => props.height};
`;

export const Image = styled.Image``;

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
});
