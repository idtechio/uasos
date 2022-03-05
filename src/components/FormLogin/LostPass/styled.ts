import styled from "styled-components/native";

export const LostPassWrapper = styled.View`
  margin-top: -30px;
  margin-bottom: 20px;
`;

export const StyledText = styled.Text`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;

  color: ${({ theme }) => theme.colors.blue};
`;

export const StyledLink = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: underline;
`;
