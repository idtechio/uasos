export type DropdownProps = {
  data: { label: React.ReactNode; value: any }[];
  direction?: "to-bottom" | "to-top";
  selected: any;
  label?: string;
  multiselect?: boolean;
  placeholder?: React.ReactNode;
  itemPressFunction(value: any): void;
  searchable?: boolean;
  onBlur?(): void;
  error?: React.ReactNode;
};
