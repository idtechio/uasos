import { FieldError } from "react-hook-form";

export type NumberPrefixSelectProps = {
  label?: string;
  placeholder: string;
  error?: FieldError;
  multiSelect?: boolean;
  errorMsg?: string;
  value: string | string[];
  onChange: (selected: string | string[]) => void;
  data?: NumberPrefixItemType[];
};

export type NumberPrefixItemType = {
  locale: string;
  countryCode: string;
};
