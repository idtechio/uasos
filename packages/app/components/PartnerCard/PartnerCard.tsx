import React from "react";
import { Image, ViewStyle } from "react-native";
import { Link } from "solito/link";
import styled from "styled-components/native";
import Card from "../Card";

const StyledImage = styled(Image)`
  flex: 1;
`;

interface Props {
  source: string;
  alt: string;
  style?: ViewStyle;
  href: string;
}

export function PartnerCard({ source, href = "", alt, style }: Props) {
  return (
    <Link href={href}>
      <a target="_blank">
        <Card style={style}>
          <StyledImage
            alt={alt}
            /* @ts-expect-error TODO: fix prop types */
            source={source}
            resizeMode="contain"
          />
        </Card>
      </a>
    </Link>
  );
}
