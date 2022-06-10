import styled, { css } from "styled-components/native";
import { colors } from "../../style/landingPageStyle";
import { Theme } from "../../provider/theme/theme.config";

export const InstructionsGridContainer = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        display: "grid";
        grid-template-columns: "1fr 1fr 1fr";
        grid-gap: "22px";
        align-self: "stretch";
      `,
      native: css``,
    })}
`;

export const InstructionsGridItem = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 225px;
        height: 225px;
      `,
      native: css`
        width: ${theme.scale(225)}px;
        height: ${theme.scale(225)}px;
      `,
    })}
`;

export const ListItemWrapper = styled.View<{ theme: Theme }>`
  background-color: #fff;
  position: relative;
  justify-content: flex-start;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 300px;
        margin: 20px 10px 10px;
        padding: 12px;

        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.13);
        ${() =>
          theme.getBreakPoint({
            lg: css`
              height: 100%;
              margin: 0;
            `,
          })}
      `,
      native: css`
        height: ${theme.scale(300)}px;
        margin: ${theme.scale(20)}px ${theme.scale(10)}px ${theme.scale(10)}px;
        padding: ${theme.scale(12)}px;
      `,
    })}
`;

export const Title = styled.Text<{ theme: Theme }>`
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 7px;
      `,
      native: css`
        margin-bottom: ${theme.scale(7)}px;
      `,
    })}
`;

export const Text = styled.Text`
  font-size: 12px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  line-height: 17px;
  text-align: center;
`;

export const SlideBadge = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  border-right-width: 50px;
  border-right-color: transparent;
  border-top-width: 55px;
  border-top-color: ${colors.blue};
`;

export const BadgeText = styled.Text<{ theme: Theme }>`
  position: absolute;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        top: -47px;
        left: 9px;
      `,
      native: css`
        top: -${theme.scale(47)}px;
        left: ${theme.scale(9)}px;
      `,
    })}
`;

export const ContentContainer = styled.View<{ theme: Theme }>`
  height: 100%;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: 20px;

        ${() =>
          theme.getBreakPoint({
            lg: css`
              margin: 0;
            `,
          })}
      `,
      native: css`
        margin-top: ${theme.scale(20)}px;
      `,
    })}
`;

export const Image = styled.Image`
  width: 100%;
  height: 35%;
  aspect-ratio: 1;
`;
