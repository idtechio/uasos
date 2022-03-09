import { Button, Text } from "./style";
import type { ButtonProps } from "../types";
import { useCallback } from "react";

const ButtonCta = ({
  style,
  anchor,
  onPress,
  colorOpposite = false,
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
    <Button style={style} onPress={handlePress} colorOpposite={colorOpposite}>
      {typeof anchor === "string" ? (
        <Text colorOpposite={colorOpposite}>{anchor}</Text>
      ) : (
        anchor
      )}
    </Button>
  );
};

export default ButtonCta;
