import { Button, ButtonAnchor } from "./style";
import type { ButtonProps } from "../types";

const ButtonCta = ({ anchor, onPress }: ButtonProps) => {
  return (
    <Button>
      <ButtonAnchor onPress={onPress}>{anchor}</ButtonAnchor>
    </Button>
  );
};

export default ButtonCta;
