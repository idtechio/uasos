import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const DeactivateText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const DeactivateHeader = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
  text-align: center;
`;

export const DeactivateModalContentWrapper = styled.View`
  flex-direction: column;
  flex-shrink: 0;
  flex-basis: auto;
  align-items: center;
`;

export const DeactivateModalTextWrapper = styled.View`
  align-items: center;
`;

export const DeactivateModalButtonCtaWrapper = styled.View`
  margin: 28px 0;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.Text`
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.colors.positive};
`;
