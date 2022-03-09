export type InputProps<T = string> = {
  label: string;
  onChange?: (value: T | undefined) => void;
  value?: T;
  error?: unknown;
};
