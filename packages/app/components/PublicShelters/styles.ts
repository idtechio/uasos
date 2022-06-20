import styled, { css } from "styled-components/native";
import { Theme } from "app/provider/theme/theme.config";

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

export const Layout = styled.View<{ theme: Theme }>`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 18px 25px 0px;
        ${theme.getBreakPoint({
          lg: css`
            max-width: ${theme.maxContainerWidth + 30}px;
            padding: 75px 25px 0px;
          `,
        })}
      `,
      native: css`
        padding-top: ${theme.scale(18)}px;
        padding-horizontal: ${theme.scale(25)}px;
        padding-bottom: ${theme.scale(0)}px;
      `,
    })}
`;

export const Content = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          xl: css`
            width: 70%;
          `,
          default: css`
            width: 70%;
          `,
          mobile: css`
            width: 100%;
          `,
        })}
      `,
    })}
`;

export const YellowTopSplash = styled.Image<{ theme: Theme }>`
  display: none;
  position: absolute;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
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
        })}
      `,
    })}
`;

export const BlueMiddleSplash = styled.Image<{ theme: Theme }>`
  display: none;
  position: absolute;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
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
        })}
      `,
    })}
`;

export const YellowBottomSplash = styled.Image<{ theme: Theme }>`
  display: none;
  position: absolute;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
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
        })}
      `,
    })}
`;

export const DesktopSectionTitle = styled.Image<{ theme: Theme }>`
  display: none;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          md: css`
            display: block;
            margin-bottom: 16px;
          `,
        })}
      `,
    })}
`;

export const MobileSectionTitle = styled.Text<{ theme: Theme }>`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.headings};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 5px;
        ${theme.getBreakPoint({
          md: css`
            display: none;
          `,
        })}
      `,
      native: css`
        margin-bottom: ${theme.scale(5)}px;
      `,
    })}
`;

export const Wrapper = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 5px 0px;
        margin-bottom: 24px;
        ${theme.getBreakPoint({
          md: css`
            margin-bottom: 31px;
          `,
        })}
      `,
      native: css`
        padding-vertical: ${theme.scale(5 / -2)}px;
        padding-horizontal: ${theme.scale(0)}px;
        margin-bottom: ${theme.scale(24)}px;
      `,
    })}
`;

export const Description = styled.Text<{ theme: Theme }>`
  font-size: 12px;
  line-height: 13px;
  color: ${({ theme }) => theme.colors.headings};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          md: css`
            font-size: 20px;
            line-height: 28px;
          `,
        })}
      `,
    })}
`;

export const DropdownsWrapper = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 14px 0px;
        margin-bottom: 24px;
        ${theme.getBreakPoint({
          md: css`
            flex-direction: row;
            gap: 0px 10px;
            justify-content: space-between;
            margin-bottom: 31px;
          `,
        })}
      `,
      native: css`
        padding-vertical: ${theme.scale(14 / -2)}px;
        padding-horizontal: ${theme.scale(0)}px;
        margin-bottom: ${theme.scale(24)}px;
      `,
    })}
`;

export const DropdownWrapper = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 10px 0px;
        flex-grow: 1;
      `,
      native: css`
        padding-vertical: ${theme.scale(10 / -2)}px;
        padding-horizontal: ${theme.scale(0)}px;
      `,
    })}
`;

export const Label = styled.Text<{ theme: Theme }>`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.headings};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          md: css`
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
          `,
        })}
      `,
    })}
`;

export const SheltersContainer = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 50px 0px;
        padding-bottom: 50px;
      `,
      native: css`
        padding-top: ${theme.scale(50 / -2)}px;
        padding-horizontal: ${theme.scale(0)}px;
        padding-bottom: ${theme.scale(50)}px; ;
      `,
    })}
`;
