import { Button } from "./style";
import type { ButtonProps } from "../types";

const ButtonCta = ({ style, anchor, onPress }: ButtonProps) => {
  return (
    <Button style={style} onPress={onPress}>
      {anchor}
    </Button>
  );
};

export default ButtonCta;
