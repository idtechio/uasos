import type { RowProps } from "./types";
import { Row } from "./style";

export const CompositionRow = ({ children }: RowProps) => {
  return <Row>{children}</Row>;
};

export default Row;
