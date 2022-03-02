import React from "react";
import type { ChoiceButtonProps } from "./type";
import { Button, Text, Icon } from "./style";

const ChoiceButton = ({
  text,
  icon,
  isSmall = false,
  isChoice,
}: ChoiceButtonProps) => {
  return (
    <Button isChoice={isChoice} isSmall={isSmall}>
      {icon ? <Icon>{icon}</Icon> : null}
      {text ? <Text>{text}</Text> : null}
    </Button>
  );
};

export default ChoiceButton;
