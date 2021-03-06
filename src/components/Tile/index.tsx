import { css } from "styled-components";
import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";
import Card from "../Card";

const Value = styled.Text`
  font-weight: 800;
  font-size: 36px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
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
`;

const Text = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 12px;
  text-align: center;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        font-size: 16px;
      `,
    })}
`;

const TileCard = styled(Card)<{ spaced?: boolean }>`
  width: 225px;
  height: 100%;
  margin-top: 15px;
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${({ theme, spaced }) =>
    theme.getBreakPoint({
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
