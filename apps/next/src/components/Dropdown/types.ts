import { TextStyle, ViewStyle } from "react-native";

export type DropdownStylesProps = {
  select?: ViewStyle;
  item?: ViewStyle;
  itemSelected?: ViewStyle;
  itemTextStyle?: TextStyle;
  wrapper?: ViewStyle;
};

export type DropdownProps<T> = {
  data: { label: string | JSX.Element; value: T }[];
  direction?: "to-bottom" | "to-top";
  selected: T;
  label?: string;
  multiselect?: boolean;
  placeholder?: React.ReactNode;
  itemPressFunction(value: T): void;
  searchable?: boolean;
  onBlur?(): void;
  error?: React.ReactNode;
  /* TODO: Styles should be changed in a certain styled-component in accordance with new design  */
  styles?: DropdownStylesProps;
  itemListAutoHeight?: boolean;
  highlightSelectedItem?: boolean; // Use this prop only if multiselect === false
};
