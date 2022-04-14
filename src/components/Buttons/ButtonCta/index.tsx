import { Button, Text } from "./style";
import type { ButtonProps } from "../types";
import { useCallback } from "react";
import { Pressable, View } from "react-native";

const ButtonCta = ({
  style,
  anchor,
  onPress,
  colorOpposite = false,
  onClick,
  pressable = true,
  disabled,
}: ButtonProps) => {
  const handlePress = useCallback(
    (event) => {
      onClick?.(event);
      onPress?.(event);
    },
    [onClick, onPress]
  );

  return (
    <Button
      as={pressable ? Pressable : View}
      style={style}
      onPress={handlePress}
      colorOpposite={colorOpposite}
      disabled={disabled}
    >
      {typeof anchor === "string" ? (
        <Text colorOpposite={colorOpposite}>{anchor}</Text>
      ) : (
        anchor
      )}
    </Button>
  );
};

export default ButtonCta;
