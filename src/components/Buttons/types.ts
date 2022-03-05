import { NativeTouchEvent } from "react-native";

export type ButtonProps = {
  style?: Record<string, unknown>;
  anchor: React.ReactNode;
  onPress?: any;
  chevronVisible?: boolean;
  chevronUpsideDown?: boolean;
  colorOposite?: boolean;

  // next-link params for routing
  onMouseEnter?: (event: NativeTouchEvent) => void;
  onClick?: (event: NativeTouchEvent) => void;
  href?: string;
};
