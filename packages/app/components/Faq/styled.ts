import styled from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";
import { colors } from "../../style/landingPageStyle";

export const Content = styled.View`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding-bottom: ${({ theme }: { theme: Theme }) => theme.scale(35)}px;
  background-color: #fff;
`;

export const HeaderWrapper = styled.View`
  margin-top: ${({ theme }: { theme: Theme }) => theme.scale(35)}px;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Title = styled.Text`
  position: relative;
  display: flex;
  align-self: flex-start;
  margin-top: 0;
  margin-left:  ${({ theme }: { theme: Theme }) => theme.scale(15)}px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
`;


export const YellowHighlight = styled.View`
  position: absolute;
  top:  ${({ theme }: { theme: Theme }) => theme.scale(20)}px;
  left: 0;
  height: 15px;
  width: 30px;
  background-color: ${colors.yellow};
  z-index: -1;
`;

export const ContentWrapper = styled.View`
  display: flex;
  align-self: flex-start;
  width: 100%;
`;

export const TitleWrapper = styled.View`
  margin-top: ${({ theme }: { theme: Theme }) => theme.scale(35)}px;
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.scale(15)}px;
`;

export const TitleName = styled.Text`
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.scale(25)}px;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
`;

export const TitleQuestion = styled.Text`
  margin-bottom: ${({ theme }: { theme: Theme }) => theme.scale(25)}px;
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
`;

export const TitleContent = styled.Text`
  font-size: 20px;
  line-height: 28px;
  flexWrap: wrap;
`;
