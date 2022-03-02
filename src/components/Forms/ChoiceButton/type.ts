import { ReactNode } from "react";

export type ChoiceButtonProps = {
  text?: ReactNode;
  icon?: ReactNode;
  isSelected?: boolean;
  isSmall?: boolean;
  onPress: () => void;
  parentCallback?: any;
  preferenceId?: string;
  radioButton?: boolean;
  userClick?: boolean;
  isVertical?: boolean;
  error?: boolean;
};
