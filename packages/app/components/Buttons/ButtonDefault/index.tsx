import React from "react";
import { Button, ButtonAnchor } from "./style";
import type { ButtonProps } from "../types";
import { TouchableOpacity } from "react-native";
import Chevron from "./Chevron";

const ButtonDefault = ({
  anchor,
  chevronVisible,
  chevronUpsideDown,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <Button>
        <ButtonAnchor>
          {anchor}
          {chevronVisible && <Chevron upsideDown={chevronUpsideDown} />}
        </ButtonAnchor>
      </Button>
    </TouchableOpacity>
  );
};

export default ButtonDefault;
