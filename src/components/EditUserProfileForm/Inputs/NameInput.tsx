import React from "react";
import { TextInput } from "../../Forms/Input/style";
import { InputWrapper } from "./style";

export default function NameInput() {
  return (
    <InputWrapper label="Name" styles={{ container: { marginTop: 0 } }}>
      <TextInput placeholder="Name" />
    </InputWrapper>
  );
}
