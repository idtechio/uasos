import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

const TagsLineWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
const Tag = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.textOnAccent};
  font-size: 11px;
  margin: 0px 6px;
  padding: 6px 12px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.blue};
  box-sizing: border-box;
  border-radius: 50px;
`;

type TagsProps = {
  tags: string[];
  containerStyle?: StyleProp<ViewStyle>;
};

export default function Tags({ tags, containerStyle }: TagsProps) {
  return (
    <TagsLineWrapper style={containerStyle}>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsLineWrapper>
  );
}
