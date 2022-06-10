import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text<{ theme: Theme }>`
  font-weight: 700;
  font-size: 13px;
  color: #003566;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 20px;
      `,
      native: css`
        margin-left: ${theme.scale(20)}px;
      `,
    })}
`;
