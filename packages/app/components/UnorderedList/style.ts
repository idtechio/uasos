import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const ColumnBulletPoint = styled.Text<{ theme: Theme }>`
  align-self: flex-start;
  justify-content: flex-start;
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-right: 6px;
        padding-top: 2px;
      `,
      native: css`
        padding-right: ${theme.scale(6)}px;
        padding-top: ${theme.scale(2)}px;
      `,
    })}
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export const PointColumn = styled.View<{ theme: Theme }>`
  align-self: flex-start;
  justify-content: flex-start;
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-right: 5px;
        margin-left: 3px;
      `,
      native: css`
        margin-right: ${theme.scale(5)}px;
        margin-left: ${theme.scale(3)}px;
      `,
    })}
`;

export const ColumnText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 20px;
`;
