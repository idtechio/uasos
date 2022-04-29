import styled, { css } from "styled-components/native";

interface ContainerProps {
  error: boolean;
}

export const Container = styled.Pressable<ContainerProps>(
  ({ error }) => css`
    display: flex;
    align-items: center;
    flex-direction: row;
    position: relative;
    height: 48px;
    border-radius: 4px;
    border: ${error ? "rgb(216, 0, 12)" : "1px solid rgba(28, 27, 37, 0.3)"};
    z-index: 1000;
  `
);

export const Input = styled.TextInput`
  outline: 0px;
  border: 0px;
  height: 100%;
  width: 100%;
  flex: 1;
  padding: 0px 30px 0px 15px;
  font-size: 16px;

  &:focus-visible {
    outline: 0px;
    border: 0px;
  }

  &:focus {
    outline: 0px;
    border: 0px;
  }
`;

export const List = styled.View(
  () => css`
    position: absolute;
    background-color: #fff;
    z-index: 1000;
    border: 1px solid rgba(28, 27, 37, 0.3);
    top: 48px;
    width: 100%;
  `
);

export const Separator = styled.View`
  height: 1px 
  background-color: rgba(28, 27, 37, 0.3)
`;
