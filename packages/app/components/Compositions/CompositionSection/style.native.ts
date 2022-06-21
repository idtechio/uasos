import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";
import { scale } from "app/utils/scale";

import type { SectionProps } from "./types";

export const PageSection = styled.View<SectionProps & { theme: Theme }>`
  padding: ${(props) =>
    props.zeroPadding
      ? "0 0"
      : props.padding
      ? `${scale(props.padding[0])}px ${scale(props.padding[1])}px ${scale(props.padding[2])}px ${scale(props.padding[3])}px`
      : `${scale(props.theme.pageSection.desktopSpacing)} 0`};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.pageSection.backgroundColor};
  flex-direction: column;
  z-index: ${({ zIndex }) => zIndex || "0"};
  flex-grow: ${(props) => props.flexGrow};
`;

interface HeaderWrapperProps {
  useMargin: boolean;
}

export const HeaderWrapper = styled.View<HeaderWrapperProps>(
  ({ useMargin }) =>
    css`
      margin-bottom: ${useMargin && `${scale(50)}px`};
    `
);

export const SectionHeader = styled.Text<SectionProps & { theme: Theme }>(
  ({ theme }) => css`
    color: ${theme.colors.headings};
    font-size: 17px;
    font-weight: 700;
  `
);

export const SectionSubHeader = styled.Text<SectionProps & { theme: Theme }>(
  ({ theme }) => css`
    color: ${theme.colors.headings};
    font-size: 14px;
    margin-top: scale(5)px;
    font-weight: 500;
  `
);