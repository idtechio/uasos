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
import { FormFooter } from "./styles";
import { styles } from "./styles";
import FormLanguageDropdown from "../Inputs/FormLanguageDropdown";
import { useContext } from "react";
import { AuthContext } from "../../../pages/_app";
import { Authorization } from "../../hooks/useAuth";
import { ConfirmationResult } from "firebase/auth";
import SmsVerificationModal from "../SmsVerificationModal";
import SmsVerificationSuccessModal from "../SmsVerificationSuccessModal";
export default function FromRegisterWithSocials() {
  const { t } = useTranslation();
  const { identity } = useContext(AuthContext);
  const [phoneLoginConfirmation, setPhoneLoginConfirmation] =
    useState<ConfirmationResult | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [smsVerificationSuccess, setSmsVerificationSuccess] =
    useState<boolean>(false);
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
    // Verify phone Number
    try {
      const confirmation = await Authorization.signInWithPhone(
        e.registerWithSocials.phonePrefix + e.registerWithSocials.phoneNumber,
        Authorization.initCaptcha("captcha__container")
      );
      setPhoneLoginConfirmation(confirmation);
      setPhoneNumber(
        e.registerWithSocials.phonePrefix + e.registerWithSocials.phoneNumber
      );
    } catch (error) {
      return null;
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
        <FormHeader>{"Fill in the missing data"}</FormHeader>
        <ButtonSM
          id={provider}
          onPress={() => null}
          anchor={`${t("loginForm.logInWith")} with ${provider}`}
        />
        <Spacer />
        <FormProvider {...form}>
          <InputControlLabel>{"Name"}</InputControlLabel>
          <FormTextInput
            name="registerWithSocials.name"
            label={t("hostAdd.namePlaceholder")}
            rules={{
              required: true,
            }}
            error={errors?.registerWithSocials?.name}
            errorMsg={t("hostAdd.errors.name")}
          />
          <InputControlLabel>
            {"Preffered language of communication"}
          </InputControlLabel>
          <FormLanguageDropdown
            zIndex={12}
            name="registerWithSocials.language"
            placeholder={t("forms.chooseFromList")}
            rules={{
              required: true,
            }}
            error={errors?.registerWithSocials?.language}
            errorMsg={t("hostAdd.errors.type")}
          />
          <InputControlLabel>{t("hostAdd.emailLabel")}</InputControlLabel>
          <FormTextInput
            name="registerWithSocials.email"
            label={t("hostAdd.emailPlaceholder")}
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
          <InputControlLabel>{t("hostAdd.phoneLabel")}</InputControlLabel>
          <FormPhoneInput
            prefixName="registerWithSocials.phonePrefix"
            numberName="registerWithSocials.phoneNumber"
            phonePrefixLabel={t("hostAdd.phonePrefixPlaceholder")}
            phoneLabel={t("hostAdd.phonePlaceholder")}
            error={errors?.advancedHost?.phoneNumber}
            errorMsg={t("hostAdd.errors.phoneNumber")}
            data={generatePhonePrefixDropdownList(addHostPhonePrefixList)}
          />
          <FormFooter>
            <ButtonCta
              onPress={() => Authorization.logOut()}
              anchor={"Back"}
              style={styles.backButton}
            />
            <ButtonCta
              onPress={handleSubmit(onSubmit, onError)}
              anchor={"Verify"}
              style={styles.verifyButton}
            />
          </FormFooter>
        </FormProvider>
        {phoneLoginConfirmation ? (
          <SmsVerificationModal
            phoneNumber={phoneNumber}
            confirmation={phoneLoginConfirmation}
            setVerificationSuccess={setSmsVerificationSuccess}
          />
        ) : (
          <></>
        )}
        {smsVerificationSuccess ? <SmsVerificationSuccessModal /> : <></>}
      </FormContainer>
    </CompositionSection>
  );
}
