import React from "react";
import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";
import Card from "../../../../apps/next/src/components/Card";

const Value = styled.Text<{ theme: Theme }>`
  font-weight: 800;
  font-size: 36px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          xl: css`
            font-size: 42px;
            line-height: 60px;
            margin-bottom: 32px;
          `,
          lg: css`
            font-size: 36px;
            line-height: 56px;
            margin-bottom: 30px;
          `,
          md: css`
            font-size: 36px;
            margin-bottom: 20px;
          `,
          sm: css`
            font-size: 36px;
            margin-bottom: 10px;
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

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        ${theme.getBreakPoint({
          lg: css`
            font-size: 16px;
          `,
        })}
      `,
    })}
`;

const TileCard = styled(Card)<{ spaced?: boolean; theme: Theme }>`
  width: 225px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${({ theme, spaced }) =>
    theme.styleFor({
      web: css`
        margin-top: 15px;
        margin-left: 16px;
        ${theme.getBreakPoint({
          lg: css`
            margin: 0;
            ${spaced && "margin: 0 35px;"}
            flex-grow: 1;
            padding: 20px 16px;
          `,
          md: css`
            margin: 0;
            ${spaced && "margin: 0 35px;"}
            flex-grow: 1;
            padding: 40px;
          `,
          sm: css`
            padding: 16px 5px;
          `,
        })}
      `,
      native: css`
        margin-top: ${theme.scale(15)}px;
        margin-left: ${theme.scale(16)}px;
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
