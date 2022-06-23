import styled, { css } from "styled-components/native";
import { StyleSheet, Platform } from "react-native";
import { Theme } from "../../provider/theme/theme.config";
import { scale } from "../../utils/scale";

export const FormFooter = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: -2;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 50px;
        margin-top: 50px;
      `,
      native: css`
        margin-bottom: ${theme.scale(50)}px;
        margin-top: ${theme.scale(50)}px;
      `,
    })}
`;

export const ErrorText = styled.Text<{ theme: Theme }>`
  font-size: 16px;
  font-weight: 400;
  color: red;
  text-align: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin: 20px 0;
      `,
      native: css`
        margin: ${theme.scale(20)}px 0;
      `,
    })}
`;

export const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#003566",
    ...Platform.select({
      web: {
        width: 90,
      },
      default: {
        width: scale(90),
      },
    }),
  },
  verifyButton: {
    backgroundColor: "#FFD700",
    ...Platform.select({
      web: {
        width: 90,
      },
      default: {
        width: scale(90),
      },
    }),
  },
});
