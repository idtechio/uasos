import { StyleSheet } from "react-native";
import ImageThumbnail from "../SupportSection/ImageThumbnail";
import { ImageContainer, PhotoWrapper } from "./style";

interface PhotoItemInterface {
  id: string;
  photo: string;
}

interface PhotosFieldPropsInterface {
  photos: PhotoItemInterface[];
}

const PhotosField = ({ photos }: PhotosFieldPropsInterface) => {
  return (
    <PhotoWrapper contentContainerStyle={styles.container} horizontal>
      {photos.map(({ id, photo }) => (
        <ImageContainer key={id} onPress={() => {}}>
          <ImageThumbnail url={photo} size={"85px"} margin={"auto"} />
        </ImageContainer>
      ))}
    </PhotoWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
  },
});

export default PhotosField;
