import { FlattenSimpleInterpolation } from "styled-components";

export type CheckboxFieldProps = {
  text: string;
  onChange: () => void;
  error?: boolean;
  value?: boolean;
  textStyle?: FlattenSimpleInterpolation;
  wrapperStyle?: FlattenSimpleInterpolation;
};
