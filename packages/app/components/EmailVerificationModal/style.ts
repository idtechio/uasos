import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";

interface CommonTheme {
  theme: Theme;
}

type Props = {
  disabled?: boolean;
  theme: Theme;
  border?: boolean;
};
export const StyledText = styled.Text<Props>(
  ({ theme, border, disabled }) => css`
    font-size: 14px;
    font-weight: 400;
    color: ${disabled ? theme.colors.alert : theme.colors.text};

    text-align: center;

    ${border &&
    css`
      margin: 0;
      padding-bottom: 2px;
      border-bottom-color: ${theme.forms.border};
      border-bottom-width: 1px;
      border-style: dashed;
    `}

    ${theme.styleFor({
      web: css`
        margin: 20px 0;
      `,
      native: css`
        margin: ${theme.scale(20)}px 0;
      `,
    })}
  `
);

export const StyledTextButton = styled.Text<Props>(
  ({ theme, disabled }) => css`
    font-size: 16px;
    font-weight: 700;
    color: ${disabled ? "#D9D9D9" : theme.colors.headings};

    text-align: center;

    ${theme.styleFor({
      web: css`
        margin: 10px 0;
      `,
      native: css`
        margin: ${theme.scale(10)}px 0;
      `,
    })}
  `
);

export const StyledHeader = styled.Text<CommonTheme>(
  ({ theme }) => css`
    font-size: 24px;
    color: ${theme.colors.headings};
    font-weight: 700;

    text-align: center;

    ${theme.styleFor({
      web: css`
        margin: 20px 0;
      `,
      native: css`
        margin: ${theme.scale(20)}px 0;
      `,
    })}
  `
);

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
