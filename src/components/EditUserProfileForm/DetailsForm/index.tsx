import { User } from "firebase/auth";
import { useTranslation } from "next-i18next";
import React, { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components/native";
import { getAccountDTO } from "../../../client-api/account";
import { useEditAccount } from "../../../queries/useAccount";
import ButtonCta from "../../EditOfferOptions/ButtonCta";
import Inputs from "./Inputs";
import { ContentContainer, FormHeader, ScreenHeader } from "./style";
import { EditProfileForm } from "./types";

const FormFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 119px;
`;

const getPhoneNumberWithoutPrefix = (phone: string) =>
  phone
    .split("")
    .reverse()
    .join("")
    .substring(0, 9)
    .split("")
    .reverse()
    .join("");

const getPhonePrefix = (phone: string) =>
  phone
    .split("")
    .reverse()
    .filter((_, index) => index >= 9)
    .reverse()
    .join("");

const getFormDefaultValues = (
  account: getAccountDTO | null,
  identity: User | null | undefined
) => ({
  email: identity?.email || undefined,
  phone: identity?.phoneNumber
    ? getPhoneNumberWithoutPrefix(identity.phoneNumber)
    : undefined,
  name: account?.name || undefined,
  preferredLanguage: account?.prefferedLang || undefined,
  phonePrefix: identity?.phoneNumber
    ? getPhonePrefix(identity.phoneNumber)
    : undefined,
});

export default function UserDetailsForm({
  account,
  identity,
  onSuccess,
}: {
  account: getAccountDTO | null;
  identity?: User | null;
  onSuccess(): void;
}) {
  const { t } = useTranslation("others");
  const { mutate, isLoading } = useEditAccount();
  const form = useForm<EditProfileForm>({
    defaultValues: getFormDefaultValues(account, identity),
  });
  const { handleSubmit } = form;

  const onSubmit = useCallback(
    async (data: EditProfileForm) => {
      const payload = {
        name: data.name,
        email: data.email,
        phone: `${data.phonePrefix}${data.phone}`,
        prefferedLang: data.preferredLanguage,
      };

      onSuccess();

      // mutate(
      //   { payload },
      //   {
      //     onError: () => {
      //       // Set error message
      //     },
      //   }
      // );
    },
    [mutate, onSuccess]
  );

  return (
    <FormProvider {...form}>
      <ContentContainer>
        <ScreenHeader>{t("forms.userProfile.header")}</ScreenHeader>
        <FormHeader>{t("forms.userRegistration.enterDetails")}</FormHeader>
        <Inputs />

        <FormFooter>
          <ButtonCta
            color="primary"
            variant="outlined"
            anchor={t("common.buttons.cancel")}
            disabled={isLoading}
          />
          <ButtonCta
            disabled={isLoading}
            anchor={t("common.buttons.update")}
            onPress={handleSubmit(onSubmit)}
          />
        </FormFooter>
      </ContentContainer>
    </FormProvider>
  );
}
