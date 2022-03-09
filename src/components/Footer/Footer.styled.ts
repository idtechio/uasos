import styled from "styled-components/native";
import styledWeb, { css } from "styled-components";
import { Theme } from "../../style/theme.config";

export const FooterWrapper = styled.View`
  align-self: stretch;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.accent};
  padding: 23px;
  display: flex;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        flex-direction: row;
      `,
    })}
`;

export const FooterContentWrapper = styled.View`
  flex-direction: column;
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        flex-direction: row;
      `,
    })}
`;

export const FooterLink = styledWeb.a<{ active?: boolean; theme: Theme }>`
  color: white;
  flex: 1;
  font-size: 12px;
  line-height: 24px;
  text-decoration-line: ${({ active }) => (active ? "none" : "underline")};
  color: ${({ active, theme }) => (active ? theme.colors.primary : "white")};

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        white-space: nowrap;
        margin-right: 15px;
        margin-left: 15px;
        font-size: 16px;
        white-space: nowrap;
      `,
    })}
`;

export const FooterHeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HorizontalLine = styled.View`
  margin: 10px 0;
  border: 0 solid #fff;
  border-bottom-width: 2px;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin: 0 10px;
        border-left-width: 2px;
      `,
    })}
`;
