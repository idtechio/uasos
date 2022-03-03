import { css } from "styled-components";
import styled from "styled-components/native";

import { colors } from "../../style/landingPageStyle";

export const MatchedCardTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.blue};
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin-top: 70px;
        margin-bottom: 70px;
        font-size: 40px;
      `,
    })}
`;

export const MatchedCardsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding-right: 16px;
  margin-top: 16px;

  ${({ theme }) =>
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
