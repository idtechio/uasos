import { ReactNode } from "react";

export type InputProps<T = string> = {
  placeholder: string;
  onChange?: (value: T) => void;
  onBlur?: () => void;
  value?: T;
  error?: unknown;
  type?: string;
  extra?: ReactNode;
  labelsBackgroundColor?: string;
  secureTextEntry?: boolean;
};
