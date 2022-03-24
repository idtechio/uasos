import React, { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components/native";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import Inputs from "./Inputs";

import { ContentContainer, FormHeader, ScreenHeader } from "./style";
import { EditProfileForm } from "./types";

const FormFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 119px;
`;

export default function EditUserProfileForm() {
  const form = useForm<EditProfileForm>();
  const { control, handleSubmit } = form;
  const onSubmit = useCallback((data: EditProfileForm) => {
    console.log(data);
  }, []);

  return (
    <FormProvider {...form}>
      <ContentContainer>
        <ScreenHeader>User profile edit</ScreenHeader>
        <FormHeader>Enter your details</FormHeader>
        <Inputs />

        <FormFooter>
          <ButtonCta color="primary" variant="outlined" anchor="Cancel" />
          <ButtonCta anchor="Update" />
        </FormFooter>
      </ContentContainer>
    </FormProvider>
  );
}
