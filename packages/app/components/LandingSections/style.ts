import styled, { css } from "styled-components/native";
import { Theme } from "app/provider/theme/theme.config";

export const Container = styled.View<{ isOpen: boolean, theme: Theme }>`
  position: relative;
  overflow: hidden;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
          max-height: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "100%" : `${theme.scale(16)}px`)};
      `,
      native: css`
      max-height: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "100%" : `${theme.scale(16)}px`)};
      `,
    })}
`;

export const Text = styled.Text<{ theme: Theme }>`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 24px;
      `,
      native: css`
        margin-bottom: ${theme.scale(24)}px;
      `,
    })}
`;

export const TextBold = styled(Text)`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
`;

export const GradientBackground = styled.ImageBackground<{ theme: Theme }>`
  position: absolute;
  background-color: transparent;
  height: 10px;
  background-size: stretch;
  bottom: 0;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 100vw;
        height: 50;
      `,
      native: css`
        width: ${theme.scale(100)}px;
        height: ${theme.scale(50)}px;
      `,
    })}
`;

export const ButtonContainer = styled.View`
  align-items: center;
  width: 100%;
`;
