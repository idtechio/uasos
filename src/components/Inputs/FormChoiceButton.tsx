import { Controller, FieldError, useFormContext } from "react-hook-form";
import { TouchableOpacity, Text } from "react-native";
import { FormKey } from "../../helpers/FormTypes";
import { ChoiceButton, InputControl } from "../Forms";
import { common } from "./styles";

type Props = {
  text: React.ReactNode;
  name: FormKey;
  error?: FieldError;
  errorMsg?: string;
};

const FormChoiceButton = ({ text, name, error, errorMsg }: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      rules={{
        required: false,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <InputControl>
          <TouchableOpacity
            onPress={() => {
              onChange(!value);
              onBlur();
            }}
          >
            <ChoiceButton text={text} isSmall isChoice={!!value} />
            {error && <Text style={common.error}>{errorMsg}</Text>}
          </TouchableOpacity>
        </InputControl>
      )}
      name={name}
    />
  );
};

export default FormChoiceButton;
