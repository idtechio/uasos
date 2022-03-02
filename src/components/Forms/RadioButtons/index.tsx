import type { RadioButtonsProps } from "./types";
import { Buttons } from "./style";

const RadioButtons = ({ children }: RadioButtonsProps) => {
  return <Buttons>{children}</Buttons>;
};

export default RadioButtons;
