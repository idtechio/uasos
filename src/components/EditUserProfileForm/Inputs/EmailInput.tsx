import React from "react";
import { TextInput } from "../../Forms/Input/style";
import { InputWrapper } from "./style";

export default function EmailInput() {
  return (
    <InputWrapper label="Email">
      <TextInput placeholder="Email" />
    </InputWrapper>
  );
}
