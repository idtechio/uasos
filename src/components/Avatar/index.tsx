/* eslint-disable jsx-a11y/alt-text */
import { Image } from "react-native";
import type { ButtonProps } from "./types";
import {
  AvatarWraper,
  AvatarImage,
  AvatarContent,
  Subtitle,
  Title,
} from "./style";

const Avatar = ({ title, subtitle, reversedTitle, avatar }: ButtonProps) => {
  return (
    <AvatarWraper>
      <AvatarImage>
        <Image
          source={{ uri: `${avatar || "http://placehold.jp/150x150.png"}` }}
          width={32}
          height={32}
        />
      </AvatarImage>
      <AvatarContent>
        {!reversedTitle && <Subtitle>{subtitle}</Subtitle>}
        <Title>{title}</Title>
        {!!reversedTitle && <Subtitle>{subtitle}</Subtitle>}
      </AvatarContent>
    </AvatarWraper>
  );
};

export default Avatar;
