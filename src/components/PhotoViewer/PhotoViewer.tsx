import { useState, useEffect } from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import styled from "styled-components/native";
import { CenterBox, Curtain } from "./style";

const { width: windowWidth } = Dimensions.get("window");

/*
https://stackoverflow.com/questions/45881340/react-native-print-full-image-in-a-scrollview
https://blog.logicwind.com/carousel-using-react-native-scrollview/
https://dev.to/reime005/image-scroll-zoom-in-react-native-29f7
*/

type PhotoViewerProps = {
  images: string[];
  opened: boolean;
  onCloseRequest: () => void;
};

export const PhotoViewer = ({
  images,
  opened,
  onCloseRequest,
}: PhotoViewerProps) => {
  if (!opened) {
    return <></>;
  }
  return (
    <Modal animationType="slide" style={{}} transparent={true} visible={opened}>
      <TouchableWithoutFeedback onPress={onCloseRequest}>
        <CenterBox>
          <Curtain onClick={() => onCloseRequest()} />
          <Carousel images={images} />
          {/* <Image
            source={{ uri: images[photoIndex] }}
            style={{ width: "95%", height: "95%" }}
            resizeMode="contain"
          /> */}
          {/* <View
            style={{
              borderColor: "red",
              borderStyle: "solid",
              borderWidth: "1px",
              width: "100%",
              height: "5%",
            }}
          >
            sssss
          </View> */}
        </CenterBox>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const CarouselContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
`;
const NavigatorContainer = styled.View`
  height: 80px;
  background-color: white;
`;
const PhotoScroll = styled.ScrollView`
  display: flex;
  flex: 1;
  /* height: 100%;
  width: 100%;
  div {
    height: 100%;
    width: 300px;
  } */
`;

const PhotosContainer = styled.View`
  height: 100%;
  width: ${() => windowWidth}px;
  display: flex;
  flex-direction: row;
  color: pink;
  border: 1px solid black;
`;
const PhotoFrame = styled.View`
  height: 100%;
  width: 100%;
  background-color: blue;
`;

const Photo = styled.Image`
  /* position: relative; */
  /* width: 100%;
  height: undefined; */
`;

const Carousel = ({ images }: { images: string[] }) => {
  if (images.length === 0) {
    return <></>;
  }
  return (
    <CarouselContainer>
      <PhotoScroll
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        // contentContainerStyle={{
        //   backgroundColor: "red",
        //   width: "100%",
        //   height: "100%",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        {/* <PhotosContainer> */}
        {images.map((uri, i) => (
          // <PhotoFrame>
          <FullWidthPicture key={i} uri={uri} />
          // </PhotoFrame>
        ))}
        {/* <PhotoFrame style={{ height: 300 }}>1</PhotoFrame>
          <PhotoFrame style={{ height: 300 }}>2</PhotoFrame>
          <PhotoFrame style={{ height: 300 }}>3</PhotoFrame> */}
        {/* </PhotosContainer> */}
      </PhotoScroll>
      <NavigatorContainer>navigator</NavigatorContainer>
    </CarouselContainer>
  );
};

const FullWidthPicture = ({ uri }: { uri: string }) => {
  const [imageWidth, setImageWidth] = useState<number | undefined>();
  const [imageHeight, setImageHeight] = useState<number | undefined>();
  const [ratio, setRatio] = useState(1);
  useEffect(() => {
    if (uri) {
      Image.getSize(uri, (width, height) => {
        // console.log(
        //   "width, height,ratio",
        //   width,
        //   height,
        //   width / height,
        //   " - screen width->",
        //   width
        // );
        setRatio(width / height);
        setImageWidth(width);
        setImageHeight(height);
      });
    }
  }, [uri]);

  const width = "100%";
  const height = undefined;

  // const width = ratio <= 0 ? "100%" : undefined;
  // const height = ratio > 0 ? "100%" : undefined;

  // const width = undefined; //imageWidth ? Math.min(imageWidth, windowWidth) : windowWidth;
  // const height = "100%"; //width / ratio;
  console.log(
    "imageWidth",
    imageWidth,
    "imageHeight",
    imageHeight,
    "windowWidth",
    windowWidth,
    "ratio",
    ratio,
    "width",
    width,
    "height",
    height
  );
  return (
    <Photo
      style={{ width, height, aspectRatio: ratio }}
      resizeMode="contain"
      source={{ uri }}
    />
  );
};

// const PhotoBox = styled.View`;
//   background: #ffffff;
//   padding: 12px;
//   border: 1px solid #eeeeee;
//   border-radius: 10px;
//   height
// `;
