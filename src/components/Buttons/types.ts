import { BaseSyntheticEvent } from "react";
import { NativeTouchEvent } from "react-native";

export type ButtonProps = {
  style?: Record<string, unknown>;
  anchor?: React.ReactNode;
  anchorColor?: string;
  onPress?: (e?: BaseSyntheticEvent) => void;
  chevronVisible?: boolean;
  chevronUpsideDown?: boolean;
  colorOpposite?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  margin?: string;

  // next-link params for routing
  onMouseEnter?: (event: NativeTouchEvent) => void;
  onClick?: (event: NativeTouchEvent) => void;
  href?: string;
  pressable?: boolean;
};
