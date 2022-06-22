import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";

export const Container = styled.View<{ theme: Theme }>`
  display: block;
  margin-top: 0px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 30px;
      `,
      native: css`
        margin-bottom: ${theme.scale(30)}px;
      `,
    })}
`;
