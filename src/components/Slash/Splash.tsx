import { ViewStyle } from "react-native";

import styled from "styled-components/native";

const SPLASH = {
  blue: "/assets/splash_blue.png",
  yellow: "/assets/splash_yellow.png",
};

const SpriteContainer = styled.View`
  width: 100%;
  aspect-ratio: 1.46;
  position: absolute;
`;

const ImageSplashBlue = styled.Image`
  width: 100%;
  aspect-ratio: 1.46;
  position: absolute;

  ${(
    // @ts-expect-error TODO: fix prop types
    { splashPosition }
  ) => splashPosition}
`;

interface Props {
  color: keyof typeof SPLASH;
  splashPosition: ViewStyle;
  style?: ViewStyle;
}

export function Splash({ color, style, splashPosition }: Props) {
  return (
    <SpriteContainer style={style}>
      <ImageSplashBlue
        // @ts-expect-error TODO: fix prop types
        source={SPLASH[color]}
        resizeMode="contain"
        splashPosition={splashPosition}
      />
    </SpriteContainer>
  );
}
