import React, { useState } from "react";
import CountrySelect from "../../Forms/CountrySelect";
import { InputWrapper } from "./style";

export default function PreferredLanguageInput() {
  const [state, setState] = useState<string | string[]>("");
  return (
    <InputWrapper
      label="Preferred language of communication"
      styles={{ container: { zIndex: 9999 } }}
    >
      <CountrySelect
        value={state}
        onChange={setState}
        placeholder="Preferred language of communication"
        errorMsg="Error"
        error={{} as any}
      />
    </InputWrapper>
  );
}
