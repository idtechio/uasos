import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

const TagsLineWrapper = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
`;
const Tag = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.textOnAccent};
  font-size: 11px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.colors.blue};
  border-radius: 50px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin: 0px 6px;
        padding: 6px 12px;
        box-sizing: "border-box";
      `,
      native: css`
        margin-vertical: ${theme.scale(0)}px;
        margin-horizontal: ${theme.scale(6)}px;
        padding-vertical: ${theme.scale(5)}px;
        padding-horizontal: ${theme.scale(11)}px;
      `,
    })}
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
