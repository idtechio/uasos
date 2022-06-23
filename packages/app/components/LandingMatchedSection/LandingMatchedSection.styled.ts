import styled, { css } from "styled-components/native";
import { Theme } from "app/provider/theme/theme.config";

export const MatchedCardsWrapper = styled.View<{ theme: Theme }>`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-self: stretch;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-right: 16px;
        margin-top: 16px;
        ${theme.getBreakPoint({
          md: css`
            padding: 0;
            margin: 0;
            justify-content: space-between;
          `,
          lg: css`
            padding: 0;
            margin: 0;
            margin-bottom: 70px;
          `,
        })}
      `,
      native: css`
        padding-right: ${theme.scale(16)}px;
        margin-top: ${theme.scale(16)}px;
      `,
    })}
`;
