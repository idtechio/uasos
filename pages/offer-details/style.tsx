import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Container from "../../src/components/Container";

import { Theme } from "../../src/style/theme.config";

export const BackWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-top: 18px;
`;

export const BackText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  text-align: left;
`;
