import React, { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components/native";
import { AccountApi, getAccountDTO } from "../../client-api/account";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import Inputs from "./Inputs";
import { User } from "firebase/auth";

import { ContentContainer, FormHeader, ScreenHeader } from "./style";
import { EditProfileForm } from "./types";

const FormFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 119px;
`;

const getPhoneNumberWithoutPrefix = (phone: string) =>
  phone
    .split("")
    .reverse()
    .join("")
    .substring(0, 9)
    .split("")
    .reverse()
    .join("");

const getPhonePrefix = (phone: string) =>
  phone
    .split("")
    .reverse()
    .filter((_, index) => index >= 9)
    .reverse()
    .join("");

const getFormDefaultValues = (account: getAccountDTO, identity: User) => ({
  email: identity.email || "",
  phone: identity.phoneNumber
    ? getPhoneNumberWithoutPrefix(identity.phoneNumber)
    : undefined,
  name: account.name,
  preferredLanguage: account.prefferedLang,
  phonePrefix: identity.phoneNumber
    ? getPhonePrefix(identity.phoneNumber)
    : undefined,
});

export default function EditUserProfileForm({
  account,
  identity,
  getTokenKey,
}: {
  account: getAccountDTO;
  identity: User;
  getTokenKey: () => Promise<string>;
}) {
  const form = useForm<EditProfileForm>({
    defaultValues: getFormDefaultValues(account, identity),
  });
  const { handleSubmit } = form;

  const onSubmit = useCallback(async (data: EditProfileForm) => {
    const payload = {
      name: data.name,
      email: data.email,
      phone: `${data.phonePrefix}${data.phone}`,
      prefferedLang: data.preferredLanguage,
    };

    try {
      const token = await getTokenKey();
      await AccountApi.updateAccount(token, payload);
    } catch (err) {
      console.log({ err });
    }
  }, []);

  return (
    <FormProvider {...form}>
      <ContentContainer>
        <ScreenHeader>User profile edit</ScreenHeader>
        <FormHeader>Enter your details</FormHeader>
        <Inputs />

        <FormFooter>
          <ButtonCta color="primary" variant="outlined" anchor="Cancel" />
          <ButtonCta anchor="Update" onPress={handleSubmit(onSubmit)} />
        </FormFooter>
      </ContentContainer>
    </FormProvider>
  );
}
