import { useMemo, useState } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { FormKey } from "../../helpers/FormTypes";
import RadioButtons from "../Forms/RadioButtons";
import ChoiceButton from "../Forms/ChoiceButton";
import { common } from "./styles";

type Data<T> = {
  label: string;
  value: T;
};

type Props<T> = {
  name: FormKey;
  data: Data<T>[];
  error?: FieldError;
  errorMsg?: string;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormRadioGroup = <T extends Object>({
  name,
  rules,
  data,
  errorMsg,
}: Props<T>) => {
  const { control, formState } = useFormContext();
  const [markedCheckbox, setMarkedCheckbox] = useState<string>();

  const error = useMemo(() => {
    return name
      .split(".")
      .reduce(
        (accu, item) => (accu ? accu[item] : undefined),
        formState.errors
      );
  }, [name, formState]);

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange } }) => (
        <RadioButtons>
          {data.map(({ label, value }) => (
            <TouchableOpacity
              key={label}
              onPress={() => {
                setMarkedCheckbox(label);
                onChange(value);
              }}
            >
              <ChoiceButton
                text={label}
                isSmall
                isChoice={label === markedCheckbox}
                error={!!error}
              />
            </TouchableOpacity>
          ))}
          {error ? <Text style={common.error}>{errorMsg}</Text> : null}
        </RadioButtons>
      )}
      name={name}
    />
  );
};
export default FormRadioGroup;
