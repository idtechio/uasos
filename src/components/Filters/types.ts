type FilterOption<T> = {
  label: string;
  value: T;
};

export type FiltersProps<T> = {
  filters: {
    name: string;
    onSubmit: (value: T | null) => void;
    options: FilterOption<T>[];
    value: T;
  }[];
};
