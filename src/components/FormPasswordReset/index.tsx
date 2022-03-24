import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { ButtonCta } from "../Buttons";
import { CompositionSection } from "../Compositions";

import FormContainer from "../FormLogin/FormContainer";
import { FormProvider, useForm } from "react-hook-form";
import { FormType } from "../../helpers/FormTypes";
import FormTextInput from "../Inputs/FormTextInput";
import { Authorization } from "../../hooks/useAuth";
import { StyledText, StyledHeader, ButtonContainer, styles } from "./styles";

const FormPasswordReset = () => {
  const { t } = useTranslation();
  const router = useRouter();
  // eslint-disable-next-line
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const formFields = useForm<FormType>();
  const firstInputRef = useRef<string | null>(null);
  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = formFields;
  firstInputRef.current = watch("resetPassword.password", "");
  const onSubmit = (data: { resetPassword: { passwordRepeat: string } }) => {
    if (oobCodeRef.current) {
      console.log(oobCodeRef.current);
      // try {
      //   Authorization.confirmPasswordResetEmail(
      //     oobCodeRef.current,
      //     data.resetPassword.passwordRepeat
      //   );
      // } catch (e) {
      //   return null;
      // }
    }
  };
  const oobCodeRef = useRef<null | string>(null);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    oobCodeRef.current = queryParams.get("oobCode");
  }, []);
  const onError = () => null;
  return (
    <>
      <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
        <StyledHeader>Reset Password</StyledHeader>
        <StyledText>Provide new password for your accout</StyledText>
        <FormContainer>
          <FormProvider {...formFields}>
            <FormTextInput
              name={"resetPassword.password"}
              label={"Password"}
              secureTextEntry
              rules={{
                required: true,
                maxLength: 50,
                minLength: 8,
              }}
              error={errors?.resetPassword?.password}
              errorMsg={"Password must be at leat 8 characters long"}
            />
            <FormTextInput
              name={"resetPassword.passwordRepeat"}
              label={"Repeat password"}
              secureTextEntry
              rules={{
                required: true,
                maxLength: 50,
                minLength: 8,
                validate: (value) => value === firstInputRef.current,
              }}
              error={errors?.resetPassword?.passwordRepeat}
              errorMsg={"Passwords must be identical"}
            />
          </FormProvider>
          <ButtonContainer>
            <ButtonCta
              onPress={handleSubmit(onSubmit, onError)}
              anchor={"Set new password"}
              style={styles.verifyButton}
            />
          </ButtonContainer>
        </FormContainer>
      </CompositionSection>
    </>
  );
};

export default FormPasswordReset;
