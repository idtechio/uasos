import styled, { css } from "styled-components/native";
import { Theme } from "../../style/theme.config";
import SectionTitle from "../SectionTitle";

interface CommonProp {
  theme: Theme;
}

export const BackgroundColor = styled.View<CommonProp>(
  () => css`
    position: relative;
    background-color: #fff;
    height: 100%;
    overflow: hidden;
  `
);

export const Layout = styled.View<CommonProp>(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 18px 25px 0px;

    ${theme.getBreakPoint({
      lg: css`
        max-width: ${theme.maxContainerWidth + 30}px;
        padding: 75px 25px 0px;
      `,
    })};
  `
);

export const Content = styled.View<CommonProp>(
  ({ theme }) => css`
    width: 100%;

    ${theme.getBreakPoint({
      md: css`
        width: 70%;
      `,
    })};
  `
);

export const YellowTopSplash = styled.Image<CommonProp>(
  ({ theme }) => css`
    display: none;
    position: absolute;

    ${theme.getBreakPoint({
      lg: css`
        display: flex;
        top: -440px;
        right: -200px;
        width: 803px;
        height: 569px;
      `,
      md: css`
        display: flex;
        top: -240px;
        right: -100px;
        width: 400px;
        height: 320px;
      `,
    })};
  `
);

export const BlueMiddleSplash = styled.Image<CommonProp>(
  ({ theme }) => css`
    display: none;
    position: absolute;

    ${theme.getBreakPoint({
      lg: css`
        display: flex;
        right: -200px;
        top: calc(50% - 215px);
        width: 643px;
        height: 430px;
      `,
      md: css`
        display: flex;
        top: calc(50% - 215px);
        right: -120px;
        width: 400px;
        aspect-ratio: 1.5;
      `,
    })};
  `
);

export const YellowBottomSplash = styled.Image<CommonProp>(
  ({ theme }) => css`
    display: none;
    position: absolute;

    ${theme.getBreakPoint({
      lg: css`
        display: flex;
        right: -200px;
        bottom: -400px;
        width: 803px;
        aspect-ratio: 1.5;
      `,
      md: css`
        display: flex;
        bottom: -240px;
        right: -90px;
        width: 500px;
        aspect-ratio: 1.5;
      `,
    })};
  `
);

export const DesktopSectionTitle = styled(SectionTitle)<CommonProp>(
  ({ theme }) => css`
    display: none;

    ${theme.getBreakPoint({
      md: css`
        display: block;
        margin-bottom: 16px;
      `,
    })};
  `
);

export const MobileSectionTitle = styled.Text<CommonProp>(
  ({ theme }) => css`
    display: block;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: ${theme.colors.headings};
    margin-bottom: 5px;

    ${theme.getBreakPoint({
      md: css`
        display: none;
      `,
    })};
  `
);

export const Wrapper = styled.View<CommonProp>(
  ({ theme }) => css`
    gap: 5px 0px;
    margin-bottom: 24px;

    ${theme.getBreakPoint({
      md: css`
        margin-bottom: 31px;
      `,
    })};
  `
);

export const Description = styled.Text<CommonProp>(
  ({ theme }) => css`
    font-size: 12px;
    line-height: 13px;
    color: ${theme.colors.headings};

    ${theme.getBreakPoint({
      md: css`
        font-size: 20px;
        line-height: 28px;
      `,
    })};
  `
);

export const DropdownsWrapper = styled.View<CommonProp>(
  ({ theme }) => css`
    gap: 14px 0px;
    margin-bottom: 24px;

    ${theme.getBreakPoint({
      md: css`
        flex-direction: row;
        gap: 0px 10px;
        justify-content: space-between;
        margin-bottom: 31px;
      `,
    })};
  `
);

export const DropdownWrapper = styled.View<CommonProp>(
  () => css`
    gap: 10px 0px;
    flex-grow: 1;
  `
);

export const Label = styled.Text<CommonProp>(
  ({ theme }) => css`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${theme.colors.headings};

    ${theme.getBreakPoint({
      md: css`
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
      `,
    })};
  `
);
