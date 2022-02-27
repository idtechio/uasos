import type { LenguageText } from "../../../helpers/lenguageTextSwitcher";

export type ChoiceButtonProps = {
  text?: LenguageText;
  icon?: React.ReactNode;
  isSmall?: boolean;

  radioButton?: boolean;
  parentCallback?: any;
  userClick?: boolean;
};
