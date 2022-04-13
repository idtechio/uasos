/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { ImageWrapper, StyledImage, Spinner, Placeholder } from "./style";

interface ImageThumbnailInterface {
  url?: string;
  size?: string | number;
  margin?: string;
}

const ImageThumbnail = ({ url, size, margin }: ImageThumbnailInterface) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoadHandler = () => {
    setIsLoaded(true);
  };

  return (
    <ImageWrapper size={size} margin={margin}>
      {url ? (
        <>
          {!isLoaded && <Spinner size="large" />}
          <StyledImage
            size={size}
            onLoadEnd={onLoadHandler}
            accessibilityLabel="Announcement image"
            source={{ uri: url }}
          />
        </>
      ) : (
        <Placeholder />
      )}
    </ImageWrapper>
  );
};

export default ImageThumbnail;
