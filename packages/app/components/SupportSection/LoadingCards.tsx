import React from "react";
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
import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

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

const SkeletonBottom = styled.View<{ theme: Theme }>`
  margin-left: auto;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        amrgin-top: 10px;
      `,
      native: css`
        margin-top: ${theme.scale(10)}px;
      `,
    })}
`;
