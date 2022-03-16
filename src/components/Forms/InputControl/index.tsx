import type { InputControlProps } from "./types";
import { InputWraper } from "./style";

const InputControl = ({ children, zIndex, styles }: InputControlProps) => {
  return (
    <InputWraper zIndex={zIndex} style={styles?.wrapper}>
      {children}
    </InputWraper>
  );
};

export default InputControl;
