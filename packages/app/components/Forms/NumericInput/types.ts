export type InputProps<T = string> = {
  onChange?: (value: T) => void;
  value?: T;
  error?: unknown;
  min?: number;
  max?: number;
};
