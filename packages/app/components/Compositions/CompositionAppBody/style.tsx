import styled, { css } from "styled-components/native";

// import {
//   MOBILE_FOOTER_HEIGHT,
//   DESKTOP_FOOTER_HEIGHT,
// } from "../../Footer/Footer.styled";
import type { AppBodyProps, CommonTheme } from "./types";

export const AppBodyWraper = styled.View<AppBodyProps>(
  ({ theme }) => css`
    position: relative;
    background-color: #f5f4f4;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    z-index: 100;

    ${theme.styleFor({
      web: css`
        width: 100%;
      `,
    })}
  `
);

export const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },
}))<CommonTheme>(
  ({ theme }) =>
    css`
      flex: 1;

      ${theme.styleFor({
        web: css`
          width: 100%;
        `,
      })}
    `
);

export const Content = styled.View<CommonTheme>(
  ({ theme }) => css`
    padding-top: 72px;
    flex: 1;

    ${theme.styleFor({
      // web: css`
      //   min-height: calc(100vh - ${MOBILE_FOOTER_HEIGHT}px - 57px);
      //   padding-top: 72px;
      //   ${theme.getBreakPoint({
      //     lg: css`
      //       min-height: calc(100vh - ${DESKTOP_FOOTER_HEIGHT}px);
      //     `,
      //     md: css`
      //       min-height: calc(100vh - ${MOBILE_FOOTER_HEIGHT}px);
      //     `,
      //   })};
      // `,
      native: css`
        padding-top: ${theme.scale(72)}px;
      `,
    })}
  `
);
