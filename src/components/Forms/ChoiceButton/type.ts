import { ReactNode } from "react";

export type ChoiceButtonProps = {
  text?: ReactNode;
  icon?: ReactNode;
  isSelected?: boolean;
  isSmall?: boolean;
  onPress: () => void;
  isVertical?: boolean;
  error?: boolean;
};
