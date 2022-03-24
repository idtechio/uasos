import { useState, useContext } from "react";
import { useTranslation } from "next-i18next";
import styled from "styled-components";
import { useRouter } from "next/router";

import { ButtonCta, ButtonSM } from "../Buttons";
import { CompositionSection } from "../Compositions";

import FormContainer from "../FormLogin/FormContainer";
import { FormProvider, useForm } from "react-hook-form";
import { FormType } from "../../helpers/FormTypes";
import FormTextInput from "../Inputs/FormTextInput";
import { Authorization } from "../../hooks/useAuth";

const FormInitPasswordReset = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const formFields = useForm<FormType>();
  const {
    handleSubmit,
    formState: { errors },
  } = formFields;
  return (
    <>
      <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
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
        </FormContainer>
      </CompositionSection>
    </>
  );
};

export default FormInitPasswordReset;
