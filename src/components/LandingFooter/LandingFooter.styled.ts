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

export const FooterHeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.View`
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        display: none;
      `,
    })}
`;

export const HorizontalLine = styled.View`
  margin: 10px 0;
  border: 1px solid #fff;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        display: none;
      `,
    })}
`;

export const FlagsWrapper = styled.View`
  flex-direction: row;
`;

export const FlagWrapper = styled.View`
  margin-right: 8px;
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

export const FooterItem = styledWeb.a`
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
