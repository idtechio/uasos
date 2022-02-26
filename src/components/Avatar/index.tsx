import type { ButtonProps } from "./types";
import {
  AvatarWraper,
  AvatarImage,
  AvatarContent,
  Subtitle,
  Title,
} from "./style";
import Image from "next/image";

const Avatar = ({ title, subtitle }: ButtonProps) => {
  return (
    <AvatarWraper>
      <AvatarImage>
        <Image
          src="http://placehold.jp/150x150.png"
          alt=""
          width={32}
          height={32}
        />
      </AvatarImage>
      <AvatarContent>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
      </AvatarContent>
    </AvatarWraper>
  );
};

export default Avatar;
