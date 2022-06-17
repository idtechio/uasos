import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";

interface RadioButtonStyle {
  radius?: number;
  borderWidth?: number;
  color?: string;
}

interface RadioButtonLabelStyle {
  theme: Theme;
  fontSize?: number;
}

export const RadioButtonContainer = styled.TouchableOpacity<{ theme: Theme }>`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-top: 0px;
        padding-bottom: 10px;
      `,
      native: css`
        padding-top: ${theme.scale(0)}px;
        padding-bottom: ${theme.scale(10)}px;
      `,
    })}
`;

export const RadioButtonLabel = styled.Text<
  RadioButtonLabelStyle & { theme: Theme }
>`
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 14)}px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 10px;
      `,
      native: css`
        margin-left: ${theme.scale(10)}px;
      `,
    })}
`;

export const RadioButtonOuterCircle = styled.View<
  RadioButtonStyle & { theme: Theme }
>`
  border-radius: ${({ radius }) => (radius ? radius : 9)}px;
  border-width: ${({ borderWidth }) => (borderWidth ? borderWidth : 1)}px;
  border-color: ${({ color }) => (color ? color : "#bbbbbc")};
  align-items: center;
  justify-content: center;

  ${({ theme, radius }) =>
    theme.styleFor({
      web: css`
        height: ${() => (radius ? radius * 2 : 18)}px;
        width: ${() => (radius ? radius * 2 : 18)}px;
      `,
      native: css`
        height: ${() => (radius ? theme.scale(radius) * 2 : theme.scale(18))}px;
        width: ${() => (radius ? theme.scale(radius) * 2 : theme.scale(18))}px;
      `,
    })}
`;

export const RadioButtonInnerCircle = styled.View<
  RadioButtonStyle & { theme: Theme }
>`
  border-radius: ${({ radius }) => (radius ? radius : 9)}px;
  background-color: ${({ color }) => (color ? color : "#bbbbbc")};

  ${({ theme, radius }) =>
    theme.styleFor({
      web: css`
        height: ${() => (radius ? radius * 1.25 : 11)}px;
        width: ${() => (radius ? radius * 1.25 : 11)}px;
      `,
      native: css`
        height: ${() =>
          radius ? radius * theme.scale(1.25) : theme.scale(11)}px;
        width: ${() =>
          radius ? radius * theme.scale(1.25) : theme.scale(11)}px;
      `,
    })}
`;
