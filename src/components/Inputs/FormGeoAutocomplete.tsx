import { Controller, FieldError, useFormContext } from "react-hook-form";
import InputControl from "../Forms/InputControl";
import { View } from "react-native";
import { FormKey } from "../../helpers/FormTypes";
import { Error } from "./style";
import { PlacesAutocomplete } from "../PlacesAutocomplete";

type Props = {
  name: FormKey;
  placeholder: string;
  error?: FieldError | FieldError[] | undefined;
  errorMsg?: string;
  zIndex?: number;
};

export enum CountryCode {
  poland = "pl",
  hungary = "hu",
  czechia = "cz",
  slovakia = "sk",
  romania = "ro",
}

export type SelectedCountry = keyof typeof CountryCode;

function FormGeoAutocomplete({
  name,
  errorMsg,
  rules,
  error,
  placeholder,
  zIndex,
}: Props & Pick<React.ComponentProps<typeof Controller>, "rules">) {
  const { control, watch } = useFormContext();

  const country = watch("advancedHost.country") as unknown as SelectedCountry;

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        return (
          <View style={{ zIndex }}>
            <InputControl zIndex={zIndex}>
              <PlacesAutocomplete
                value={value}
                error={error}
                onChange={onChange}
                selectedCountry={country}
                placeholder={placeholder}
              />
              {error && <Error>{errorMsg}</Error>}
            </InputControl>
          </View>
        );
      }}
      name={name}
    />
  );
}

export default FormGeoAutocomplete;
