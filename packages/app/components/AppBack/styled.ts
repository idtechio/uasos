import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const LinkContent = styled.View<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 100%;
        height: 100%;
      `,
    })}
`;

export const StyledText = styled.Text`
  text-transform: capitalize;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 100%;
      `,
      native: css`
        margin-left: ${theme.scale(10)}px;
      `,
    })}
`;

export const Wrapper = styled.View`
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.pageSection.backgroundColorAlt};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 10;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-left: 6px;
        margin-top: 18px;
        margin-bottom: 15px;
      `,
      native: css`
        padding-left: ${theme.scale(6)}px;
        margin-top: ${theme.scale(18)}px;
        margin-bottom: ${theme.scale(15)}px;
      `,
    })}
`;

export const ChevronIconWrapper = styled.View<{ theme: Theme }>`
  transform: rotate(90deg) translateX(-1px);

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 24;
        height: 24;
      `,
      native: css`
        width: ${theme.scale(24)}px;
        height: ${theme.scale(24)}px;
      `,
    })}
`;
