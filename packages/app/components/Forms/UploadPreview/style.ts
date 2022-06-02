import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";

export const PreviewWrapper = styled.View<{ theme: Theme }>`
  position: relative;
  background: #fff;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 85px;
        height: 85px;
      `,
      native: css`
        width: ${theme.scale(85)}px;
        height: ${theme.scale(85)}px;
      `,
    })}
`;

export const IconWrapper = styled.TouchableOpacity<{ theme: Theme }>`
  position: absolute;
  background-color: #003566;
  border-radius: 100%;
  top: -10px;
  right: -10px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 24px;
        height: 24px;
      `,
      native: css`
        width: ${theme.scale(24)}px;
        height: ${theme.scale(24)}px;
      `,
    })}
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
