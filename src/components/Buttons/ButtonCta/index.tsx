import { Button, Text } from "./style";
import type { ButtonProps } from "../types";
import { useCallback } from "react";
import { ActivityIndicator, Pressable, View } from "react-native";

const ButtonCta = ({
  style,
  anchor,
  anchorColor,
  onPress,
  colorOpposite = false,
  onClick,
  pressable = true,
  disabled,
  isLoading,
  margin,
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
      disabled={disabled || isLoading}
      margin={margin}
    >
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : typeof anchor === "string" ? (
        <Text color={anchorColor} colorOpposite={colorOpposite}>
          {anchor}
        </Text>
      ) : (
        anchor
      )}
    </Button>
  );
};

export default ButtonCta;
