import type { InputControlProps } from "./types";
import { InputWraper } from "./style";

const InputControl = ({ children, zIndex }: InputControlProps) => {
  const style = zIndex ? { zIndex } : {};

  return <InputWraper style={{ ...style }}>{children}</InputWraper>;
};

export default InputControl;
