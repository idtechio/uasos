import * as React from "react";
import { css } from "styled-components";
import styled from "styled-components/native";
import Card from "../Card";

const Value = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) =>
    theme.getBreakPoint({
      xxl: css`
        font-size: 72px;
        margin-bottom: 40px;
      `,
      lg: css`
        font-size: 36px;
        margin-bottom: 30px;
      `,
      md: css`
        font-size: 36px;
        margin-bottom: 20px;
      `,
    })}
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 12px;
  text-align: center;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        font-size: 22px;
      `,
    })}
`;

const TileCard = styled<{ spaced?: boolean }>(Card)`
  width: 172px;
  height: 90px;
  margin-top: 15px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, spaced }) =>
    theme.getBreakPoint({
      md: css`
        margin: 0;
        ${spaced && "margin: 0 35px;"}
        height: auto;
        flex-grow: 1;
        padding: 40px;
        min-height: 150px;
      `,
      lg: css`
        min-height: 220px;
        margin: 0;
        ${spaced && "margin: 0 35px;"}
        height: auto;
        flex-grow: 1;
        padding: 40px;
        min-height: 250px;
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
