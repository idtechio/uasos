import { Button, Text } from "./style";
import type { ButtonProps } from "../types";

const ButtonCta = ({
  style,
  anchor,
  onPress,
  colorOposite = false,
}: ButtonProps) => {
  return (
    <Button style={style} onPress={onPress} colorOposite={colorOposite}>
      {typeof anchor === "string" ? (
        <Text colorOposite={colorOposite}>{anchor}</Text>
      ) : (
        anchor
      )}
    </Button>
  );
};

export default ButtonCta;
