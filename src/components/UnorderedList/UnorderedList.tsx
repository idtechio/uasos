import React from "react";
import {
  Column,
  ColumnBulletPoint,
  PointColumn,
  Row,
  ColumnText,
} from "./style";

interface Props {
  texts: string[];
}
export const UnorderedList = ({ texts }: Props) => (
  <Column>
    {texts.map((text, index) => (
      <Row key={index}>
        <PointColumn>
          <ColumnBulletPoint>{"\u2022"}</ColumnBulletPoint>
        </PointColumn>
        <Column>
          <ColumnText>{text}</ColumnText>
        </Column>
      </Row>
    ))}
  </Column>
);
