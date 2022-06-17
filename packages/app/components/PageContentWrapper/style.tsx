import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const OuterWrapper = styled.View`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff0;
`;

export const InnerWrapper = styled.View<{ theme: Theme }>`
  width: 100%;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        max-width: 450px;
      `,
    })}
`;
