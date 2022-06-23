import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const HeaderPage = styled.View<{ theme: Theme }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  z-index: 10;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 72px;
        padding: 18px 23px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      `,
      native: css`
        height: ${theme.scale(72)}px;
        padding: ${theme.scale(18)}px ${theme.scale(23)}px;
      `,
    })}
`;

export const ActionBar = styled.View`
  flex-direction: row;
`;

export const Container = styled.View`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const ServiceLogo = styled.View``;

export const Flags = styled.View<{ theme: Theme }>`
  flex-direction: "row";

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-right: 20px;
      `,
      native: css`
        margin-right: ${theme.scale(20)}px;
      `,
    })}
`;
