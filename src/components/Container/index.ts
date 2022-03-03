import { css } from "styled-components";
import styled from "styled-components/native";

export default styled.View`
  padding: 0 16px;
  ${({ theme }) =>
    theme.getBreakPoint({
      md: css`
        padding: 0 50px;
      `,

      lg: css`
        padding: 0 150px;
      `,
    })}
`;
