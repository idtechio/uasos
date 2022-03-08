import { ReactNode } from "react";

export type InputProps = {
  placeholder: string;
  onChange?: any;
  onBlur?: any;
  value?: any;
  error?: any;
  type?: string;
  extra?: ReactNode;
  labelsBackgroundColor?: string;
  secureTextEntry?: boolean;
};
