import React from "react";
import { View } from "react-native";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { Error } from "./style";
import UploadInput from "../Forms/UploadInput/index.web";
import { FormKey } from "../../helpers/FormTypes";

type Props = {
  name: FormKey;
  label: string;
  error?: FieldError;
  errorMsg?: string;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormUpload = ({ name, errorMsg, rules, error, label }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, name } }) => (
        <View>
          <UploadInput
            name={name}
            label={label}
            error={error}
            onBlur={onBlur}
            onFileChange={onChange}
          />
          {error && <Error>{errorMsg}</Error>}
        </View>
      )}
      name={name}
    />
  );
};

export default FormUpload;
