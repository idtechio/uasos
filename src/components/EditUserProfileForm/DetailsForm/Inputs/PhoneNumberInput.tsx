import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components/native";
import { Theme } from "../../../../style/theme.config";
import Input from "../../../Forms/Input";
import PhoneNumberPrefixSelect from "../../../Forms/PhoneNumberPrefixSelect";
import { EditProfileForm } from "../../types";
import { InputWrapper } from "./style";

export const Error = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.error};
  margin-bottom: 10px;
`;

export default function PhoneNumberInput() {
  const { control } = useFormContext<EditProfileForm>();

  return (
    <InputWrapper
      label="Phone number"
      styles={{
        label: {},
        container: { zIndex: 999 },
      }}
    >
      <InputsContainer>
        <PrefixWrapper>
          <Controller
            control={control}
            name="phonePrefix"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <PhoneNumberPrefixSelect
                value={value || ""}
                onChange={onChange}
                error={error}
                errorMsg={error?.message}
                placeholder="Prefix"
              />
            )}
          />
        </PrefixWrapper>

        <NumberWrapper>
          <Controller
            control={control}
            name="phone"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                styles={{ wrapper: { margin: 0, height: "auto" } }}
                value={value || ""}
                onChange={onChange}
                error={error}
                // errorMsg={error?.message}
                placeholder="xxx-xxx-xxx"
                withoutLabel
              />
            )}
          />
        </NumberWrapper>
      </InputsContainer>
    </InputWrapper>
  );
}

const InputsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PrefixWrapper = styled.View`
  z-index: 9;
  flex: 0 0 107px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumberWrapper = styled.View`
  margin-left: 11px;
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
