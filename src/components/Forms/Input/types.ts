import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export type InputStylesProps = {
  wrapper?: ViewStyle;
  textInput?: ViewStyle;
};

export type InputProps<T = string> = {
  placeholder: string;
  onChange?: (value: T) => void;
  onBlur?: (e: unknown) => void;
  value?: T;
  error?: unknown;
  type?: string;
  extra?: ReactNode;
  labelsBackgroundColor?: string;
  secureTextEntry?: boolean;
  withoutLabel?: boolean;
  styles?: InputStylesProps;
};
