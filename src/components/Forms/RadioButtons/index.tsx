import type { RadioButtonsProps } from "./types";
import { Buttons } from "./style";
import ChoiceButton from "../ChoiceButton";

const RadioButtons = ({ radios }: RadioButtonsProps) => {
  return (
    <Buttons>
      {radios.map((radio) => {
        return <ChoiceButton key={radio.id} text={radio.text} isSmall />;
      })}
    </Buttons>
  );
};

export default RadioButtons;
