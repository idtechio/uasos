import type { RadioButtonsProps } from "./types";
import { Buttons } from "./style";
import ChoiceButton from "../ChoiceButton";

const RadioButtons = ({ children }: RadioButtonsProps) => {
  return <Buttons>{children}</Buttons>;
};

export default RadioButtons;
