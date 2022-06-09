import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";

export const Container = styled.TouchableOpacity<{ theme: Theme }>`
  align-items: center;
  flex-direction: row;
  border-top-width: 1px;
  border-top-color: #f4f4f4;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 74px;
        padding-left: 20px;
      `,
      native: css`
        height: ${theme.scale(74)}px;
        padding-left: ${theme.scale(20)}px;
      `,
    })}
`;

export const Title = styled.Text<{ theme: Theme }>`
  font-family: RobotoRegular;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin: 0px 14px;
      `,
      native: css`
        margin: 0px ${theme.scale(14)}px;
      `,
    })}
`;
