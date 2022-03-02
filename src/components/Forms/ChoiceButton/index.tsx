import React from "react";
import type { ChoiceButtonProps } from "./type";
import { Button, Text, Icon } from "./style";
import { TouchableOpacity } from "react-native";

const ChoiceButton = ({
  text,
  icon,
  isSmall = false,
  isSelected,
  onPress,
  isVertical = false,
}: ChoiceButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Button isSelected={isSelected} isSmall={isSmall} isVertical={isVertical}>
        {icon ? <Icon isVertical={isVertical}>{icon}</Icon> : null}
        {text ? <Text>{text}</Text> : null}
      </Button>
    </TouchableOpacity>
  );
};

export default ChoiceButton;
