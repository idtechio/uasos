import { useState, useContext } from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { useRouter } from "next/router";

import { ButtonCta, ButtonSM } from "../Buttons";
import { CompositionSection } from "../Compositions";

import FormContainer from "./FormContainer";
import { SignInProps } from "../../../pages/signin";
import { Theme } from "../../style/theme.config";
import { FormProvider, useForm } from "react-hook-form";
import { FormType } from "../../helpers/FormTypes";
import GoToRegister from "./GoToRegister";
import FormTextInput from "../Inputs/FormTextInput";
import LostPass from "./LostPass";
import { Authorization } from "../../hooks/useAuth";

type FormLoginProps = Pick<SignInProps, "providers" | "csrfToken">;

const FormLogin = ({ providers, csrfToken: _csrfToken }: FormLoginProps) => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  const [passwordInput, setPasswordInput] = useState(false);
  const [loginMethod, setLoginMethod] = useState("");

  const formFields = useForm<FormType>();

  const {
    handleSubmit,
    formState: { errors },
  } = formFields;

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const PHONE_REGEX = /([^\d]*\d){8}/;
  const EMAIL_OR_PHONE_REGEX =
    /(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)|(([^\d]*\d){8})/;

  const onSubmit = async (data: {
    login: { phoneOrEmail: string; password?: string };
  }) => {
    /* eslint-disable-next-line */
    if (data.login.hasOwnProperty("password") && data.login.password) {
      Authorization.signInWithEmail(
        data.login.phoneOrEmail,
        data.login.password
      );
    } else {
      if (EMAIL_REGEX.test(data.login.phoneOrEmail)) {
        setPasswordInput(true);
        console.log("logging with email");
      } else if (PHONE_REGEX.test(data.login.phoneOrEmail)) {
        await Authorization.signInWithPhone(
          data.login.phoneOrEmail,
          Authorization.initCaptcha("captcha__container")
        );
      }
    }
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

  enum PROVIDERS {
    FACEBOOK = "facebook",
    GOOGLE = "google",
  }
  const handleSignIn = async (providerId: string) => {
    switch (providerId) {
      case PROVIDERS.FACEBOOK:
        // await Authorization.signInWithFacebook();
        Authorization.sendPasswordResetEmail("jakub.jarzabekk@gmail.com");
        break;
      case PROVIDERS.GOOGLE:
        await Authorization.signInWithGoogle();
        break;
    }
  };
  // signIn(provideId, {
  //   callbackUrl: locale ? `/${locale}` : undefined,
  // });

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
          <Spacer />
          <FormProvider {...formFields}>
            <FormTextInput
              name={"login.phoneOrEmail"}
              label={"Phone or Email"}
              rules={{
                required: true,
                maxLength: 50,
                pattern: EMAIL_OR_PHONE_REGEX,
              }}
              error={errors?.login?.phoneOrEmail}
              errorMsg={"Enter phone or email"}
            />
            {passwordInput ? (
              <>
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
                  errorMsg={`${handlePassErrorMsg(
                    errors?.login?.password?.types
                  )}`}
                />
                <LostPass />
              </>
            ) : (
              <></>
            )}
            <ButtonCta
              style={{
                width: "130px",
                textTransform: "capitalize",
                height: "43px",
                display: "flex",
                marginBottom: "30px",
                alignSelf: "flex-end",
              }}
              anchor={t("loginForm.logIn")}
              onPress={handleSubmit(onSubmit, onError)}
            />
            <div id="captcha__container"></div>
          </FormProvider>
        </FormContainer>
      </CompositionSection>
      <GoToRegister />
    </>
  );
};

export default FormLogin;

export const FormHeader = styled.h2`
  color: ${({ theme }: { theme: Theme }) => theme.colors.textOnCta};
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const Spacer = styled.div`
  margin-bottom: 60px;
`;
