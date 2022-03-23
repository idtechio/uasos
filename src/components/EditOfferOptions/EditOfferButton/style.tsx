import React, { forwardRef } from "react";
import { Pressable, PressableProps, View, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";
import AlertIcon from "../../../style/svgs/alert.svg";
import BinIcon from "../../../style/svgs/bin.svg";
import ClockIcon from "../../../style/svgs/clock.svg";
import EditIcon from "../../../style/svgs/edit.svg";
import MoreIcon from "../../../style/svgs/more.svg";

const StyledButton = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionsWrapper = styled.View`
  position: absolute;
  top: -2px;
  right: 28px;

  background: #ffffff;

  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
`;

const OptionsList = styled.View`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  position: relative;
`;

const Arrow = styled.View`
  width: 12px;
  height: 12px;
  background-color: white;
  position: absolute;
  top: 8px;
  right: -7px;
  z-index: 1000;
  transform: rotate(45deg) scaleY(0.6);

  border-style: solid;
  border-right-width: 2px;
  border-right-color: #f2f2f2;
  border-top-width: 2px;
  border-top-color: #f2f2f2;
  border-radius: 2px;
`;

type ItemButtonProps = { withBottomBorder: boolean };
const ItemButton = styled.Pressable<ItemButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 21px 10px 14px;

  ${({ withBottomBorder }) =>
    withBottomBorder &&
    css`
      border-style: solid;
      border-bottom-color: #f2f2f2;
      border-bottom-width: 1px;
    `}
`;

const IconContainer = styled.View`
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TextColor = "primary" | "secondary";
const TextContainer = styled.Text<{ textColor: TextColor }>`
  flex: 1;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: ${({ textColor }) =>
    textColor === "secondary" ? "#F44336" : "#003566"};
`;

export const CardModalStyle: ViewStyle = {
  padding: 0,
  minWidth: "initial",
  width: "auto",
  borderColor: "transparent",
  backgroundColor: "transparent",
};

export const ButtonContainer = styled.View`
  display: flex;
  position: relative;
  z-index: 2;
`;

export const TriggerButton = (props: Omit<PressableProps, "children">) => (
  <StyledButton as={Pressable} {...props}>
    <MoreIcon />
  </StyledButton>
);

export const ListButton = ({
  children,
  icon,
  textColor = "primary",
  withBottomBorder = false,
  ...props
}: PressableProps & {
  icon: JSX.Element;
  textColor?: TextColor;
  withBottomBorder?: boolean;
}) => (
  <ItemButton as={Pressable} withBottomBorder={withBottomBorder} {...props}>
    <IconContainer>{icon}</IconContainer>
    <TextContainer textColor={textColor}>{children}</TextContainer>
  </ItemButton>
);

type OptionsProps = { children: JSX.Element | JSX.Element[] };
export const Options = forwardRef<View, OptionsProps>(function Inner(
  props,
  _ref
) {
  return (
    <OptionsWrapper as={View} ref={_ref}>
      <OptionsList>
        <Arrow />
        {props.children}
      </OptionsList>
    </OptionsWrapper>
  );
});

export const Icons = { AlertIcon, BinIcon, ClockIcon, EditIcon };
