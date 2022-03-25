import React from "react";
import { Input } from "../../Forms";
import { InputWrapper } from "./style";

export default function PreferredLanguageInput() {
  return (
    <InputWrapper label="Preferred language of communication">
      <Input placeholder="Preferred language of communication" />
    </InputWrapper>
  );
}
