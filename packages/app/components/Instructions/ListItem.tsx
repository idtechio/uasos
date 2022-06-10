import React from "react";
import {
  BadgeText,
  ContentContainer,
  ListItemWrapper,
  SlideBadge,
  Title,
  Image,
  Text,
} from "./style";

export type ListItemProps = {
  title: string;
  text: string;
  image?: NodeRequire;
  index: number;
};

const ListItem = ({ title, text, image, index }: ListItemProps) => {
  return (
    <ListItemWrapper>
      <SlideBadge>
        <BadgeText>{index ? index + 1 : 1}</BadgeText>
      </SlideBadge>

      <ContentContainer>
        {/* @ts-expect-error TODO: fix prop types */}
        <Image source={image} accessibilityLabel={title} resizeMode="contain" />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </ContentContainer>
    </ListItemWrapper>
  );
};

export default ListItem;
