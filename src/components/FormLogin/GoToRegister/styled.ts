import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.pageSection.backgroundColorAlt};
  padding: 20px 0;
`;

export const StyledText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  margin: 35px 0;

  color: ${({ theme }) => theme.colors.blue};
  width: 250px;
`;
