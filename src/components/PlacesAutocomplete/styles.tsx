import styled, { css } from "styled-components/native";

interface IconWrapperProps {
  showOptions: boolean;
}

export const IconWrapper = styled.Pressable<IconWrapperProps>(
  ({ showOptions }) =>
    css`
      position: absolute;
      right: 15;
      transform: ${showOptions ? `rotate(180deg)` : ``};
    `
);

export const Container = styled.Pressable`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  height: 48px;
  border: 1px solid rgba(28, 27, 37, 0.3);
  z-index: 1000;
`;

export const Input = styled.TextInput`
  outline: 0px;
  border: 0px;
  height: 100%;
  width: 100%;
  flex: 1;
  padding: 0px 30px 0px 15px;

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
    bottom: -42px;
    left: 0px;
    right: 0px;
    border: 1px solid rgba(28, 27, 37, 0.3);
    background-color: #fff;
    z-index: 1000;
  `
);

export const Item = styled.Pressable(
  () => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    padding: 10px;
  `
);
