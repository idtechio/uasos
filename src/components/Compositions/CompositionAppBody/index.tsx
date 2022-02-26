import type { AppBodyProps } from "./types";
import { AppBodyWraper } from "./style";

const CompositionAppBody = ({ children }: AppBodyProps) => {
  return <AppBodyWraper>{children}</AppBodyWraper>;
};

export default CompositionAppBody;
