import {
  RadioButtonContainer,
  RadioButtonOuterCircle,
  RadioButtonInnerCircle,
  RadioButtonLabel,
} from "./style";

interface RadioButtonPropsInterface {
  isSelected?: boolean;
  radius?: number;
  borderWidth?: number;
  color?: string;
  labelText?: string;
  onPress: () => void;
}

const RadioButton = ({
  isSelected,
  radius,
  color,
  borderWidth,
  labelText,
  onPress,
}: RadioButtonPropsInterface) => {
  return (
    <RadioButtonContainer onPress={onPress}>
      <RadioButtonOuterCircle
        radius={radius}
        color={color}
        borderWidth={borderWidth}
      >
        {isSelected && <RadioButtonInnerCircle radius={radius} color={color} />}
      </RadioButtonOuterCircle>
      <RadioButtonLabel>{labelText}</RadioButtonLabel>
    </RadioButtonContainer>
  );
};

export default RadioButton;
