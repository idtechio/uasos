import { Text, View } from "react-native";
import styled from "styled-components/native";

export const Icon = styled.View`
  height: 25px;
  width: 130px;
  background-color: #fff;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkText = styled(Text)`
  color: ${({ theme }) => theme.colors.textOnAccent};
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
`;

export const FooterWrapper = styled(View)`
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  display: flex;
  flex-direction: row;
  padding: 5px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 34px;
  justify-content: space-between;
  align-items: center;
`;
