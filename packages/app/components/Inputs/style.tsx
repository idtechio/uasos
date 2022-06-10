import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const Error = styled.Text<{ theme: Theme }>`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};

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

type WrapperProps = { isCentered?: boolean };

export const Wrapper = styled.View<WrapperProps>`
  display: flex;
  align-items: ${({ isCentered }) => (isCentered ? "center" : "normal")};
`;
