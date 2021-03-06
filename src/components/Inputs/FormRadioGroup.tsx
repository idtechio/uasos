import { useEffect, useMemo, useState } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { FormKey } from "../../helpers/FormTypes";
import RadioButtons from "../Forms/RadioButtons";
import ChoiceButton from "../Forms/ChoiceButton";
import RadioButton from "../Forms/RadioButton";
import { Error } from "./style";

type Data = {
  label: string;
  value: string;
};

type Props = {
  name: FormKey;
  data: Data[];
  error?: FieldError | FieldError[];
  errorMsg?: string;
  isRadio?: boolean;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormRadioGroup = ({ name, rules, data, errorMsg, isRadio }: Props) => {
  const { control, formState, getValues } = useFormContext();
  const [markedCheckbox, setMarkedCheckbox] = useState<string>();

  useEffect(() => {
    if (data && getValues(name) && !markedCheckbox) {
      setMarkedCheckbox(
        data.filter((el) => el.value === getValues(name))[0]?.label
      );
    }
  }, [data, getValues, markedCheckbox, name]);

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
            <>
              {isRadio ? (
                <RadioButton
                  key={label}
                  labelText={label}
                  isSelected={label === markedCheckbox}
                  onPress={() => {
                    setMarkedCheckbox(label);
                    onChange(value);
                  }}
                />
              ) : (
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
              )}
            </>
          ))}
          {error ? <Error>{errorMsg}</Error> : null}
        </RadioButtons>
      )}
      name={name}
    />
  );
};

export default FormRadioGroup;
