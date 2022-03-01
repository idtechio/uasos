import { useState } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FormKey } from "../../helpers/FormTypes";
import RadioButtons from "../Forms/RadioButtons";
import ChoiceButton from "../Forms/ChoiceButton";

const styles = StyleSheet.create({
  error: {
    color: "#D8000C",
    marginTop: 10,
  },
});

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

const FormRadioGroup = <T extends Object>({ name, rules, data }: Props<T>) => {
  const { control } = useFormContext();
  const [markedCheckbox, setMarkedCheckbox] = useState<string>();
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
              />
            </TouchableOpacity>
          ))}
        </RadioButtons>
      )}
      name={name}
    />
  );
};
export default FormRadioGroup;
