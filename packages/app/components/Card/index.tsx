import { Theme } from "app/provider/theme/theme.config";
import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const { width, height } = Dimensions.get("window");

const Card = styled.View<{ theme: Theme }>(({ theme }) => {
  return css`
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.13);

    ${theme.styleFor({
      web: css`
        padding: 24px 12px;
        border-radius: 10px;
        width: ${width - 30}px;
        max-height: ${height - 40}px;
      `,
      native: css`
        padding: ${theme.scale(24)}px ${theme.scale(12)}px;
        border-radius: ${theme.scale(10)}px;
      `,
    })}
  `;
});

export default Card;
