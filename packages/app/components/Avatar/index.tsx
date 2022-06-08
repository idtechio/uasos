import React from "react";
import { Image } from "react-native";
import type { ButtonProps } from "./types";
import {
  AvatarWraper,
  AvatarImage,
  AvatarImageWrapper,
  AvatarContent,
  Subtitle,
  Title,
} from "./style";

const Avatar = ({ title, subtitle, reversedTitle, avatar }: ButtonProps) => {
  return (
    <AvatarWraper>
      <AvatarImageWrapper>
        <AvatarImage
          source={{
            uri: `${
              avatar ||
              "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
            }`,
          }}
        />
      </AvatarImageWrapper>
      <AvatarContent>
        {!reversedTitle && <Subtitle>{subtitle}</Subtitle>}
        <Title>{title}</Title>
        {!!reversedTitle && <Subtitle>{subtitle}</Subtitle>}
      </AvatarContent>
    </AvatarWraper>
  );
};

export default Avatar;
