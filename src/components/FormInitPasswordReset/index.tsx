import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { ButtonCta } from "../Buttons";
import { CompositionSection } from "../Compositions";

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
} from "./styles";
import { Routes } from "../../consts/router";
import Image from "next/image";
import ModalPicture from "../../../public/assets/PasswordReset.png";
import CardModal from "../CardModal";
import { useState } from "react";
import SmsVerificationModal from "../SmsVerificationModal";
const FormInitPasswordReset = () => {
  const { t } = useTranslation();
  const [resetInitPassword, setResetInitPassword] = useState<boolean>(false);
  const router = useRouter();
  // eslint-disable-next-line
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const formFields = useForm<FormType>();
  const {
    handleSubmit,
    formState: { errors },
  } = formFields;

  const onSubmit = async (data: { login: { email: string } }) => {
    try {
      await Authorization.sendPasswordResetEmail(data.login.email);
      setResetInitPassword(true);
    } catch (e) {
      return null;
    }
  };
  const onError = () => null;
  return (
    <>
      <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
        <StyledHeader>Reset Password</StyledHeader>
        <StyledText>
          If you do not remember your password, enter your email address. We
          will send you a link to the password reset form.
        </StyledText>
        <FormContainer>
          <FormProvider {...formFields}>
            <FormTextInput
              name={"login.email"}
              label={"email"}
              rules={{
                required: true,
                maxLength: 50,
                pattern: EMAIL_REGEX,
              }}
              error={errors?.login?.email}
              errorMsg={"Enter email"}
            />
          </FormProvider>
          <ButtonContainer>
            <ButtonCta
              onPress={() => router.push(Routes.SIGN_IN)}
              anchor={"Back"}
              style={styles.backButton}
            />
            <ButtonCta
              onPress={handleSubmit(onSubmit, onError)}
              anchor={"Reset password"}
              style={styles.verifyButton}
            />
          </ButtonContainer>
        </FormContainer>
        {resetInitPassword ? (
          <CardModal>
            <ModalContainer>
              <Image src={ModalPicture} />
              <StyledModalText>
                Password reset email sent - check your mailbox
              </StyledModalText>
              <ButtonCta
                onPress={() => router.push(Routes.SIGN_IN)}
                anchor={"Continue"}
                style={styles.confirmButton}
              />
            </ModalContainer>
          </CardModal>
        ) : (
          <></>
        )}
        <SmsVerificationModal phoneNumber="1" />
      </CompositionSection>
    </>
  );
};

export default FormInitPasswordReset;
