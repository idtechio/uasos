import React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import styled, { css } from "styled-components/native";
import { hexToRGB } from "../../helpers/misc";
import { Theme } from "../../provider/theme/theme.config";

const ToastWrapper = styled.View<{ color: string; theme: Theme }>`
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  background-color: ${(props) => `${hexToRGB(props.color, 0.1)}`};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => `${props.color}`};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 100%;
        padding: 10px 15px 10px 10px;
      `,
      native: css`
        padding-vertical: ${theme.scale(10)}px;
        padding-left: ${theme.scale(10)}px;
        padding-right: ${theme.scale(15)}px;
      `,
    })}
`;

const TextAndIconWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  display: flex;
  flex: 1;
`;

const Label = styled.Text<{ color: string; theme: Theme }>`
  color: ${(props) => `${props.color}`};
  display: flex;
  align-items: center;
  font-weight: 700;
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-left: 10px;
      `,
      native: css`
        padding-left: ${theme.scale(10)}px;
      `,
    })}
`;

const LinkText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => `${theme.colors.blue}`};
  font-weight: 700;
  text-decoration: underline;
`;

type ToastProps = {
  color: string;
  icon?: React.ReactElement;
  label: string;
  cta?: { label?: string; onPress?: () => void };
  contaierStyle?: StyleProp<ViewStyle>;
};

const Toast = ({
  color,
  label,
  icon,
  cta,
  contaierStyle: wrapperStyle,
}: ToastProps) => {
  return (
    <ToastWrapper color={color} style={wrapperStyle}>
      <TextAndIconWrapper>
        {icon}
        <Label color={color}>{label}</Label>
      </TextAndIconWrapper>
      {cta ? (
        <Pressable onPress={cta.onPress}>
          <LinkText>{cta.label}</LinkText>
        </Pressable>
      ) : (
        <></>
      )}
    </ToastWrapper>
  );
};

export default Toast;
