import { Image, ViewStyle } from "react-native";
import styled from "styled-components/native";
import Card from "../Card";

const StyledImage = styled(Image)`
  flex: 1;
`;

interface Props {
  source: string;
  alt: string;
  style?: ViewStyle;
}

export function PartnerCard({ source, alt, style }: Props) {
  return (
    <Card style={style}>
      {/* @ts-expect-error TODO: fix prop types */}
      <StyledImage source={source} alt={alt} resizeMode="contain" />
    </Card>
  );
}
