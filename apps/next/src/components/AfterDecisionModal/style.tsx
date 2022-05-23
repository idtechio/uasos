import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const DecisionText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const DecisionHeader = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
  text-align: center;
`;

export const DecisionModalContentWrapper = styled.View`
  flex-direction: column;
  flex-shrink: 0;
  flex-basis: auto;
  align-items: center;
`;

export const DecisionModalTextWrapper = styled.View`
  align-items: center;
`;

export const DecisionModalButtonCtaWrapper = styled.View`
  margin: 28px 0;
  justify-content: center;
  align-items: center;
`;

export const AcceptedText = styled.Text`
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.colors.positive};
`;

export const CancelledText = styled.Text`
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.colors.alert};
`;
