import React from "react";
import { signIn } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

import { FormType } from "../../helpers/FormTypes";

import FormTextInput from "../Inputs/FormTextInput";
import { ButtonCta, ButtonSM } from "../Buttons";
import { CompositionSection } from "../Compositions";

import Separation from "./Separation";
import LostPass from "./LostPass";
import GoToRegister from "./GoToRegister";
import FormContainer from "./FormContainer";

const FormLogin = ({ providers, csrfToken }) => {
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

  const handlePassErrorMsg = (type: string): string => {
    switch (type) {
      case "minLength":
        return t("validations.toShortPassword");
      case "required":
        return t("validations.invalidPassword");
      default:
        return t("validations.invalidPassword");
    }
  };

  return (
    <>
      <CompositionSection padding={[40, 15, 0, 15]}>
        <FormContainer>
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
          <div style={{ marginBottom: 60 }}></div>
          {/* <<FormProvider {...formFields}>
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
              secureTextEntry
              rules={{
                required: true,
                maxLength: 50,
                minLength: 8,
              }}
              error={errors?.login?.password}
              errorMsg={`${handlePassErrorMsg(errors?.login?.password.type)}`}
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
          </FormProvider> */}
        </FormContainer>
      </CompositionSection>
      {/* <GoToRegister /> */}
    </>
  );
};

export default FormLogin;

export const FormHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textOnCta};
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;
