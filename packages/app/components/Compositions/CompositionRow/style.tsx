import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";
import type { RowProps } from "./types";

interface RowStyleProps extends RowProps {
  theme: Theme;
}

export const Row = styled.View<RowStyleProps>(
  ({ spacing }) => css`
    flex-direction: row;
    gap: ${spacing};
  `
);
