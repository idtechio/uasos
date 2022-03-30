import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-bottom: 10px;
`;

type WrapperProps = { isCentered?: boolean };
export const Wrapper = styled.View<WrapperProps>`
  display: flex;
  align-items: ${({ isCentered }) => (isCentered ? "center" : "normal")};
`;
