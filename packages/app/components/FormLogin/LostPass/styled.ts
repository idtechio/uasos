import styled, { css } from "styled-components/native";
import { Theme } from "app/provider/theme/theme.config";

export const LostPassWrapper = styled.View<{ theme: Theme }>`
  text-transform: capitalize;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: 32px;
      `,
      native: css`
        margin-top: ${theme.scale(32)}px;
      `,
    })}
`;

export const StyledText = styled.Text`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;

export const StyledLink = styled.Text`
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  text-decoration: underline;
`;
