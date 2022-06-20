import styled, { css } from "styled-components/native";
import { Theme } from "app/provider/theme/theme.config";

export const Wrapper = styled.View<{ theme: Theme }>`
  width: 100%;
  background-color: ${({ theme }) => theme.pageSection.backgroundColorAlt};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 20px 0;
      `,
      native: css`
        padding-vertical: ${theme.scale(20)}px;
        padding-horizontal: 0;
      `,
    })}
`;

export const StyledText = styled.Text<{ theme: Theme }>`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.blue};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
          margin: 35px 0;
          width: 250px;
      `,
      native: css`
        margin-vertical: ${theme.scale(35)}px;
        margin-horizontal: 0;
        width: ${theme.scale(250)}px;
      `,
    })}
`;
