import * as React from "react";
import styled from "styled-components/native";
import Card from "../Card";

const Value = styled.Text`
  font-size: 36px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 12px;
`;

const TileCard = styled(Card)`
  width: 172px;
  height: 90px;
  margin-top: 15px;
  margin-left: 16px;
`;

type TileProps = {
  value: string | number;
  text: string;
};

const Tile = ({ value, text }: TileProps) => {
  return (
    <TileCard>
      <Value>{value}</Value>
      <Text>{text}</Text>
    </TileCard>
  );
};

export default Tile;
