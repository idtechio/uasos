import { Text } from "react-native";
import styled, { css } from "styled-components/native";

interface ItemProps {
  onPress?: () => void;
  label: string;
  sublabel?: string;
  disabled?: boolean;
}

export const Item = ({ disabled, onPress, label, sublabel }: ItemProps) => (
  <Container disabled={disabled} onPress={onPress}>
    <Text numberOfLines={1}>{label}</Text>
    <Text
      style={{
        color: "gray",
      }}
      numberOfLines={1}
    >
      {sublabel}
    </Text>
  </Container>
);

export const Container = styled.Pressable(
  () => css`
    display: flex;
    height: fit-content;
    padding: 10px;
    background-color: #fff;
  `
);
