import { ReactNode } from "react";

export type InputStylesProps = {
  wrapper?: {
    height: string;
  };
  textInput?: {
    paddingTop: string;
    paddingBottom: string;
    height: string;
  };
};

export type InputProps<T = string> = {
  readonly?: boolean;
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
