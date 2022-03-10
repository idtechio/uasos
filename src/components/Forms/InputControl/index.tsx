import type { InputControlProps } from "./types";
import { InputWraper } from "./style";

const InputControl = ({ children, zIndex }: InputControlProps) => {
  return <InputWraper style={{ zIndex }}>{children}</InputWraper>;
};

export default InputControl;
