import { useState } from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";

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
import { ConfirmationResult } from "firebase/auth";
import SmsVerificationModal from "../SmsVerificationModal";
import SmsVerificationSuccessModal from "../SmsVerificationSuccessModal";
import { ErrorText } from "../FormRegisterWithSocials/styles";

type FormLoginProps = Pick<SignInProps, "providers" | "csrfToken">;

const FormLogin = ({ providers, csrfToken: _csrfToken }: FormLoginProps) => {
  const { t } = useTranslation();

  const [passwordInput, setPasswordInput] = useState(false);
  const [phoneLoginConfirmation, setPhoneLoginConfirmation] =
    useState<ConfirmationResult | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [smsVerificationSuccess, setSmsVerificationSuccess] =
    useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const formFields = useForm<FormType>();

  const {
    handleSubmit,
    formState: { errors },
  } = formFields;
  // eslint-disable-next-line
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // eslint-disable-next-line
  const PHONE_REGEX = /[+]([^\d]*\d){8}/;
  const EMAIL_OR_PHONE_REGEX =
    // eslint-disable-next-line
    /(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$)|([+]([^\d]*\d){8})/;
  const onSubmit = async (data: {
    login: { phoneOrEmail: string; password?: string };
  }) => {
    if (
      /* eslint-disable-next-line */
      data.login.hasOwnProperty("password") &&
      data.login.password &&
      PHONE_REGEX.test(data.login.phoneOrEmail)
    ) {
      setPasswordInput(false);
      delete data.login.password;
    }
    /* eslint-disable-next-line */
    if (data.login.hasOwnProperty("password") && data.login.password) {
      try {
        await Authorization.signInWithEmail(
          data.login.phoneOrEmail,
          data.login.password
        );
      } catch (error) {
        return null;
      }
    } else {
      if (EMAIL_REGEX.test(data.login.phoneOrEmail)) {
        setPasswordInput(true);
      } else if (PHONE_REGEX.test(data.login.phoneOrEmail)) {
        try {
          const confirmation = await Authorization.signInWithPhone(
            data.login.phoneOrEmail,
            Authorization.initCaptcha("captcha__container")
          );
          setPhoneLoginConfirmation(confirmation);
          setPhoneNumber(data.login.phoneOrEmail);
        } catch (error) {
          // eslint-disable-next-line
          // @ts-ignore
          setError(error.message);
        }
      }
    }
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
        await Authorization.signInWithFacebook();
        break;
      case PROVIDERS.GOOGLE:
        await Authorization.signInWithGoogle();
        break;
    }
  };

  return (
    <>
      <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
        <FormContainer>
          <FormHeader>{t("others:forms.login.login")}</FormHeader>
          {Object.values(providers).map(({ id, name }) => (
            <ButtonSM
              key={name}
              id={id}
              onPress={() => handleSignIn(id)}
              anchor={
                name === "Facebook"
                  ? t("others:forms.login.signInFacebook")
                  : t("others:forms.login.signInGoogle")
              }
            />
          ))}
          <Spacer />
          <FormProvider {...formFields}>
            <FormTextInput
              name={"login.phoneOrEmail"}
              label={t("others:forms.login.emailOrPhone")}
              rules={{
                required: true,
                maxLength: 50,
                pattern: EMAIL_OR_PHONE_REGEX,
              }}
              error={errors?.login?.phoneOrEmail}
              errorMsg={t("others:forms.login.emailOrPhoneDetails")}
            />
            {passwordInput ? (
              <>
                <FormTextInput
                  name={"login.password"}
                  label={t("others:forms.generic.password")}
                  secureTextEntry
                  rules={{
                    required: true,
                    maxLength: 50,
                    minLength: 8,
                  }}
                  error={errors?.login?.password}
                  errorMsg={`${handlePassErrorMsg(
                    // eslint-disable-next-line
                    // @ts-ignore
                    errors?.login?.password?.type
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
              anchor={t("common:loginForm.logIn")}
              onPress={handleSubmit(onSubmit, () => {})}
            />
            <div id="captcha__container" style={{ display: "none" }}></div>
          </FormProvider>
          {phoneLoginConfirmation ? (
            <SmsVerificationModal
              phoneNumber={phoneNumber}
              confirmation={phoneLoginConfirmation}
              setVerificationSuccess={setSmsVerificationSuccess}
              mode="LOGIN"
              callback={() => null}
            />
          ) : (
            <></>
          )}
          {smsVerificationSuccess ? <SmsVerificationSuccessModal /> : <></>}
          {error ? <ErrorText>{error}</ErrorText> : <></>}
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
