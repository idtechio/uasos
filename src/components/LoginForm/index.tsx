import React from "react";
import { signIn } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { Text, View } from "react-native";

import { FormType } from "../../helpers/FormTypes";

import FormTextInput from "../Inputs/FormTextInput";
import { ButtonCta, ButtonSM } from "../Buttons";
import { CompositionSection } from "../Compositions";

import Separation from "./Separation";
import LostPass from "./LostPass";
import styled from "styled-components";

const LoginForm = ({ providers, csrfToken }) => {
  const { t } = useTranslation();
  const formFields = useForm<FormType>();
  const {
    handleSubmit,
    formState: { errors },
  } = formFields;

  const onSubmit = (data) => {
    console.log("form submit:", data);
    console.log("form submit:csrfToken", csrfToken);
  };
  const onError = (error) => {
    console.log("form error:", error);
  };

  return (
    <CompositionSection padding={[0, 30, 8, 30]}>
      <FormHeader>{t("loginForm.logInWith")}</FormHeader>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <div key={provider.name}>
            <ButtonSM
              id={provider.id}
              onPress={() => signIn(provider.id)}
              anchor={`${t("loginForm.logInWith")} ${provider.name}`}
            />
          </div>
        </div>
      ))}
      <Separation />
      <FormProvider {...formFields}>
        <FormTextInput
          name={"login.email"}
          label={t("labels.email")}
          rules={{
            required: true,
            maxLength: 50,
          }}
          error={errors?.login?.email}
          errorMsg={t("validations.invalidEmail")}
        />
        <FormTextInput
          name={"login.password"}
          label={t("labels.password")}
          rules={{
            required: true,
            maxLength: 50,
          }}
          error={errors?.login?.password}
          errorMsg={t("validations.invalidPassword")}
        />
        <LostPass />
        <ButtonCta
          style={{
            width: "130px",
            textTransform: "capitalize",
            height: "43px",
            display: "flex",
            marginBottom: "30px",
          }}
          anchor={t("loginForm.logIn")}
          onPress={handleSubmit(onSubmit, onError)}
        />
      </FormProvider>
      <View>
        <Text>{t("loginForm.doNotHaveAcc")}</Text>
        <ButtonCta anchor={t("loginForm.register")} />
      </View>
    </CompositionSection>
  );
};

export default LoginForm;

export const FormHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textOnCta};
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;
