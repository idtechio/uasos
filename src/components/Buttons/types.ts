import { BaseSyntheticEvent } from "react";
import { NativeTouchEvent } from "react-native";

export type ButtonProps = {
  style?: Record<string, unknown>;
  anchor: React.ReactNode;
  onPress?: (e?: BaseSyntheticEvent) => void;
  chevronVisible?: boolean;
  chevronUpsideDown?: boolean;
  colorOpposite?: boolean;

  // next-link params for routing
  onMouseEnter?: (event: NativeTouchEvent) => void;
  onClick?: (event: NativeTouchEvent) => void;
  href?: string;
  pressable?: boolean;
};
