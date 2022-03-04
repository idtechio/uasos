import styled from "styled-components/native";
import styledWeb, { css } from "styled-components";

import { mediaQuery } from "../../style/breakpoints";

export const FooterWrapper = styled.View`
  align-self: stretch;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        display: flex;
        flex-direction: row-reverse
        justify-content: space-between;
      `,
    })}
`;

export const CreatedByWrapper = styled.View`
  padding-vertical: 5;
  border-radius: 5;
  background-color: #fff;
`;

export const FooterContentWrapper = styled.View`
  flex-direction: column;
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        flex-direction: row;
      `,
    })}
`;

export const FooterContentRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        width: auto;
        min-width: auto;
      `,
    })}
`;

export const FooteItem = styled.View`
  padding-horizontal: 15;
`;

export const FooterLink = styledWeb.a`
  color: white;
  flex: 1;
  font-size: 12px;
  line-height: 24px;
  text-decoration-line: underline;
  ${mediaQuery.lg} {
    white-space: nowrap;
    margin-right: 30px;
    font-size: 16px;
  }
`;
