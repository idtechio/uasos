export type DropdownProps = {
  data: any[];
  direction?: "to-bottom" | "to-top";
  label?: string;
  multiselect?: boolean;
  itemPressFunction(): void;
  searchable?: boolean;
};
