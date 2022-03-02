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
  error,
}: ChoiceButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Button
        error={error}
        isSelected={isSelected}
        isSmall={isSmall}
        isVertical={isVertical}
      >
        {icon ? (
          <Icon isSelected={isSelected} isVertical={isVertical}>
            {icon}
          </Icon>
        ) : null}
        {text ? (
          <Text isVertical={isVertical} isSelected={isSelected}>
            {text}
          </Text>
        ) : null}
      </Button>
    </TouchableOpacity>
  );
};

export default ChoiceButton;
