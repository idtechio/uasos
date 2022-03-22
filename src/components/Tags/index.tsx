import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { bottomMarginStyle } from "../../../pages/desktop/const";

const TagsLineWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
const Tag = styled.Text`
  color: #ffffff;
  margin: 0px 6px;
  padding: 6px 12px;
  background: #003566;
  border: 1px solid #003566;
  box-sizing: border-box;
  border-radius: 50px;
`;

type TagsProps = {
  tags: string[];
  containerStyle?: StyleProp<ViewStyle>;
};

export default function Tags({ tags }: TagsProps) {
  return (
    <TagsLineWrapper style={[{ marginTop: 20 }, bottomMarginStyle]}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsLineWrapper>
  );
}
