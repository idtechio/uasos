import React from "react";
import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";
import Card from "../../../../apps/next/src/components/Card";

const Value = styled.Text`
  font-weight: 800;
  font-size: 36px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      xl: css`
        font-size: 42px;
        line-height: 60px;
        ${({ theme }) =>
          theme.styleFor({
            web: css`
              margin-bottom: 32px;
            `,
            native: css`
              margin-bottom: ${theme.scale(32)}px;
            `,
          })}
      `,
      lg: css`
        font-size: 36px;
        line-height: 56px;
        ${({ theme }) =>
          theme.styleFor({
            web: css`
              margin-bottom: 30px;
            `,
            native: css`
              margin-bottom: ${theme.scale(30)}px;
            `,
          })}
      `,
      md: css`
        font-size: 36px;
        ${({ theme }) =>
          theme.styleFor({
            web: css`
              margin-bottom: 20px;
            `,
            native: css`
              margin-bottom: ${theme.scale(20)}px;
            `,
          })}
      `,
      sm: css`
        font-size: 36px;
        ${({ theme }) =>
          theme.styleFor({
            web: css`
              margin-bottom: 10px;
            `,
            native: css`
              margin-bottom: ${theme.scale(10)}px;
            `,
          })}
      `,
    })}
`;

const Text = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 12px;
  text-align: center;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint?.({
      lg: css`
        font-size: 16px;
      `,
    })}
`;

const TileCard = styled(Card)<{ spaced?: boolean; theme: Theme }>`
  width: 225px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: 15px;
        margin-left: 16px;
      `,
      native: css`
        margin-top: ${theme.scale(15)}px;
        margin-left: ${theme.scale(16)}px;
      `,
    })}

  ${({ theme, spaced }) =>
    theme.getBreakPoint?.({
      lg: css`
        margin: 0;
        flex-grow: 1;
        margin: ${spaced ? "0 35px" : 0};
        ${({ theme }) =>
          theme.styleFor({
            web: css``,
            native: css`
              padding-vertical: ${theme.scale(20)}px;
              padding-horizontal: ${theme.scale(16)}px;
              margin: ${spaced ? "0 35px" : 0};
            `,
          })}
      `,
      md: css`
        margin: 0;
        ${spaced && "margin: 0 35px;"}
        flex-grow: 1;
        ${({ theme }) =>
          theme.styleFor({
            web: css`
              padding: 40px;
            `,
            native: css`
              padding-vertical: ${theme.scale(20)}px;
              padding-horizontal: ${theme.scale(16)}px;
            `,
          })}
      `,
      sm: css`
        ${({ theme }) =>
          theme.styleFor({
            web: css`
              padding: 16px 5px;
            `,
            native: css`
              padding-vertical: ${theme.scale(16)}px;
              padding-horizontal: ${theme.scale(5)}px;
            `,
          })}
      `,
    })}
`;

type TileProps = {
  value: string | number;
  text: string;
  spaced?: boolean;
};

const Tile = ({ value, text, spaced }: TileProps) => {
  return (
    <TileCard spaced={spaced}>
      <Value>{value}</Value>
      <Text>{text}</Text>
    </TileCard>
  );
};

export default Tile;
