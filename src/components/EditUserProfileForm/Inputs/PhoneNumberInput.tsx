import React from "react";
import { TextInput } from "../../Forms/Input/style";
import { InputWrapper } from "./style";

export default function PhoneNumberInput() {
  return (
    <InputWrapper label="Phone number">
      <TextInput placeholder="Phone number" />
    </InputWrapper>
  );
}
