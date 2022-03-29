import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormType } from "../../helpers/FormTypes";
import { CompositionSection } from "../Compositions";
import { FormHeader, Spacer } from "../FormLogin";
import FormContainer from "../FormLogin/FormContainer";
import FormTextInput from "../Inputs/FormTextInput";
import { useTranslation } from "react-i18next";
import { ButtonCta, ButtonSM } from "../Buttons";
import FormPhoneInput from "../Inputs/FormPhoneInput/FormPhoneInput";
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
import PreferredLanguageInput from "./Inputs/PreferredLanguageInput";
import { AccountApi } from "../../client-api/account";

export default function FromRegisterWithSocials() {
  const { t } = useTranslation();
  const { identity, getTokenForAPI } = useContext(AuthContext);
  const [phoneLoginConfirmation, setPhoneLoginConfirmation] =
    useState<ConfirmationResult | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [smsVerificationSuccess, setSmsVerificationSuccess] =
    useState<boolean>(false);
  const [data, setData] = useState<{ name: string; prefferedLang: string }>();
  const [apiError, setApiError] = useState<string>("");
  const form = useForm<FormType>({
    defaultValues: {
      registerWithSocials: {
        name:
          identity && identity.displayName
            ? identity?.displayName.split(" ")[0]
            : "",
        email: identity && identity.email ? identity?.email : "",
        language: "Poland",
      },
    },
  });
  const { handleSubmit } = form;

  const onSubmit = async (e: any) => {
    setData({
      name: e.registerWithSocials.name,
      prefferedLang: e.registerWithSocials.prefferedLanguage,
    });
    try {
      let confirmation = null;
      if (identity) {
        confirmation = await Authorization.linkWithPhone(
          identity,
          e.registerWithSocials.phonePrefix + e.registerWithSocials.phoneNumber,
          Authorization.initCaptcha("captcha__container")
        );
      }
      setPhoneLoginConfirmation(confirmation);
      setPhoneNumber(
        e.registerWithSocials.phonePrefix + e.registerWithSocials.phoneNumber
      );
    } catch (error: any) {
      setApiError(error?.message);
    }
  };
  const updateAccount = async () => {
    if (getTokenForAPI && data) {
      await AccountApi.updateAccount({
        payload: data,
        token: await getTokenForAPI(),
      });
    }
  };

  const onError = (e: any) => {
    console.log(e);
  };

  const {
    formState: { errors, isValid, isSubmitted },
  } = form;

  const provider = identity?.providerData
    .map((provider) => provider.providerId)
    .includes("google.com")
    ? "google"
    : "facebook";

  return (
    <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
      <div style={{ display: "none" }} id="captcha__container"></div>
      <FormContainer>
        <FormHeader>
          {t("others:forms.userRegistration.userRegistration")}
        </FormHeader>
        <ButtonSM
          id={provider}
          onPress={() => null}
          anchor={
            provider === "facebook"
              ? t("others:forms.login.signInFacebook")
              : t("others:forms.login.signInGoogle")
          }
        />
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
          />
          <InputControlLabel>
            {t("others:forms.userRegistration.preferredLanguage")}
          </InputControlLabel>
          <PreferredLanguageInput></PreferredLanguageInput>
          <InputControlLabel>
            {t("others:forms.generic.email")}
          </InputControlLabel>
          <FormTextInput
            styles={{ wrapper: { height: "auto", marginBottom: "15px" } }}
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
          <InputControlLabel>
            {t("others:forms.generic.phoneNumber")}
          </InputControlLabel>
          <FormPhoneInput
            prefixName="registerWithSocials.phonePrefix"
            numberName="registerWithSocials.phoneNumber"
            phonePrefixLabel={t("others:forms.generic.country")}
            phoneLabel={t("hostAdd.phonePlaceholder")}
            error={errors?.advancedHost?.phoneNumber}
            errorMsg={t("hostAdd.errors.phoneNumber")}
            data={generatePhonePrefixDropdownList(addHostPhonePrefixList)}
          />
          <FormFooter>
            <ButtonCta
              onPress={() => Authorization.logOut()}
              anchor={t("others:common.buttons.back")}
              style={styles.backButton}
            />
            <ButtonCta
              onPress={handleSubmit(onSubmit, onError)}
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
