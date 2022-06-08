import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";

interface CommonTheme {
  theme?: Theme;
}

export const Container = styled.ScrollView.attrs<CommonTheme>(({ theme }) => ({
  contentContainerStyle: theme.styleFor({
    flexWrap: "wrap",
    flexDirection: "column",
    web: {
      maxWidth: 960,
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    native: {},
  }),
}))<CommonTheme>(
  ({ theme }) => css`
    ${theme.styleFor({
      web: css`
        width: "100%";
      `,
    })}
  `
);
