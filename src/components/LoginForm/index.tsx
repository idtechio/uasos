import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormTextInput from "../Inputs/FormTextInput";
import { ButtonCta, ButtonDefault } from "../Buttons";
import { signIn } from "next-auth/react";
import { CompositionSection } from "../Compositions";
import { FormHeader } from "../../../pages/signin";
import { FormType } from "../../helpers/FormTypes";
import { useTranslation } from "next-i18next";
// import styled from "styled-components";
import styled from "styled-components/native";
import ButtonSM from "../Buttons/ButtonSM";
import { Text, View } from "react-native";

const LoginForm = ({ providers, csrfToken }) => {
  const formFields = useForm<FormType>();
  const {
    handleSubmit,
    formState: { errors },
  } = formFields;

  const { t } = useTranslation();
  console.log("providers", providers);
  return (
    <CompositionSection padding={[35, 30, 8, 30]}>
      <FormHeader>{t("loginForm.logInWith")}</FormHeader>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <div key={provider.name}>
            <ButtonSM
              onPress={() => signIn(provider.id)}
              anchor={`${t("loginForm.logInWith")} ${provider.name}`}
              colorOposite={true}
            />
          </div>
        </div>
      ))}
      <Text> ---- lub -----</Text>
      <FormProvider {...formFields}>
        <FormTextInput
          name={"host.core.email"}
          label={t("labels.email")}
          rules={{
            required: true,
            maxLength: 50,
          }}
          error={errors?.host?.core?.name}
          errorMsg={t("validations.requiredName")}
        />
        <FormTextInput
          name={"host.core.email"}
          label={t("labels.email")}
          rules={{
            required: true,
            maxLength: 50,
          }}
          error={errors?.host?.core?.name}
          errorMsg={t("validations.requiredName")}
        />

        <ButtonCta anchor={t("loginForm.logIn")} />
      </FormProvider>
      <View>
        <Text>{t("loginForm.doNotHaveAcc")}</Text>
        <ButtonCta anchor={t("loginForm.register")} />
      </View>
    </CompositionSection>
  );
};

export default LoginForm;
