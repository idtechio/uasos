import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../../Forms";
import { EditProfileForm } from "../types";
import { InputWrapper } from "./style";

export default function NameInput() {
  const { control } = useFormContext<EditProfileForm>();

  return (
    <InputWrapper label="Name" styles={{ container: { marginTop: 0 } }}>
      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Input
            value={value || ""}
            onChange={onChange}
            placeholder="Preferred language of communication"
            error={error}
          />
        )}
      />
    </InputWrapper>
  );
}
