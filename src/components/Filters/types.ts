type FilterOption = {
  label: string;
  value: string;
};

export type FiltersProps = {
  filters: Array<{
    name: string;
    onSubmit: (e: any) => void;
    options: Array<FilterOption>;
    value: any;
  }>;
};
