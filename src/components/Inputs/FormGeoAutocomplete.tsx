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

function FormGeoAutocomplete({
  name,
  errorMsg,
  rules,
  error,
  placeholder,
  zIndex,
}: Props & Pick<React.ComponentProps<typeof Controller>, "rules">) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange } }) => {
        return (
          <View style={{ zIndex }}>
            <InputControl zIndex={zIndex}>
              <PlacesAutocomplete
                error={error}
                onChange={onChange}
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
