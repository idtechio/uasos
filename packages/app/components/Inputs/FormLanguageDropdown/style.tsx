import styled, { css } from "styled-components/native";
import { Platform } from "react-native";
import { Theme } from "../../../provider/theme/theme.config";
import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scale";

export const LabelContent = styled.Text`
  display: flex;
  align-items: center;
`;

export const LanguageName = styled.Text<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 5px;
      `,
      native: css`
        margin-left: ${theme.scale(5)}px;
      `,
    })}
`;

export const styles = StyleSheet.create({
  select: {
    ...Platform.select({
      web: {
        paddingVertical: "14px",
        height: "54px",
      },
      default: {
        paddingVertical: `${scale(14)}px`,
        height: `${scale(54)}px`,
      },
    }),
  },
});
