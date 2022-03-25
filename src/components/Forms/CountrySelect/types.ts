import { FieldError } from "react-hook-form";

export type CountrySelectProps = {
  label?: string;
  placeholder: string;
  error?: FieldError;
  multiSelect?: boolean;
  errorMsg?: string;
  value: string | string[];
  onChange: (selected: string | string[]) => void;
  data?: CountryDropdownItemType[];
};

export type CountryDropdownItemType = {
  value: string;
  label: string;
};
