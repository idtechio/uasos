import type { ChoiceButtonProps } from "./type";
import { Button, Text, Icon } from "./style";
import { lenguageTextSwitcher } from "../../../helpers";
import React, { useState, useEffect } from "react";

const ChoiceButton = ({
  text,
  icon,
  isSmall = false,
  userClick = false,
}: ChoiceButtonProps) => {
  const [isChoice, setIsChoice] = useState(userClick);

  return (
    <Button
      isChoice={isChoice}
      onPress={() => {
        setIsChoice(!isChoice);
      }}
      isSmall={isSmall}
    >
      {icon ? <Icon>{icon}</Icon> : null}
      {text ? <Text>{lenguageTextSwitcher(text)}</Text> : null}
    </Button>
  );
};

export default ChoiceButton;
