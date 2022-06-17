import React from "react";
import {
  HeaderWrapper,
  ImageWrapper,
  OfferTitle,
  SupportCard,
  TextWrapper,
} from "./style";
import SkeletonLoader from "expo-skeleton-loader";
import { View } from "react-native";
import styled, { css } from "styled-components/native";
import { scale } from "app/utils/scale";
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
            <SkeletonLoader>
              <SkeletonLoader.Container>
                <SkeletonLoader.Item
                  style={{
                    height: scale(80),
                  }}
                />
              </SkeletonLoader.Container>
            </SkeletonLoader>
          </ImageWrapper>
        ) : (
          <></>
        )}
        <TextWrapper>
          <OfferTitle>
            <SkeletonLoader>
              <SkeletonLoader.Container>
                <SkeletonLoader.Item
                  style={{
                    width: scale(100),
                    height: scale(24),
                  }}
                />
              </SkeletonLoader.Container>
            </SkeletonLoader>
          </OfferTitle>
        </TextWrapper>
      </HeaderWrapper>
      <View>
        <SkeletonLoader>
          <SkeletonLoader.Container style={[{ flex: 1, flexDirection: "row" }]}>
            <SkeletonLoader.Item
              style={{
                width: scale(100),
                height: scale(24),
              }}
            />
            <SkeletonLoader.Item
              style={{
                width: scale(100),
                height: scale(24),
              }}
            />
            <SkeletonLoader.Item
              style={{
                width: scale(100),
                height: scale(24),
              }}
            />
          </SkeletonLoader.Container>
        </SkeletonLoader>
      </View>
      <SkeletonBottom>
        <SkeletonLoader>
          <SkeletonLoader.Container>
            <SkeletonLoader.Item
              style={{
                width: scale(100),
                height: scale(24),
              }}
            />
          </SkeletonLoader.Container>
        </SkeletonLoader>
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
