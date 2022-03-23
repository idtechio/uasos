import { Button, Text } from "./style";
import type { ButtonProps } from "../../Buttons/types";
import { useCallback } from "react";
import { TextStyle } from "react-native";
import { ButtonColor, ButtonVariant } from "./types";

// TODO: apply these changes in src/components/Buttons/ButtonCta
const ButtonCta = ({
  style,
  anchor,
  onPress,
  colorOpposite = false,
  onClick,
  variant = "contained",
  color = "primary",
}: ButtonProps & {
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
    >
      {typeof anchor === "string" ? (
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
