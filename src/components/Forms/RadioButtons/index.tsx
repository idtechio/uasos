import type { RadioButtonsProps } from "./types";
import { Buttons } from "./style";
import ChoiceButton from "../ChoiceButton";
import { TouchableOpacity } from "react-native";

const RadioButtons = ({ children }: RadioButtonsProps) => {
  return <Buttons>{children}</Buttons>;
};

export default RadioButtons;
