import { Button, ButtonAnchor } from "./style";
import type { ButtonProps } from "../types";
import { TouchableOpacity } from "react-native";

const ButtonDefault = ({ anchor, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <Button>
        <ButtonAnchor>{anchor}</ButtonAnchor>
      </Button>
    </TouchableOpacity>
  );
};

export default ButtonDefault;
