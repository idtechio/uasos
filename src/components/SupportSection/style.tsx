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
