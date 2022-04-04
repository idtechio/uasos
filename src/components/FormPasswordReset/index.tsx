import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { ButtonCta } from "../Buttons";
import { CompositionSection } from "../Compositions";
import { InputCotrolLabel as InputControlLabel } from "../Forms";

import FormContainer from "../FormLogin/FormContainer";
import { FormProvider, useForm } from "react-hook-form";
import { FormType } from "../../helpers/FormTypes";
import FormTextInput from "../Inputs/FormTextInput";
import { Authorization } from "../../hooks/useAuth";
import {
  StyledText,
  StyledHeader,
  ButtonContainer,
  styles,
  ModalContainer,
  StyledModalText,
  VerticalDivider,
} from "./styles";
import CardModal from "../CardModal";
import ModalPicture from "../../../public/assets/PasswordReset.png";
import Image from "next/image";
import { Routes } from "../../consts/router";

const FormPasswordReset = () => {
  const { t } = useTranslation();
  const [resetSuccess, setResetSuccess] = useState<boolean>(false);
  const router = useRouter();
  // eslint-disable-next-line
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const formFields = useForm<FormType>();
  const firstInputRef = useRef<string | null>(null);
  const oobCodeRef = useRef<null | string>(null);

  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = formFields;

  const ERROR_MESSAGES = {
    LENGTH: "others:forms.userRegistration.validations.passwordLength",
    REPEAT: "others:forms.userRegistration.validations.passwordMismatch",
  };

  const secondInputErrorType = errors?.resetPassword?.passwordRepeat?.type;

  firstInputRef.current = watch("resetPassword.password", "");

  const onSubmit = async (data: {
    resetPassword: { passwordRepeat: string };
  }) => {
    if (oobCodeRef.current) {
      try {
        await Authorization.confirmPasswordResetEmail(
          oobCodeRef.current,
          data.resetPassword.passwordRepeat
        );
        setResetSuccess(true);
      } catch (e) {
        return null;
      }
    }
  };

  const onError = () => null;

  const validatePasswordMismatch = (value: string) =>
    value === firstInputRef.current;

  const onPressHandler = () => router.push(Routes.SIGN_IN);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    oobCodeRef.current = queryParams.get("oobCode");
  }, []);

  return (
    <>
      <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
        <StyledHeader>{t("others:common.links.resetPassword")}</StyledHeader>
        <StyledText>{t("others:forms.resetPassword.header")}</StyledText>
        <FormContainer>
          <FormProvider {...formFields}>
            <InputControlLabel marginBottom={"10"}>
              {t("others:forms.userRegistration.newPassword")}
            </InputControlLabel>
            <FormTextInput
              name={"resetPassword.password"}
              label={t("others:forms.userRegistration.newPassword")}
              secureTextEntry
              rules={{
                required: true,
                maxLength: 50,
                minLength: 8,
              }}
              error={errors?.resetPassword?.password}
              errorMsg={t(ERROR_MESSAGES.LENGTH)}
              styles={{ wrapper: { marginBottom: 10 } }}
            />
            <VerticalDivider
              height={errors?.resetPassword?.password ? "0px" : "26px"}
            />
            <InputControlLabel marginBottom={"10"}>
              {t("others:forms.userRegistration.confirmPassword")}
            </InputControlLabel>
            <FormTextInput
              name={"resetPassword.passwordRepeat"}
              label={t("others:forms.userRegistration.confirmPassword")}
              secureTextEntry
              rules={{
                required: true,
                maxLength: 50,
                minLength: 8,
                validate: validatePasswordMismatch,
              }}
              error={errors?.resetPassword?.passwordRepeat}
              errorMsg={t(
                `${
                  secondInputErrorType === "validate"
                    ? ERROR_MESSAGES.REPEAT
                    : ERROR_MESSAGES.LENGTH
                }`
              )}
              styles={{ wrapper: { marginBottom: 10 } }}
            />
          </FormProvider>
          <ButtonContainer>
            <ButtonCta
              onPress={handleSubmit(onSubmit, onError)}
              anchor={t("others:forms.resetPassword.setNewPassword")}
              style={styles.verifyButton}
            />
          </ButtonContainer>
        </FormContainer>
        {resetSuccess ? (
          <CardModal>
            <ModalContainer>
              <Image src={ModalPicture} alt="" />
              <StyledModalText>
                {t("others:common.resetPassword.success")}
              </StyledModalText>
              <ButtonCta
                onPress={onPressHandler}
                anchor={"Continue"}
                style={styles.confirmButton}
              />
            </ModalContainer>
          </CardModal>
        ) : (
          <></>
        )}
      </CompositionSection>
    </>
  );
};

export default FormPasswordReset;
