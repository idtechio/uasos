import styled, { css } from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import type { SectionProps } from "./types";

export const PageSection = styled.View<SectionProps & { theme: Theme }>`
  padding: ${(props) =>
    props.zeroPadding
      ? "0 0"
      : props.padding
      ? `${props.padding[0]}px ${props.padding[1]}px ${props.padding[2]}px ${props.padding[3]}px`
      : `${props.theme.pageSection.desktopSpacing} 0`};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.pageSection.backgroundColor};
  flex-direction: column;
  z-index: ${({ zIndex }) => zIndex || "0"};
  flex-grow: ${(props) => props.flexGrow};
`;

export const SectionHeader = styled.Text<SectionProps & { theme: Theme }>`
  color: ${({ theme }) => theme.colors.headings};
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 50px;
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        text-align: center;
      `,
    })}
`;
