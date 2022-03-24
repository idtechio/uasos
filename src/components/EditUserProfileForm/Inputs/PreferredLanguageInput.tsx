import React from "react";
import { TextInput } from "../../Forms/Input/style";
import { InputWrapper } from "./style";

export default function PreferredLanguageInput() {
  return (
    <InputWrapper label="Preferred language of communication">
      <TextInput placeholder="Preferred language of communication" />
    </InputWrapper>
  );
}
