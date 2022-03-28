import React from "react";
import { Input } from "../../Forms";
import { InputWrapper } from "./style";

export default function EmailInput() {
  return (
    <InputWrapper label="Email">
      <Input
        placeholder="Email"
        styles={{ wrapper: { margin: 0, height: "auto" } }}
        withoutLabel
      />
    </InputWrapper>
  );
}
