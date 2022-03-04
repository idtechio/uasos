import styled from "styled-components/native";

export const Button = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  border-radius: 4px;
  padding: 13px 15px 13px 58px;
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: row;

  &:hover {
    opacity: 0.7;
  }
`;

export const Text = styled.Text`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textOnAccent};
  width: 100%;
  display: flex;
`;
