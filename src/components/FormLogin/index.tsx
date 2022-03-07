import React from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { useRouter } from "next/router";

import { FormType } from "../../helpers/FormTypes";

import { ButtonSM } from "../Buttons";
import { CompositionSection } from "../Compositions";

import FormContainer from "./FormContainer";
import { SignInProps } from "../../../pages/signin";

type FormLoginProps = Pick<SignInProps, "providers" | "csrfToken">;

const FormLogin = ({ providers, csrfToken: _csrfToken }: FormLoginProps) => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const formFields = useForm<FormType>();
  const {
    handleSubmit: _handleSubmit,
    formState: { errors: _errors },
  } = formFields;

  // const onSubmit = (data) => {
  //   console.log("form submit:", data);
  //   console.log("form submit:csrfToken", csrfToken);
  // };
  // const onError = (error) => {
  //   console.log("form error:", error);
  // };

  // const handlePassErrorMsg = (type: string): string => {
  //   switch (type) {
  //     case "minLength":
  //       return t("validations.toShortPassword");
  //     case "required":
  //       return t("validations.invalidPassword");
  //     default:
  //       return t("validations.invalidPassword");
  //   }
  // };

  const handleSignIn = (provideId: string) =>
    signIn(provideId, {
      callbackUrl: locale ? `/${locale}` : undefined,
    });

  return (
    <>
      <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
        <FormContainer>
          <FormHeader>{t("loginForm.logInWith")}</FormHeader>
          {Object.values(providers).map(({ id, name }) => (
            <ButtonSM
              key={name}
              id={id}
              onPress={() => handleSignIn(id)}
              anchor={`${t("loginForm.logInWith")} ${name}`}
            />
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
