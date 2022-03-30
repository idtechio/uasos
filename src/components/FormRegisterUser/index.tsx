import React, { useContext, useRef, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { FormType } from "../../helpers/FormTypes";
import { ButtonCta } from "../Buttons";
import { CompositionSection } from "../Compositions";
import { InputControl, InputCotrolLabel as InputControlLabel } from "../Forms";
import FormTextInput from "../Inputs/FormTextInput";
import CardModal from "../CardModal";
import { useSessionUserData } from "../../hooks/useSessionUserData";
import { Error } from "../Inputs/style";
import FormPhoneInput from "../Inputs/FormPhoneInput/FormPhoneInput";
import { generatePhonePrefixDropdownList } from "../Inputs/FormPhoneInput/helpers";
import { StyledHeader, StyledSubheader } from "./styles";
import { addHostPhonePrefixList } from "../FormAdHost/AddHostPhonePrefixList.data";
// import { AccountApi } from "../../client-api/account";
import { AuthContext } from "../../../pages/_app";
import FormCheckbox from "../Inputs/FormCheckbox";
import { CompositionRow } from "../Compositions/CompositionRow";
import { useRouter } from "next/router";
import { Routes } from "../../consts/router";
import FormLanguageDropdown from "../Inputs/FormLanguageDropdown";

export const SectionContent = styled.View`
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

type SubmitRequestState = {
  loading: boolean;
  error: Error | null | unknown;
  succeeded: boolean;
};

const submitRequestDefualtState = {
  loading: false,
  error: null,
  succeeded: false,
};

export default function FormRegisterUser() {
  const { t } = useTranslation();
  const { name: sessionName, email: sessionEmail } = useSessionUserData();
  const { getTokenForAPI } = useContext(AuthContext);
  const passwordInputRef = useRef<string | null>(null);
  const router = useRouter();

  const form = useForm<FormType>({
    defaultValues: {
      registrationUserForm: {
        name: sessionName ? sessionName.split(" ")[0] : "",
        email: sessionEmail,
        smsNotification: false,
        showPasswordLabel: false,
      },
    },
  });

  const [submitRequstState, setSubmitRequstState] =
    useState<SubmitRequestState>(submitRequestDefualtState);

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
    watch,
  } = form;

  passwordInputRef.current = watch("registrationUserForm.password", "");

  const onSubmit: SubmitHandler<FormType> = async ({
    registrationUserForm,
  }) => {
    const { name, email, phonePrefix, phoneNumber, smsNotification } =
      registrationUserForm;

    console.log(registrationUserForm);
    // setSubmitRequstState((state) => ({ ...state, loading: true }));
    // try {
    //   if (getTokenForAPI) {
    //     await AccountApi.updateAccount({
    //       token: await getTokenForAPI(),
    //       payload: {
    //         name: name,
    //         phone_num: `${phonePrefix}${phoneNumber}`,
    //         email: email,
    //       },
    //     });
    //   }
    //
    //   setSubmitRequstState((state) => ({ ...state, succeeded: true }));
    // } catch (error) {
    //   setSubmitRequstState((state) => ({ ...state, error }));
    // } finally {
    //   setSubmitRequstState((state) => ({ ...state, loading: false }));
    // }
  };

  return (
    <FormProvider {...form}>
      {submitRequstState.loading && (
        <CardModal closeable={false}>
          <ActivityIndicator size="large" />
        </CardModal>
      )}
      <CompositionSection padding={[35, 30, 8, 30]} zIndex={2}>
        <StyledHeader>{t("registrationUserForm.header")}</StyledHeader>
        <StyledSubheader>{t("registrationUserForm.subheader")}</StyledSubheader>
        <SectionContent>
          <InputControlLabel marginBottom={"0"}>
            {t("registrationUserForm.nameLabel")}
          </InputControlLabel>
          <FormTextInput
            name="registrationUserForm.name"
            label={t("registrationUserForm.namePlaceholder")}
            rules={{
              required: true,
            }}
            error={errors?.registrationUserForm?.name}
            errorMsg={t("registrationUserForm.errors.name")}
          />
          <InputControlLabel marginBottom={"14px"}>
            {t("registrationUserForm.preferredLanguageLabel")}
          </InputControlLabel>
          <FormLanguageDropdown
            name="registrationUserForm.preferredLanguage"
            rules={{
              required: true,
            }}
            error={errors?.registrationUserForm?.preferredLanguage}
            errorMsg={t("registrationUserForm.errors.preferredLanguage")}
          />
        </SectionContent>
      </CompositionSection>
      <CompositionSection padding={[0, 30, 0, 30]} zIndex={1}>
        <SectionContent>
          <InputControlLabel marginBottom={"14px"}>
            {t("registrationUserForm.phoneLabel")}
          </InputControlLabel>
          <FormPhoneInput
            prefixName="registrationUserForm.phonePrefix"
            numberName="registrationUserForm.phoneNumber"
            phonePrefixLabel={t("registrationUserForm.phonePrefixPlaceholder")}
            phoneLabel={t("registrationUserForm.phoneNumberPlaceholder")}
            error={errors?.registrationUserForm?.phoneNumber}
            errorMsg={t("registrationUserForm.errors.phoneNumber")}
            data={generatePhonePrefixDropdownList(addHostPhonePrefixList)}
          />
        </SectionContent>
      </CompositionSection>
      <CompositionSection padding={[0, 30, 0, 30]}>
        <SectionContent>
          <FormCheckbox
            isCentered={false}
            rules={{
              required: false,
            }}
            name="registrationUserForm.smsNotification"
            label={` ${t("registrationUserForm.smsNotificationLabel")}`}
          />
        </SectionContent>
      </CompositionSection>
      <CompositionSection padding={[0, 30, 8, 30]}>
        <SectionContent>
          <InputControlLabel marginBottom={"0"}>
            {t("registrationUserForm.emailLabel")}
          </InputControlLabel>
          <FormTextInput
            name="registrationUserForm.email"
            label={t("registrationUserForm.emailPlaceholder")}
            rules={{
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t("validations.invalidEmail"),
              },
            }}
            error={errors?.registrationUserForm?.email}
            errorMsg={t("registrationUserForm.errors.email")}
          />
        </SectionContent>
      </CompositionSection>
      <CompositionSection padding={[0, 30, 0, 30]}>
        <SectionContent>
          <InputControlLabel marginBottom={"0"}>
            {t("registrationUserForm.passwordLabel")}
          </InputControlLabel>
          <FormTextInput
            name={"registrationUserForm.password"}
            label={t("registrationUserForm.passwordLabel")}
            secureTextEntry
            rules={{
              required: true,
              maxLength: 50,
              minLength: 8,
            }}
            error={errors?.registrationUserForm?.password}
            errorMsg={t("registrationUserForm.errors.password")}
          />
          <InputControlLabel marginBottom={"0"}>
            {t("registrationUserForm.passwordConfirmLabel")}
          </InputControlLabel>
          <FormTextInput
            name={"registrationUserForm.passwordConfirm"}
            label={t("registrationUserForm.passwordConfirmLabel")}
            secureTextEntry
            rules={{
              required: true,
              maxLength: 50,
              minLength: 8,
              validate: (value) => value === passwordInputRef.current,
            }}
            error={errors?.registrationUserForm?.passwordConfirm}
            errorMsg={t("registrationUserForm.errors.passwordConfirm")}
          />
          <FormCheckbox
            isCentered={false}
            rules={{
              required: false,
            }}
            name="registrationUserForm.showPasswordLabel"
            label={` ${t("registrationUserForm.showPasswordLabel")}`}
          />
        </SectionContent>
      </CompositionSection>
      <CompositionSection padding={[35, 30, 8, 30]}>
        <SectionContent>
          <CompositionRow>
            <InputControl styles={buttonStyles}>
              <ButtonCta
                onPress={() => router.push(Routes.HOMEPAGE)}
                anchor={t("registrationUserForm.backButtonLabel")}
                style={buttonStyles.backButton}
              />
            </InputControl>
            <InputControl styles={buttonStyles}>
              <ButtonCta
                onPress={handleSubmit(onSubmit)}
                anchor={t("registrationUserForm.nextButtonLabel")}
                style={buttonStyles.nextButton}
              />
            </InputControl>
          </CompositionRow>
        </SectionContent>
      </CompositionSection>
    </FormProvider>
  );
}

const buttonStyles = StyleSheet.create({
  wrapper: {
    width: "50%",
  },
  backButton: {
    alignSelf: "flex-start",
    cursor: "pointer",
    border: "1.5px solid #003566",
    borderRadius: 50,
    backgroundColor: "none",
  },
  nextButton: {
    alignSelf: "flex-end",
    cursor: "pointer",
  },
});
