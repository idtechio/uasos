import styled, { css } from "styled-components/native";
import { Theme } from "../../../style/theme.config";
import {
  MOBILE_FOOTER_HEIGHT,
  DESKTOP_FOOTER_HEIGHT,
} from "../../Footer/Footer.styled";
import type { AppBodyProps } from "./types";

export const AppBodyWraper = styled.View<AppBodyProps>(
  () => css`
    position: relative;
    background-color: #f5f4f4;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    width: 100%;
    z-index: 100;
  `
);

export const StyledScrollView = styled.ScrollView`
  width: 100%;
`;

export const Content = styled.View<{ theme: Theme }>(
  ({ theme }) => css`
    padding-top: 72px;
    min-height: calc(100vh - ${MOBILE_FOOTER_HEIGHT}px - 57px);

    ${theme.getBreakPoint({
      lg: css`
        min-height: calc(100vh - ${DESKTOP_FOOTER_HEIGHT}px);
      `,
      md: css`
        min-height: calc(100vh - ${MOBILE_FOOTER_HEIGHT}px);
      `,
    })};
  `
);
