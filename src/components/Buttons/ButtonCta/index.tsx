import { Button, Text } from "./style";
import type { ButtonProps } from "../types";

const ButtonCta = ({ style, anchor, onPress }: ButtonProps) => {
  return (
    <Button style={style} onPress={onPress}>
      <Text>{anchor}</Text>
    </Button>
  );
};

export default ButtonCta;
