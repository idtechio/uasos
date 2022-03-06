import { Button, Text } from "./style";
import type { ButtonProps } from "../types";
import { useCallback } from "react";

const ButtonCta = ({
  style,
  anchor,
  onPress,
  colorOposite = false,
  onClick,
}: ButtonProps) => {
  const handlePress = useCallback(
    (event) => {
      onClick?.(event);
      onPress?.(event);
    },
    [onClick, onPress]
  );

  return (
    <Button style={style} onPress={handlePress} colorOposite={colorOposite}>
      {typeof anchor === "string" ? (
        <Text colorOposite={colorOposite}>{anchor}</Text>
      ) : (
        anchor
      )}
    </Button>
  );
};

export default ButtonCta;
