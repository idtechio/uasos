import React from "react";
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
} from "next-auth/react";
import { ButtonCta, ButtonDefault } from "../src/components/Buttons";
import { useForm, FormProvider } from "react-hook-form";
import { FormType } from "../src/helpers/FormTypes";
import FormTextInput from "../src/components/Inputs/FormTextInput";
import { useTranslation } from "next-i18next";
import { ScrollView } from "react-native";
import { CompositionSection } from "../src/components/Compositions";

const SignIn = ({ providers, csrfToken }: any) => {
  console.log({ providers, csrfToken });
  const { t } = useTranslation();
  const formFields = useForm<FormType>();
  const {
    handleSubmit,
    formState: { errors },
  } = formFields;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CompositionSection padding={[35, 30, 8, 30]}>
        <FormProvider {...formFields}>
          <FormTextInput
            name={"host.core.name"}
            label={t("labels.name")}
            rules={{
              required: true,
              maxLength: 50,
            }}
            error={errors?.host?.core?.name}
            errorMsg={t("validations.requiredName")}
          />
          <FormTextInput
            name={"host.core.name"}
            label={t("labels.name")}
            rules={{
              required: true,
              maxLength: 50,
            }}
            error={errors?.host?.core?.name}
            errorMsg={t("validations.requiredName")}
          />
          {/*<input name="csrfToken" type="hidden" defaultValue={csrfToken} /> ***from docu****  */}
          {/*<label>*/}
          {/*  Email address*/}
          {/*  <input type="email" id="email" name="email" />*/}
          {/*</label>*/}
          <ButtonDefault anchor={"Sign in with Email"} />
        </FormProvider>
        {Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <div key={provider.name}>
              <ButtonDefault
                onPress={() => signIn(provider.id)}
                anchor={`Sign in with ${provider.name}`}
                colorOposite={true}
              />
            </div>
          </div>
        ))}
      </CompositionSection>
    </ScrollView>
  );
};
export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken();
  return {
    props: { providers, csrfToken },
  };
}
export default SignIn;
