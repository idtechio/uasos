import { Button, Text } from "./style";
import type { ButtonProps } from "../../Buttons/types";
import React, { useCallback } from "react";
import { ActivityIndicator, TextStyle } from "react-native";
import { ButtonColor, ButtonVariant } from "./types";

// TODO: apply these changes in src/components/Buttons/ButtonCta
const ButtonCta = ({
  style,
  anchor,
  onPress,
  colorOpposite = false,
  onClick,
  variant = "contained",
  disabled = false,
  isLoading = false,
}: ButtonProps & {
  disabled?: boolean;
  isLoading?: boolean;
  textStyle?: TextStyle;
  variant?: ButtonVariant;
  color?: ButtonColor;
}) => {
  const handlePress = useCallback(
    (event) => {
      onClick?.(event);
      onPress?.(event);
    },
    [onClick, onPress]
  );

  return (
    <Button
      variant={variant}
      style={style}
      onPress={handlePress}
      colorOpposite={colorOpposite}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : typeof anchor === "string" ? (
        <Text variant={variant} colorOpposite={colorOpposite}>
          {anchor}
        </Text>
      ) : (
        anchor
      )}
    </Button>
  );
};

export default ButtonCta;
