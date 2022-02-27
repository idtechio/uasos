import type { InputControlProps } from "./types";
import { InputWraper } from "./style";

const InputControl = ({ children }: InputControlProps) => {
  return <InputWraper>{children}</InputWraper>;
};

export default InputControl;
