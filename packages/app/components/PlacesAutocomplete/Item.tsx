import React from "react";
import { Text } from "react-native";
import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

interface ItemProps {
  onPress?: () => void;
  label: string;
  sublabel?: string;
  disabled?: boolean;
}

export const Container = styled.Pressable<{ theme: Theme }>`
  display: flex;
  height: fit-content;
  background-color: #fff;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 10px;
      `,
      native: css`
        padding: ${theme.scale(10)}px;
      `,
    })}
`;

const ColoredText = styled.Text`
  color: gray;
`;

export const Item = ({ disabled, onPress, label, sublabel }: ItemProps) => (
  <Container disabled={disabled} onPress={onPress}>
    <Text numberOfLines={1}>{label}</Text>
    <ColoredText numberOfLines={1}>{sublabel}</ColoredText>
  </Container>
);
