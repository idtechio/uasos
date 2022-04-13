/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { ImageWrapper, StyledImage, Spinner } from "./style";

interface ImageThumbnailInterface {
  url: string;
}

const ImageThumbnail = ({ url }: ImageThumbnailInterface) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoadHandler = () => {
    setIsLoaded(true);
  };

  return (
    <ImageWrapper>
      <StyledImage
        onLoadEnd={onLoadHandler}
        accessibilityLabel="Announcement image"
        source={{ uri: url }}
      />
      {!isLoaded && <Spinner size="large" />}
    </ImageWrapper>
  );
};

export default ImageThumbnail;
