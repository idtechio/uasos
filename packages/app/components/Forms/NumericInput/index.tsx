import React from "react";
import type { InputProps } from "./types";
import { Controls, Icon, InputWraper, TextInput } from "./style";

import MinusIcon from "../../../style/svgs/minus.svg";
import PlusIcon from "../../../style/svgs/plus.svg";

const NumericInput = ({
  onChange,
  value,
  error,
  max,
  min = 0,
}: InputProps<number>) => {
  const handleMinusPress = () => {
    const newValue = Number(value) - 1;
    if (min === undefined || min <= newValue) {
      onChange?.(newValue);
    }
  };

  const handlePlusPress = () => {
    const newValue = Number(value) + 1;
    if (max === undefined || max >= newValue) {
      onChange?.(newValue);
    }
  };

  return (
    <InputWraper>
      <TextInput value={value} error={error} />
      <Controls>
        <Icon onPress={handleMinusPress}>
          <MinusIcon />
        </Icon>
        <Icon onPress={handlePlusPress}>
          <PlusIcon />
        </Icon>
      </Controls>
    </InputWraper>
  );
};

export default NumericInput;
