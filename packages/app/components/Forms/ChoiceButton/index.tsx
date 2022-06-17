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
  ...props
}: ChoiceButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Button
        error={error}
        isSelected={isSelected}
        isSmall={isSmall}
        isVertical={isVertical}
        {...props}
      >
        {icon ? (
          <Icon isSelected={isSelected} isVertical={isVertical}>
            {icon}
          </Icon>
        ) : null}
        {text ? (
          <Text
            isVertical={isVertical}
            isSelected={isSelected}
            isSmall={isSmall}
          >
            {text}
          </Text>
        ) : null}
      </Button>
    </TouchableOpacity>
  );
};

export default ChoiceButton;
