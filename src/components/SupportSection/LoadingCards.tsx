/* eslint-disable @next/next/no-img-element */
import {
  HeaderWrapper,
  ImageWrapper,
  OfferTitle,
  SupportCard,
  TextWrapper,
} from "./style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { View } from "react-native";
import styled from "styled-components/native";

export const LoadingCards = ({
  count,
  showImage,
}: {
  count: number;
  showImage?: boolean;
}) => {
  return (
    <>
      {Array.from(Array(count).keys()).map((id) => (
        <LoadingCard key={id} showImage={showImage} />
      ))}
    </>
  );
};

const LoadingCard = ({ showImage }: { showImage?: boolean }) => {
  return (
    <SupportCard>
      <HeaderWrapper>
        {showImage === true ? (
          <ImageWrapper>
            <Skeleton height={80} />
          </ImageWrapper>
        ) : (
          <></>
        )}
        <TextWrapper>
          <OfferTitle>
            <Skeleton />
          </OfferTitle>
        </TextWrapper>
      </HeaderWrapper>
      <View>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </View>
      <SkeletonBottom>
        <Skeleton width={100} />
      </SkeletonBottom>
    </SupportCard>
  );
};

const SkeletonBottom = styled.View`
  marginleft: auto;
  margintop: 10;
`;
