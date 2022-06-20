import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";
import type { SectionProps } from "./types";

export const PageSection = styled.View<SectionProps & { theme: Theme }>`
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.pageSection.backgroundColor};
  flex-direction: column;
  z-index: ${({ zIndex }) => zIndex || "0"};
  flex-grow: ${(props) => props.flexGrow ? props.flexGrow : '1'};
  ${({ theme, paddingT, paddingR, paddingB, paddingL }) => theme.styleFor({
        web: css`
    padding-top: ${paddingT ? paddingT : 0}px;
    padding-right: ${paddingR ? paddingR : 0}px;
    padding-bottom: ${paddingB ? paddingB : 0}px;
    padding-left: ${paddingL ? paddingL : 0}px;
    `,
        native: css`
    padding-top: ${paddingT ? theme.scale(paddingT) : 0}px;
    padding-right: ${paddingR ? theme.scale(paddingR) : 0}px;
    padding-bottom: ${paddingB ? theme.scale(paddingB) : 0}px;
    padding-left: ${paddingL ? theme.scale(paddingL) : 0}px;
    `,
      })},
`;


interface HeaderWrapperProps {
  useMargin: boolean;
}

export const HeaderWrapper = styled.View<HeaderWrapperProps & { theme: Theme }>(
  ({ useMargin,theme }) =>
    css`
    ${theme.styleFor({
      web: css`
      margin-bottom: ${useMargin ? "50" : "0"}px;
      `,
      native:css`
      margin-bottom: ${theme.scale(useMargin ? 50 : 0)}px;
      `
    })}
    `
);

export const SectionHeader = styled.Text<SectionProps & { theme: Theme }>(
  ({ theme }) => css`
  color: ${theme.colors.headings};
  font-size: 37px;
  font-weight: 700;
  ${theme.styleFor({
    web: css`
    ${theme.getBreakPoint({
      lg: css`
        text-align: center;
      `,
    })}`
  })}
  `
);

export const SectionSubHeader = styled.Text<SectionProps & { theme: Theme }>`
  color:${({ theme }: { theme: Theme }) => theme.colors.headings};
    font-size: 14px;
    font-weight: 500;
  ${({ theme }) => theme.styleFor({
  web: css`
    margin-top: 5px;
    ${theme.getBreakPoint({
    lg: css`
        text-align: center;
      `,
  })}
  `,
  native: css`
      margin-top: ${theme.scale(5)}px;
    `
})}
`;
