import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const WarningWrapper = styled.View`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.warning};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${({ theme }: { theme: Theme }) => theme.colors.alert};
  flex-direction: row;
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 12px;
      `,
      native: css`
        padding: ${theme.scale(12)}px;
      `,
    })}
`;

export const TextWrapper = styled.Text<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 12px;
      `,
      native: css`
        margin-left: ${theme.scale(12)}px;
      `,
    })}
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  line-height: 21px;
`;

export const ListItem = styled.View<{ theme: Theme }>`
  flex-direction: row;
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 10px;
      `,
      native: css`
        padding-horizontal: ${theme.scale(10 / -2)}px;

        /* fix it add  for GuestAdditionalInfo
        child: {
          marginHorizontal: gap / 2,
        }, */
      `,
    })}
`;

export const Bullet = styled.View<{ theme: Theme }>`
  background-color: black;
  border-radius: 100%;
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 3px;
        height: 3px;
        margin-top: 8px;
      `,
      native: css`
        width: ${theme.scale(3)}px;
        height: ${theme.scale(3)}px;
        margin-top: ${theme.scale(8)}px;
      `,
    })}
`;
