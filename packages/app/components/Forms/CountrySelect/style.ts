import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";

export const ErrorMessage = styled.Text<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.error};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 10px;
      `,
      native: css`
        margin-bottom: ${theme.scale(10)}px;
      `,
    })}
`;

export const LabelContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LabelText = styled.Text<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 8px;
      `,
      native: css`
        margin-left: ${theme.scale(8)}px;
      `,
    })}
`;
