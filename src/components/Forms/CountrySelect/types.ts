import { FieldError } from "react-hook-form";

export type CountrySelectProps = {
  label?: string;
  placeholder?: string;
  error?: FieldError;
  multiSelect?: boolean;
  errorMsg?: string;
  onChange?: (selected: string | string[]) => void;
  zIndex?: number;
  data?: CountryDropdownItemType[];
};

export type CountryDropdownItemType = {
  value: string;
  label: string;
};
