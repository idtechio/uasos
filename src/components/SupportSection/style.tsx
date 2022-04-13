import styled from "styled-components/native";
import Card from "../Card";
import { Theme } from "../../style/theme.config";

export const SupportCard = styled(Card)`
  margin: 12px 0px 0px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
`;

export const SupportWrapper = styled.View`
  padding: 0px 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
`;

export const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  position: relative;
`;

export const MoreButtonWrapper = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9999999;
`;

interface ImagePropsInterface {
  size?: string | number;
  margin?: string;
}

export const Placeholder = styled.View<ImagePropsInterface>`
  width: ${(props) => (props.size ? props.size : "80px")};
  height: ${(props) => (props.size ? props.size : "80px")};
  border-radius: 4px;
  background: #ececec;
`;

export const ImageWrapper = styled.View<ImagePropsInterface>`
  display: flex;
  width: ${(props) => (props.size ? props.size : "80px")};
  height: ${(props) => (props.size ? props.size : "80px")};
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

export const StyledImage = styled.Image<ImagePropsInterface>`
  width: ${(props) => (props.size ? props.size : "80px")};
  height: ${(props) => (props.size ? props.size : "80px")};
  border-radius: 4px;
  position: absolute;
`;

export const Spinner = styled.ActivityIndicator`
  margin: auto;
`;

export const TextWrapper = styled.View`
  flex: 1 1 100%;
  padding-left: 12.7px;
`;

export const OfferTitle = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: 0.5px;

  color: #003566;

  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  padding-bottom: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  padding-right: 5px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;
