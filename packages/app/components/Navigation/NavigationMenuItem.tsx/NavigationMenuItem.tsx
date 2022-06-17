import React from "react";
import { Platform } from "react-native";
import { Container, Title } from "./style";
import { scale } from "app/utils/scale";

interface Props {
  title: string;
  Icon: React.ElementType;
  onPress: () => void;
}

const NavigationMenuItem = ({ title, Icon, onPress }: Props) => {
  const size = Platform.OS === "web" ? 24 : scale(24);

  return (
    <Container onPress={onPress}>
      <Icon height={size} width={size} />
      <Title>{title}</Title>
    </Container>
  );
};

export default NavigationMenuItem;
