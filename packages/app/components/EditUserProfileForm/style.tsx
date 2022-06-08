import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";

interface CommonTheme {
  theme: Theme;
}

export const ContentContainer = styled.View<CommonTheme>(
  ({ theme }) => css`
    background-color: white;

    ${theme.styleFor({
      web: css`
        padding: 20px 15px 17px;
        margin-bottom: 25px;
        width: 100%;
      `,
      native: css`
        padding: ${theme.scale(20)}px ${theme.scale(15)}px ${theme.scale(17)}px;
        margin-bottom: ${theme.scale(25)}px;
      `,
    })}
  `
);

export const ScreenHeader = styled.Text<CommonTheme>(
  ({ theme }) => css`
    font-family: "RobotoRegular";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.5px;

    color: ${theme.colors.figmaPalette.fontMain};
  `
);

export const FormHeader = styled.Text<CommonTheme>(
  ({ theme }) => css`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: ${theme.colors.figmaPalette.fontMain};

    ${theme.styleFor({
      web: css`
        margin-top: 32px;
        margin-bottom: 16px;
      `,
      native: css`
        margin-top: ${theme.scale(32)}px;
        margin-bottom: ${theme.scale(16)}px;
      `,
    })}
  `
);

export const ErrorText = styled.Text<CommonTheme>(
  ({ theme }) => css`
    color: ${theme.colors.figmaPalette.alert};
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: right;

    flex: 0 0 100%;

    ${theme.styleFor({
      web: css`
        margin-bottom: 12px;
      `,
      native: css`
        margin-bottom: ${theme.scale(12)}px;
      `,
    })}
  `
);

export const SuccessMessage = styled.Text<CommonTheme>(
  ({ theme }) => css`
    color: ${theme.colors.figmaPalette.positive};
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    flex: 0 0 100%;

    ${theme.styleFor({
      web: css`
        margin-bottom: 12px;
      `,
      native: css`
        margin-bottom: ${theme.scale(12)}px;
      `,
    })}
  `
);

export const FormFooter = styled.View<CommonTheme>(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ${theme.styleFor({
      web: css`
        margin-top: 119px;
      `,
      native: css`
        margin-top: ${theme.scale(119)}px;
      `,
    })}
  `
);
