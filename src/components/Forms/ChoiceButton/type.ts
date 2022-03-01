import type { LenguageText } from "../../../helpers/lenguageTextSwitcher";

export type ChoiceButtonProps = {
  text?: LenguageText;
  icon?: React.ReactNode;
  isSmall?: boolean;
  preferenceId?: string;
  isChoice?: boolean;

  radioButton?: boolean;
  parentCallback?: any;
  userClick?: boolean;
};
