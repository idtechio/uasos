import { ReactNode } from "react";

export type ChoiceButtonProps = {
  text?: ReactNode;
  icon?: ReactNode;
  isSmall?: boolean;
  preferenceId?: string;
  isChoice?: boolean;
  radioButton?: boolean;
  parentCallback?: any;
  userClick?: boolean;
};
