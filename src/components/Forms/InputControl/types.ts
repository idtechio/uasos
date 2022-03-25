import { ViewStyle } from "react-native";

export type InputControlStylesProps = {
  wrapper?: ViewStyle;
};

export type InputControlProps = {
  children: React.ReactNode;
  zIndex?: number;
  styles?: InputControlStylesProps;
};
