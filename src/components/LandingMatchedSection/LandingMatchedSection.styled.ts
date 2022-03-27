import { css } from "styled-components";
import styled from "styled-components/native";

import { colors } from "../../style/landingPageStyle";
import { Theme } from "../../style/theme.config";

export const MatchedCardsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding-right: 16px;
  margin-top: 16px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
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
`;
