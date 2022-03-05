import { useMemo, useState } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { FormKey } from "../../helpers/FormTypes";
import RadioButtons from "../Forms/RadioButtons";
import ChoiceButton from "../Forms/ChoiceButton";
import { Error } from "./style";

type Data<T> = {
  label: string;
  value: T | number;
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
            <ChoiceButton
              key={label}
              onPress={() => {
                setMarkedCheckbox(label);
                onChange(value);
              }}
              error={!!error}
              text={label}
              isSmall
              isSelected={label === markedCheckbox}
            />
          ))}
          {error ? <Error>{errorMsg}</Error> : null}
        </RadioButtons>
      )}
      name={name}
    />
  );
};
export default FormRadioGroup;
