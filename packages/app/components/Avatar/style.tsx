import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";

interface CommonTheme {
  theme: Theme;
}

export const AvatarWraper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AvatarImageWrapper = styled.View<CommonTheme>(
  ({ theme }) => css`
    overflow: hidden;

    ${theme.styleFor({
      web: css`
        margin-right: 10px;
        border-radius: 50%;
        width: 32px;
        height: 32px;
      `,
      native: css`
        margin-right: ${theme.scale(10)}px;
        border-radius: 50px;
        width: ${theme.scale(32)}px;
        height: ${theme.scale(32)}px;
      `,
    })}
  `
);

export const AvatarImage = styled.Image<CommonTheme>(
  ({ theme }) => css`
    width: 100%;
    height: 100%;

    ${theme.styleFor({
      native: css`
        resize-mode: cover;
      `,
    })}
  `
);

export const AvatarContent = styled.View``;

export const Subtitle = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  font-size: 12px;
  font-weight: 300;
`;

export const Title = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  font-weight: 400;
  font-size: 16px;
`;
