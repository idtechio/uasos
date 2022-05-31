import { FirebaseError } from "@firebase/util";
import { ConfirmationResult, User } from "firebase/auth";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { View } from "react-native";
import React, { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getAccountDTO } from "../../client-api/account";
import { Authorization } from "../../hooks/useAuth";
import { useEditAccount } from "../../queries/useAccount";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import { StyledErrorMessage } from "../FormRegisterUser/styles";
import SmsVerificationModal from "../SmsVerificationModal";
import { getFormDefaultValues, parseError } from "./helpers";
import Inputs from "./Inputs";
import {
  ContentContainer,
  ErrorText,
  FormHeader,
  ScreenHeader,
  SuccessMessage,
  FormFooter,
} from "./style";

import { EditProfileForm } from "./types";

type Props = {
  account: getAccountDTO | null;
  identity?: User | null;
};

type ErrorType =
  | "emailExist"
  | "phoneLinkingFailed"
  | "tooManyRequest"
  | "invalidCode";

type ApiError = `userRegistration.errors.${ErrorType}`;

const apiErrors = [
  "emailExist",
  "phoneLinkingFailed",
  "tooManyRequest",
  "invalidCode",
];

export default function EditUserProfileForm({ account, identity }: Props) {
  const router = useRouter();
  const { t } = useTranslation("others");
  const { mutate, isLoading, isSuccess, isError } = useEditAccount();

  const form = useForm<EditProfileForm>({
    defaultValues: getFormDefaultValues(account, identity),
  });
  const { handleSubmit } = form;
  const [formPayload, setFormPayload] = useState<EditProfileForm | null>(null);

  const [confirmation, setConfirmation] = useState<
    ConfirmationResult | undefined
  >(undefined);
  const [verificationId, setVerificationId] = useState<string | undefined>(
    undefined
  );
  const [smsVerificationModalMode, setSmsVerificationModalMode] = useState<
    "LINK" | "UPDATE"
  >("LINK");
  const [apiError, setApiError] = useState<string | null>(null);
  const [isVerifyPhoneModalLoading, setIsVerifyPhoneModalLoading] =
    useState<boolean>(false);

  const closeSmsVerificationModal = useCallback(() => {
    confirmation ? setConfirmation(undefined) : setVerificationId(undefined);
    setFormPayload(null);
  }, [confirmation]);

  const verifyPhone = useCallback(
    async (phone) => {
      setIsVerifyPhoneModalLoading(true);

      try {
        const captcha = Authorization.recaptcha
          ? Authorization.recaptcha
          : Authorization.initCaptcha("recaptcha__container");
        if (phone && captcha) {
          if (!identity?.phoneNumber) {
            setSmsVerificationModalMode("LINK");
            const confirm = await Authorization.linkWithPhone(phone, captcha);
            setConfirmation(confirm);
          } else if (identity?.phoneNumber !== phone) {
            setSmsVerificationModalMode("UPDATE");
            setVerificationId(
              await Authorization.initUpdatePhone(phone, captcha)
            );
          }
        }
      } catch (error: unknown) {
        if (error instanceof Error || error instanceof FirebaseError) {
          setApiError(parseError(error.message));
        }
        closeSmsVerificationModal();
      }
      setIsVerifyPhoneModalLoading(false);
    },
    [closeSmsVerificationModal, identity?.phoneNumber]
  );

  const updateUserProfile = useCallback(
    async (payload) => {
      mutate(
        { payload },
        {
          onError: () => {
            // Set error message
          },
          onSuccess: async () => {
            router.push("/dashboard");
          },
        }
      );
      await Authorization.updateMail(payload.email);
    },
    [mutate, router]
  );

  const onSubmit = useCallback(
    async (data: EditProfileForm) => {
      setApiError(null);
      const payload = {
        name: data.name,
        email: data.email,
        phone:
          data.phonePrefix && data.phone
            ? `${data.phonePrefix}${data.phone}`
            : undefined,
        preferredLang: data.preferredLanguage,
        smsNotification: data.smsNotification,
      };
      setFormPayload(payload);
      (identity?.phoneNumber === null && payload?.phone === undefined) ||
      identity?.phoneNumber === payload?.phone
        ? updateUserProfile(payload)
        : verifyPhone(payload?.phone);
    },
    [identity?.phoneNumber, updateUserProfile, verifyPhone]
  );

  return (
    <>
      <FormProvider {...form}>
        <ContentContainer>
          <ScreenHeader>{t("forms.userProfile.header")}</ScreenHeader>
          <FormHeader>{t("forms.userRegistration.enterDetails")}</FormHeader>
          <Inputs />
          {apiError && (
            <StyledErrorMessage>
              {apiErrors.includes(apiError)
                ? t(apiError as ApiError)
                : apiError}
            </StyledErrorMessage>
          )}
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
              isLoading={isLoading || isVerifyPhoneModalLoading}
              anchor={t("common.buttons.update")}
              onPress={handleSubmit(onSubmit)}
            />
          </FormFooter>
        </ContentContainer>
      </FormProvider>
      {(confirmation || verificationId) && formPayload?.phone && (
        <SmsVerificationModal
          confirmation={confirmation}
          verificationId={verificationId}
          phoneNumber={formPayload.phone}
          setVerificationSuccess={() => null}
          callback={() => updateUserProfile(formPayload)}
          close={closeSmsVerificationModal}
          mode={smsVerificationModalMode}
        />
      )}
      <View nativeID="recaptcha__container" />
    </>
  );
}
