import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormType } from "../../helpers/FormTypes";
import { useSessionUserData } from "../../hooks/useSessionUserData";
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
import FormDropdown from "../Inputs/FormDropdown";
import { styles } from "./styles";

export default function FromRegisterWithSocials() {
  const { t } = useTranslation();
  const { name: sessionName, email: sessionEmail } = useSessionUserData();
  const form = useForm<FormType>({
    defaultValues: {
      advancedHost: {
        name: sessionName ? sessionName.split(" ")[0] : "",
        email: sessionEmail,
        country: "poland",
      },
    },
  });

  const {
    formState: { errors, isValid, isSubmitted },
  } = form;
  return (
    <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
      <FormContainer>
        <FormHeader>{"Fill in the missing data"}</FormHeader>
        <ButtonSM
          id={"google"}
          onPress={() => null}
          anchor={`${t("loginForm.logInWith")} with Google`}
        />
        <Spacer />
        <FormProvider {...form}>
          <InputControlLabel>{"Name"}</InputControlLabel>
          <FormTextInput
            name="advancedHost.name"
            label={t("hostAdd.namePlaceholder")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.name}
            errorMsg={t("hostAdd.errors.name")}
          />
          <InputControlLabel>
            {"Preffered language of communication"}
          </InputControlLabel>
          <FormDropdown
            zIndex={12}
            data={[]}
            name="advancedHost.accommodationType"
            placeholder={t("forms.chooseFromList")}
            rules={{
              required: true,
            }}
            error={errors?.advancedHost?.accommodationType}
            errorMsg={t("hostAdd.errors.type")}
          />
          <InputControlLabel>{t("hostAdd.emailLabel")}</InputControlLabel>
          <FormTextInput
            name="advancedHost.email"
            label={t("hostAdd.emailPlaceholder")}
            rules={{
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t("validations.invalidEmail"),
              },
            }}
            error={errors?.advancedHost?.email}
            errorMsg={t("hostAdd.errors.email")}
          />
          <InputControlLabel>{t("hostAdd.phoneLabel")}</InputControlLabel>
          <FormPhoneInput
            prefixName="advancedHost.phonePrefix"
            numberName="advancedHost.phoneNumber"
            phonePrefixLabel={t("hostAdd.phonePrefixPlaceholder")}
            phoneLabel={t("hostAdd.phonePlaceholder")}
            error={errors?.advancedHost?.phoneNumber}
            errorMsg={t("hostAdd.errors.phoneNumber")}
            data={generatePhonePrefixDropdownList(addHostPhonePrefixList)}
          />
          <FormFooter>
            {" "}
            <ButtonCta
              onPress={() => null}
              anchor={"Back"}
              style={styles.backButton}
            />
            <ButtonCta
              onPress={() => null}
              anchor={"Verify"}
              style={styles.verifyButton}
            />
          </FormFooter>
        </FormProvider>
      </FormContainer>
    </CompositionSection>
  );
}
