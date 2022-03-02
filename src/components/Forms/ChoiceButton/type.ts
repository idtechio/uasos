import { ReactNode } from "react";

export type ChoiceButtonProps = {
  text?: ReactNode;
  icon?: ReactNode;
  isSmall?: boolean;
  isChoice?: boolean;
  radioButton?: boolean;
  parentCallback?: any;
  userClick?: boolean;
};
