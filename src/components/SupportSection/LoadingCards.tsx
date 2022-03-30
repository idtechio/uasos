/* eslint-disable @next/next/no-img-element */
import {
  HeaderWrapper,
  IdContainer,
  ImageWrapper,
  OfferTitle,
  SupportCard,
  TextWrapper,
} from "./style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
          <IdContainer>
            <Skeleton />
          </IdContainer>
          <OfferTitle>
            <Skeleton />
          </OfferTitle>
        </TextWrapper>
      </HeaderWrapper>
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      <div style={{ alignSelf: "flex-end", marginTop: 10 }}>
        <Skeleton style={{ width: 100 }} />
      </div>
    </SupportCard>
  );
};
