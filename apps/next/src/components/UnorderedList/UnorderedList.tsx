import React from "react";
import { View } from "react-native";
import { Row, ColumnBulletPoint, ColumnText } from "./style";

interface Props {
  texts: string[];
}
export const UnorderedList = ({ texts }: Props) => (
  <View>
    {texts.map((text, index) => (
      <Row key={index}>
        <ColumnBulletPoint>{"\u2022"}</ColumnBulletPoint>
        <ColumnText>{text}</ColumnText>
      </Row>
    ))}
  </View>
);
