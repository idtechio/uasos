import { Theme } from "app/provider/theme/theme.config";

import styled, { css } from "styled-components/native";

interface ViewProps {
  theme: Theme;
}

export default styled.View<ViewProps>(
  ({ theme }) =>
    css`
      padding: 0 ${theme.scale(16)}px;

      ${theme.styleFor({
        web: theme.getBreakPoint({
          md: css`
            padding: 0 50px;
          `,

          lg: css`
            padding: 0 150px;
          `,
        }),
      })}
    `
);
