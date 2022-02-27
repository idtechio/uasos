import type { RowProps } from "./types";
import { Row } from "./style";

export const CompositionRow = ({ children, spacing }: RowProps) => {
  return <Row spacing={spacing}>{children}</Row>;
};

export default Row;
