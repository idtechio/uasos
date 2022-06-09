import React, { forwardRef } from "react";
import { Pressable, PressableProps, View, ViewStyle } from "react-native";

import { Theme } from "app/provider/theme/theme.config";

import styled, { css } from "styled-components/native";
import AlertIcon from "../../../style/svgs/alert.svg";
import BinIcon from "../../../style/svgs/bin.svg";
import ClockIcon from "../../../style/svgs/clock.svg";
import EditIcon from "../../../style/svgs/edit.svg";
import MoreIcon from "../../../style/svgs/more.svg";

interface CommonTheme {
  theme: Theme;
}

const StyledButton = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionsWrapper = styled.View<CommonTheme>(
  ({ theme }) => css`
    position: absolute;
    z-index: 999;
    background: #ffffff;
    border: 1px solid #f2f2f2;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

    ${theme.styleFor({
      web: css`
        top: -2px;
        right: 28px;
        border-radius: 3px;
        box-sizing: border-box;
      `,
      native: css`
        top: ${theme.scale(-2)}px;
        right: ${theme.scale(28)}px;
        border-radius: ${theme.scale(3)}px;
        width: ${theme.scale(172)}px;
      `,
    })}
  `
);

const OptionsList = styled.View`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  position: relative;
`;

const Arrow = styled.View<CommonTheme>(
  ({ theme }) => css`
    background-color: white;
    position: absolute;
    transform: rotate(45deg) scaleY(0.6);
    border-style: solid;
    border-right-color: #f2f2f2;
    border-top-color: #f2f2f2;
    z-index: 1000;

    ${theme.styleFor({
      web: css`
        top: 8px;
        right: -7px;
        width: 12px;
        height: 12px;
        border-right-width: 2px;
        border-top-width: 2px;
        border-radius: 2px;
      `,
      native: css`
        top: ${theme.scale(8)}px;
        right: ${theme.scale(-7)}px;
        width: ${theme.scale(12)}px;
        height: ${theme.scale(12)}px;
        border-right-width: ${theme.scale(2)}px;
        border-top-width: ${theme.scale(2)}px;
        border-radius: ${theme.scale(2)}px;
      `,
    })}
  `
);

type ItemButtonProps = { withBottomBorder: boolean; theme: Theme };
const ItemButton = styled.Pressable<ItemButtonProps>(
  ({ theme, withBottomBorder }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    ${withBottomBorder &&
    css`
      border-style: solid;
      border-bottom-color: #f2f2f2;
      border-bottom-width: 1px;
    `}

    ${theme.styleFor({
      web: css`
        padding: 10px 21px 10px 14px;
      `,
      native: css`
        padding: ${theme.scale(10)}px ${theme.scale(21)}px ${theme.scale(10)}px
          ${theme.scale(14)}px;
      `,
    })}
  `
);

const IconContainer = styled.View<CommonTheme>(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    ${theme.styleFor({
      web: css`
        padding-right: 10px;
      `,
      native: css`
        padding-right: ${theme.scale(10)}px;
      `,
    })}
  `
);

type TextColor = "primary" | "secondary";
const TextContainer = styled.Text<{ textColor: TextColor }>`
  flex: 1;
  font-family: "RobotoRegular";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  /* white-space: nowrap; */
  color: ${({ textColor, theme }) =>
    textColor === "secondary"
      ? (theme as Theme).colors.figmaPalette.alert
      : (theme as Theme).colors.figmaPalette.fontMain};
`;

export const CardModalStyle: ViewStyle = {
  padding: 0,
  minWidth: "initial",
  width: "auto",
  borderColor: "transparent",
  backgroundColor: "transparent",
  overflow: "visible",
};

export const ButtonContainer = styled.View`
  display: flex;
  position: relative;
  z-index: 9999;
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
