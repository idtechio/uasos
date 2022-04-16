import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormType } from "../../helpers/FormTypes";
import { CompositionSection } from "../Compositions";
import { FormHeader, Spacer } from "../FormLogin";
import FormContainer from "../FormLogin/FormContainer";
import FormTextInput from "../Inputs/FormTextInput";
import { useTranslation } from "react-i18next";
import { ButtonCta, ButtonSM } from "../Buttons";
import FormPhoneInput from "../Inputs/FormPhoneInput";
import { generatePhonePrefixDropdownList } from "../Inputs/FormPhoneInput/helpers";
import { addHostPhonePrefixList } from "../FormAdHost/AddHostPhonePrefixList.data";
import { InputCotrolLabel as InputControlLabel } from "../Forms";
import { FormFooter, ErrorText } from "./styles";
import { styles } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../../pages/_app";
import { Authorization } from "../../hooks/useAuth";
import { ConfirmationResult } from "firebase/auth";
import SmsVerificationModal from "../SmsVerificationModal";
import SmsVerificationSuccessModal from "../SmsVerificationSuccessModal";
import { AccountApi } from "../../client-api/account";
import FormLanguageDropdown from "../Inputs/FormLanguageDropdown";
import { FirebaseError } from "@firebase/util";
import { css } from "styled-components/native";
import SmsNotificationInput from "../EditUserProfileForm/DetailsForm/Inputs/SmsNotificationInput";

export default function FromRegisterWithSocials() {
  const { t } = useTranslation();
  const { identity, account } = useContext(AuthContext);
  const [phoneLoginConfirmation, setPhoneLoginConfirmation] =
    useState<ConfirmationResult | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [smsVerificationSuccess, setSmsVerificationSuccess] =
    useState<boolean>(false);
  const [data, setData] = useState<{
    name: string;
    preferredLang: string;
    smsNotification: boolean;
  }>();
  const [apiError, setApiError] = useState<string>("");
  const parseError = (error: string) => {
    if (error.includes("email-already-exists")) {
      setApiError(t("others:userRegistration.errors.emailExists"));
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
      setApiError(t("others:common.sms.verificationFail"));
    }
  };
  const provider = identity?.providerData
    .map((provider) => provider.providerId)
    .includes("google.com")
    ? "google"
    : identity?.providerData
        .map((provider) => provider.providerId)
        .includes("facebook.com")
    ? "facebook"
    : "";
  const form = useForm<FormType>({
    defaultValues: {
      registerWithSocials: {
        name: provider
          ? identity && identity.displayName
            ? identity?.displayName.split(" ")[0]
            : ""
          : account?.name,
        email: identity && identity.email ? identity?.email : "",
        smsNotification: true,
        preferredLanguage: "pl",
      },
    },
  });
  const { handleSubmit } = form;

  const onSubmit = async (e: Pick<FormType, "registerWithSocials">) => {
    setData({
      name: e.registerWithSocials.name,
      preferredLang: e.registerWithSocials.preferredLanguage,
      smsNotification: e.registerWithSocials.smsNotification,
    });
    setIsLoading(true);
    try {
      let confirmation = null;
      if (identity) {
        confirmation = await Authorization.linkWithPhone(
          e.registerWithSocials.phonePrefix + e.registerWithSocials.phoneNumber,
          Authorization.initCaptcha("captcha__container")
        );
      }
      setPhoneLoginConfirmation(confirmation);
      setPhoneNumber(
        e.registerWithSocials.phonePrefix + e.registerWithSocials.phoneNumber
      );
    } catch (error: unknown) {
      if (error instanceof Error || error instanceof FirebaseError) {
        parseError(error?.message);
      }
    }
    setIsLoading(false);
  };

  const updateAccount = async () => {
    if (data) {
      await AccountApi.updateAccount({
        payload: data,
      });
    }
  };

  const {
    formState: { errors },
    watch,
  } = form;

  const smsNotification = watch("registerWithSocials.smsNotification");

  return (
    <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
      <div style={{ display: "none" }} id="captcha__container"></div>
      <FormContainer>
        <FormHeader>
          {t("others:forms.userRegistration.userRegistration")}
        </FormHeader>
        {provider === "facebook" || provider === "google" ? (
          <ButtonSM
            id={provider}
            onPress={() => null}
            anchor={
              provider === "facebook"
                ? t("others:forms.login.signInFacebook")
                : t("others:forms.login.signInGoogle")
            }
          />
        ) : (
          <></>
        )}
        <Spacer />
        <FormProvider {...form}>
          <InputControlLabel marginBottom="10px">
            {t("others:forms.generic.name")}
          </InputControlLabel>
          <FormTextInput
            name="registerWithSocials.name"
            label={t("others:forms.generic.name")}
            rules={{
              required: true,
            }}
            error={errors?.registerWithSocials?.name}
            errorMsg={t("hostAdd.errors.name")}
            styles={{ wrapper: { marginBottom: 12 } }}
          />
          <InputControlLabel>
            {t("others:forms.userRegistration.preferredLanguage")}
          </InputControlLabel>
          <FormLanguageDropdown
            name="registerWithSocials.preferredLanguage"
            rules={{
              required: true,
            }}
            error={errors?.registrationUserForm?.preferredLanguage}
            errorMsg={t("registrationUserForm.errors.preferredLanguage")}
          />
          {/* <PreferredLanguageInput></PreferredLanguageInput> */}

          <InputControlLabel style={{ marginTop: 12 }}>
            {t("others:forms.generic.email")}
          </InputControlLabel>
          <FormTextInput
            zIndex={-1}
            styles={{
              wrapper: { height: "auto", marginBottom: "12px", zIndex: -1 },
            }}
            name="registerWithSocials.email"
            label={t("others:forms.generic.email")}
            rules={{
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t("validations.invalidEmail"),
              },
            }}
            error={errors?.registerWithSocials?.email}
            errorMsg={t("hostAdd.errors.email")}
            readonly={true}
          />

          <CompositionSection padding={[0, 0, 0, 0]} zIndex={1}>
            <InputControlLabel>
              {t("others:forms.generic.phoneNumber")}
            </InputControlLabel>
            <FormPhoneInput
              prefixName="registerWithSocials.phonePrefix"
              numberName="registerWithSocials.phoneNumber"
              phonePrefixLabel={t("others:forms.generic.country")}
              phoneLabel={t("_ _ _  _ _ _  _ _ _")}
              errorPrefix={errors?.registerWithSocials?.phonePrefix}
              errorPrefixMsg={t("hostAdd.errors.country")}
              error={errors?.registerWithSocials?.phoneNumber}
              errorMsg={t("hostAdd.errors.phoneNumber")}
              data={generatePhonePrefixDropdownList(addHostPhonePrefixList)}
            />
          </CompositionSection>
          <CompositionSection padding={[20, 0, 0, 0]}>
            <SmsNotificationInput
              wrapperStyleProp={css`
                align-items: flex-start;
              `}
              name="registerWithSocials.smsNotification"
              rules={{
                required: false,
              }}
            />
          </CompositionSection>

          <FormFooter>
            <ButtonCta
              onPress={() => Authorization.logOut()}
              anchor={t("others:common.buttons.back")}
              style={styles.backButton}
            />
            <ButtonCta
              disabled={isLoading}
              onPress={handleSubmit(onSubmit, () => {})}
              anchor={t("others:common.buttons.verify")}
              style={styles.verifyButton}
            />
          </FormFooter>
        </FormProvider>
        {phoneLoginConfirmation ? (
          <SmsVerificationModal
            callback={updateAccount}
            mode="LINK"
            phoneNumber={phoneNumber}
            confirmation={phoneLoginConfirmation}
            setVerificationSuccess={setSmsVerificationSuccess}
            close={() => setPhoneLoginConfirmation(null)}
          />
        ) : (
          <></>
        )}
        {smsVerificationSuccess ? <SmsVerificationSuccessModal /> : <></>}
        {apiError ? <ErrorText>{apiError}</ErrorText> : <></>}
      </FormContainer>
    </CompositionSection>
  );
}
