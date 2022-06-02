import styled, { css } from "styled-components/native";
import { colors } from "../../style/landingPageStyle";
import { Theme } from "../../provider/theme/theme.config";

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

export const ListItemWrapper = styled.View`
  background-color: #fff;
  position: relative;
  height: 300px;
  margin: 20px 10px 10px;
  padding: 20px 0;
  justify-content: flex-start;
  background: #ffffff;
  padding: 12px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.13);

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        height: 100%;
        margin: 0;
      `,
    })}
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 7px;
  font-weight: 700;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
`;

export const Text = styled.Text`
  font-size: 12px;
  line-height: 17px;
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

export const BadgeText = styled.Text`
  position: absolute;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  top: -47px;
  left: 9px;
`;

export const ContentContainer = styled.View`
  margin-top: 20px;
  height: 100%;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        margin: 0;
      `,
    })}
`;

export const Image = styled.Image`
  width: 100%;
  height: 35%;
  aspect-ratio: 1;
`;
