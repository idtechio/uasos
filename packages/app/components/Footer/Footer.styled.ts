import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const DESKTOP_FOOTER_HEIGHT = 70;
export const MOBILE_FOOTER_HEIGHT = 210;

export const FooterWrapper = styled.View<{theme:Theme}>`
  align-self: stretch;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.accent};
  display: flex;

  ${({theme})=>theme.styleFor({
    web: css`
        padding: 23px;
        
        ${theme.getBreakPoint({
      lg: css`
          flex-direction: row;
        `,
    })}
      `,
    native: css`
        padding: ${theme.scale(23)}px;
      `
  })
    }
`;

export const FooterContentWrapper = styled.View(
  ({ theme }: { theme: Theme }) => css`
  flex-direction: column;

  ${theme.styleFor({
    web: css`
      ${theme.getBreakPoint({
      lg: css`
        flex-direction: row;
      `,
    })}
    `,
  })
    }
`
);

export const FooterLink = styled.Text<{ active?: boolean; theme: Theme }>`
  color: white;
  font-size: 12px;
  line-height: 24px;
  text-decoration-line: ${({ active }) => (active ? "none" : "underline")};
  color: ${({ active, theme }) => (active ? theme.colors.primary : "white")};

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        flex: 1;
        white-space: nowrap;
        margin-right: 15px;
        margin-left: 15px;
        font-size: 16px;
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
