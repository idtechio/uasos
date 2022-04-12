import { User } from "firebase/auth";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components/native";
import { AuthContext } from "../../../../pages/_app";
import { getAccountDTO } from "../../../client-api/account";
import { Authorization } from "../../../hooks/useAuth";
import { useEditAccount } from "../../../queries/useAccount";
import ButtonCta from "../../EditOfferOptions/ButtonCta";
import Inputs from "./Inputs";
import {
  ContentContainer,
  ErrorText,
  FormHeader,
  ScreenHeader,
  SuccessMessage,
} from "./style";
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

const getFormDefaultValues: (
  account: getAccountDTO | null,
  identity: User | null | undefined
) => Partial<EditProfileForm> = (account, identity) => {
  return {
    email: identity?.email || undefined,
    phone: identity?.phoneNumber
      ? getPhoneNumberWithoutPrefix(identity.phoneNumber)
      : undefined,
    name: account?.name || undefined,
    preferredLanguage: account?.preferredLang || undefined,
    phonePrefix: identity?.phoneNumber
      ? getPhonePrefix(identity.phoneNumber)
      : undefined,
    smsNotification: account?.smsNotification.valueOf(),
  };
};

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
  const { refetchAccount } = useContext(AuthContext);
  const router = useRouter();
  const { mutate, isLoading, isSuccess, isError } = useEditAccount();
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
        preferredLang: data.preferredLanguage,
        smsNotification: data.smsNotification ?? false,
      };
      await Authorization.updateMail(payload.email);
      mutate(
        { payload },
        {
          onError: () => {
            // Set error message
          },
          onSuccess: async () => {
            if (refetchAccount) {
              await refetchAccount();
              router.push("/dashboard");
            }
            onSuccess();
          },
        }
      );
    },
    [mutate, onSuccess]
  );

  return (
    <FormProvider {...form}>
      <ContentContainer>
        <ScreenHeader>{t("forms.userProfile.header")}</ScreenHeader>
        <FormHeader>{t("forms.userRegistration.enterDetails")}</FormHeader>
        <Inputs />

        <FormFooter style={{ flexWrap: "wrap" }}>
          {isSuccess && <SuccessMessage>Success</SuccessMessage>}
          {isError && <ErrorText>Error</ErrorText>}

          <ButtonCta
            color="primary"
            variant="outlined"
            anchor={t("common.buttons.cancel")}
            disabled={isLoading}
            onPress={() => router.push("/dashboard")}
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
