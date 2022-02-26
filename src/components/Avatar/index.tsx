import type { ButtonProps } from "./types";
import {
  AvatarWraper,
  AvatarImage,
  AvatarContent,
  Subtitle,
  Title,
} from "./style";
import Image from "next/image";

const Avatar = ({ title, subtitle, reversedTitle, avatar }: ButtonProps) => {
  return (
    <AvatarWraper>
      <AvatarImage>
        <Image
          src={`${avatar || "http://placehold.jp/150x150.png"}`}
          alt=""
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
