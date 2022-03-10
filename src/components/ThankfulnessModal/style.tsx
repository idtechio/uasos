import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const ThankfulnessText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
`;

export const ThankfulnessHeader = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 14px;
  margin-top: 12px;
  text-align: center;
`;

export const ThankfulnessModalContentWrapper = styled.View`
  flex-direction: column;
  flex-shrink: 0;
  flex-basis: auto;
  align-items: center;
`;

export const ThankfulnessModalTextWrapper = styled.View`
  padding: 0px 24px;
  align-items: center;
`;

export const ThankfulnessModalButtonCtaWrapper = styled.View`
  margin-top: 28px;
  justify-content: center;
  align-items: center;
`;
