export type DropdownProps<T> = {
  data: { label: string; value: T }[];
  direction?: "to-bottom" | "to-top";
  selected: T;
  label?: string;
  multiselect?: boolean;
  placeholder?: React.ReactNode;
  itemPressFunction(value: T): void;
  searchable?: boolean;
  onBlur?(): void;
  error?: React.ReactNode;
};
