import React, { useContext, useRef, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";
import { FormType } from "../../helpers/FormTypes";
import { ButtonCta } from "../Buttons";
import { CompositionSection } from "../Compositions";
import { InputControl, InputCotrolLabel as InputControlLabel } from "../Forms";
import FormTextInput from "../Inputs/FormTextInput";
import CardModal from "../CardModal";
// import { Error } from "../Inputs/style";
import FormPhoneInput from "../Inputs/FormPhoneInput";
import { generatePhonePrefixDropdownList } from "../Inputs/FormPhoneInput/helpers";
import {
  StyledHeader,
  StyledSubheader,
  StyledErrorMessage,
  FormPhoneInputWrapper,
  FormTextInputWrapper,
} from "./styles";
import { phonePrefixDropdownList } from "../../consts/phonePrefixDropdown";
import { AccountApi } from "../../client-api/account";
import { AuthContext } from "../../../pages/_app";
import FormCheckbox from "../Inputs/FormCheckbox";
import { CompositionRow } from "../Compositions/CompositionRow";
import { useRouter } from "next/router";
import { Routes } from "../../consts/router";
import FormLanguageDropdown from "../Inputs/FormLanguageDropdown";
import { Authorization } from "../../hooks/useAuth";
import { ConfirmationResult, User } from "firebase/auth";
import SmsVerificationModal from "../SmsVerificationModal";
import SmsVerificationSuccessModal from "../SmsVerificationSuccessModal";
import { useMutation } from "react-query";
import { FirebaseError } from "@firebase/util";
import SmsNotificationInput from "../EditUserProfileForm/Inputs/SmsNotificationInput";

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

export type AccountUpdateData = {
  name: string;
  preferredLang: string;
  smsNotification: boolean;
};

export default function FormRegisterUser() {
  const mutation = useMutation(
    (data: { identity: User; phonePrefix: string; phoneNumber: string }) =>
      Authorization.linkWithPhone(
        data.phonePrefix + data.phoneNumber,
        Authorization.initCaptcha("recaptcha__container")
      ),
    { retry: 10, retryDelay: 2000 }
  );
  const { identity } = useContext(AuthContext);
  const { t } = useTranslation();
  const { getTokenForAPI } = useContext(AuthContext);
  const passwordInputRef = useRef<string | null>(null);
  const router = useRouter();

  const form = useForm<FormType>({
    defaultValues: {
      registrationUserForm: {
        smsNotification: true,
        showPassword: false,
        preferredLanguage: "pl",
      },
    },
  });

  const [submitRequstState, setSubmitRequstState] =
    useState<SubmitRequestState>(submitRequestDefualtState);
  const [phoneConfirmation, setPhoneConfirmation] =
    useState<null | ConfirmationResult>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [updateData, setUpdateData] = useState<AccountUpdateData>();
  const [smsVerificationSuccess, setSmsVerificationSuccess] =
    useState<boolean>(false);

  const [apiError, setApiError] = useState("");

  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = form;

  passwordInputRef.current = watch("registrationUserForm.password", "");
  const isShowPasswordChecked = watch("registrationUserForm.showPassword");

  const parseError = (error: string) => {
    if (
      error.includes("email-already-exists") ||
      error.includes("email-already-in-use")
    ) {
      setApiError(t("others:userRegistration.errors.emailExist"));
    } else if (
      error.includes("phone-number-already-exists") ||
      error.includes("account-exists")
    ) {
      setApiError(t("others:userRegistration.errors.phoneLinkingFailed"));
    } else if (error.includes("too-many-requests")) {
      setApiError(t("others:userRegistration.errors.tooManyRequest"));
    } else if (error.includes("invalid-verification")) {
      setApiError(t("others:userRegistration.errors.invalidCode"));
    } else {
      setApiError("Oops something went wrong");
    }
  };
  const onSubmit: SubmitHandler<FormType> = async ({
    registrationUserForm,
  }) => {
    const {
      name,
      email,
      phonePrefix,
      phoneNumber,
      smsNotification,
      password,
      preferredLanguage,
    } = registrationUserForm;
    setUpdateData({ name, preferredLang: preferredLanguage, smsNotification });
    try {
      setSubmitRequstState((state) => ({ ...state, loading: true }));
      await Authorization.createUser(email, password);
      await AccountApi.updateAccount({
        payload: {
          name,
          preferredLang: preferredLanguage,
          smsNotification,
        },
      });
      setSubmitRequstState((state) => ({ ...state, loading: false }));

      const res = await mutation.mutateAsync({
        identity: identity as User,
        phonePrefix,
        phoneNumber,
      });

      setSubmitRequstState((state) => ({ ...state, loading: false }));
      setPhoneConfirmation(res);
      setPhoneNumber(phonePrefix + phoneNumber);
    } catch (error: unknown) {
      if (error instanceof Error || error instanceof FirebaseError) {
        parseError(error?.message);
        setSubmitRequstState((state) => ({ ...state, error }));
        parseError(error.message);
      }
    } finally {
      setSubmitRequstState((state) => ({ ...state, loading: false }));
    }
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

  const updateAccount = async () => {
    setPhoneConfirmation(null);
    if (getTokenForAPI && updateData) {
      try {
        await AccountApi.updateAccount({
          payload: updateData,
        });
      } catch (error: unknown) {
        if (error instanceof Error || error instanceof FirebaseError) {
          parseError(error?.message);
        }
      }
    }
  };

  return (
    <FormProvider {...form}>
      {submitRequstState.loading && (
        <CardModal closeable={false}>
          <ActivityIndicator size="large" />
        </CardModal>
      )}
      <CompositionSection padding={[35, 30, 8, 30]} zIndex={2}>
        <StyledHeader>
          {t("others:forms.userRegistration.userRegistration")}
        </StyledHeader>
        <StyledSubheader>
          {t("others:forms.userRegistration.enterDetails")}
        </StyledSubheader>
        <SectionContent>
          <InputControlLabel marginBottom={"0"}>
            {t("others:forms.generic.name")}
          </InputControlLabel>
          <FormTextInput
            name="registrationUserForm.name"
            label={t("others:forms.generic.name")}
            styles={{ wrapper: { marginTop: 6, marginBottom: 10 } }}
            rules={{
              required: true,
            }}
            error={errors?.registrationUserForm?.name}
          />
          <InputControlLabel marginBottom={"14px"}>
            {t("others:forms.userRegistration.preferredLanguage")}
          </InputControlLabel>
          <FormLanguageDropdown
            name="registrationUserForm.preferredLanguage"
            rules={{
              required: true,
            }}
            error={errors?.registrationUserForm?.preferredLanguage}
          />
        </SectionContent>
      </CompositionSection>
      <CompositionSection padding={[0, 30, 0, 30]} zIndex={1}>
        <SectionContent>
          <InputControlLabel marginBottom={"14px"}>
            {t("refugeeAddForm.phoneLabel")}
          </InputControlLabel>
          <FormPhoneInputWrapper>
            <FormPhoneInput
              prefixName="registrationUserForm.phonePrefix"
              numberName="registrationUserForm.phoneNumber"
              phonePrefixLabel={t("hostAdd.country")}
              phoneLabel={"_ _ _  _ _ _  _ _ _"}
              error={errors?.registrationUserForm?.phoneNumber}
              errorMsg=""
              data={generatePhonePrefixDropdownList(phonePrefixDropdownList)}
            />
          </FormPhoneInputWrapper>
        </SectionContent>
      </CompositionSection>
      <CompositionSection padding={[0, 30, 10, 26]}>
        <SectionContent>
          <SmsNotificationInput
            wrapperStyleProp={css`
              align-items: flex-start;
            `}
            name="registrationUserForm.smsNotification"
            rules={{
              required: false,
            }}
          />
        </SectionContent>
      </CompositionSection>
      <CompositionSection padding={[0, 30, 8, 30]}>
        <SectionContent>
          <InputControlLabel marginBottom={"0"}>
            {t("others:forms.generic.emailAddress")}
          </InputControlLabel>
          <FormTextInputWrapper>
            <FormTextInput
              name="registrationUserForm.email"
              label={t("others:forms.generic.email")}
              rules={{
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: t("validations.invalidEmail"),
                },
              }}
              error={errors?.registrationUserForm?.email}
            />
          </FormTextInputWrapper>
        </SectionContent>
      </CompositionSection>
      <CompositionSection padding={[0, 30, 0, 30]}>
        <SectionContent>
          <InputControlLabel marginBottom={"0"}>
            {t("others:forms.generic.password")}
          </InputControlLabel>
          <FormTextInput
            name={"registrationUserForm.password"}
            label={t("others:forms.userRegistration.password")}
            secureTextEntry={!isShowPasswordChecked}
            styles={{ wrapper: { marginTop: 6, marginBottom: 10 } }}
            rules={{
              required: true,
              maxLength: 50,
              minLength: 8,
            }}
            error={errors?.registrationUserForm?.password}
          />
          <InputControlLabel marginBottom={"0"}>
            {t("others:forms.userRegistration.confirmPassword")}
          </InputControlLabel>
          <FormTextInput
            styles={{ wrapper: { marginTop: 6, marginBottom: 10 } }}
            name={"registrationUserForm.passwordConfirm"}
            label={t("others:forms.userRegistration.confirmPassword")}
            secureTextEntry={!isShowPasswordChecked}
            rules={{
              required: true,
              maxLength: 50,
              minLength: 8,
              validate: (value) => value === passwordInputRef.current,
            }}
            error={errors?.registrationUserForm?.passwordConfirm}
            errorMsg={t(
              "others:forms.userRegistration.validations.passwordMismatch"
            )}
          />
          <FormCheckbox
            isCentered={false}
            rules={{
              required: false,
            }}
            name="registrationUserForm.showPassword"
            label={` ${t("others:common.actions.showPassword")}`}
          />
          {(submitRequstState.error || mutation.error) && (
            <StyledErrorMessage>{apiError}</StyledErrorMessage>
          )}
        </SectionContent>
      </CompositionSection>
      <CompositionSection padding={[35, 30, 24, 30]}>
        <SectionContent>
          <CompositionRow>
            <InputControl styles={buttonStyles}>
              <ButtonCta
                style={buttonStyles.backButton}
                disabled={submitRequstState.loading}
                anchor={t("others:common.buttons.back")}
                onPress={() => router.push(Routes.HOMEPAGE)}
              />
            </InputControl>
            <InputControl styles={buttonStyles}>
              <ButtonCta
                onPress={handleSubmit(onSubmit)}
                anchor={t("others:common.buttons.next")}
                style={buttonStyles.nextButton}
              />
            </InputControl>
          </CompositionRow>
          <View style={{ display: "none" }} nativeID="recaptcha__container" />
          {phoneConfirmation ? (
            <SmsVerificationModal
              mode="LINK"
              callback={updateAccount}
              phoneNumber={phoneNumber}
              confirmation={phoneConfirmation}
              close={() => setPhoneConfirmation(null)}
              setVerificationSuccess={setSmsVerificationSuccess}
            />
          ) : (
            <></>
          )}
          {smsVerificationSuccess ? <SmsVerificationSuccessModal /> : <></>}
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
