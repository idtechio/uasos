import { FirebaseError } from "@firebase/util";
import { ConfirmationResult, User } from "firebase/auth";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
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
  const [capchaInited, setCapchaInited] = useState<boolean>(false);
  const [apiError, setApiError] = useState<
    ApiError | "Oops something went wrong" | string
  >("");
  const [isVerifyPhoneModalLoading, setIsVerifyPhoneModalLoading] =
    useState<boolean>(false);

  const verifyPhone = async () => {
    setIsVerifyPhoneModalLoading(true);
    try {
      const captcha = capchaInited
        ? Authorization.recaptcha
        : Authorization.initCaptcha("recaptcha__container");
      setCapchaInited(true);
      if (formPayload?.phone && captcha) {
        if (!identity?.phoneNumber) {
          setSmsVerificationModalMode("LINK");
          const confirm = await Authorization.linkWithPhone(
            formPayload?.phone,
            captcha
          );
          setConfirmation(confirm);
        } else if (identity?.phoneNumber !== formPayload?.phone) {
          setSmsVerificationModalMode("UPDATE");
          setVerificationId(
            await Authorization.initUpdatePhone(formPayload?.phone, captcha)
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
  };

  const onSubmit = useCallback(
    async (data: EditProfileForm) => {
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
    },
    [formPayload]
  );

  useEffect(() => {
    if (formPayload) {
      (identity?.phoneNumber === null && formPayload?.phone === undefined) ||
      identity?.phoneNumber === formPayload?.phone
        ? updateUserProfile()
        : verifyPhone();
    }
  }, [formPayload]);

  const updateUserProfile = useCallback(async () => {
    if (formPayload) {
      mutate(
        { payload: formPayload },
        {
          onError: () => {
            // Set error message
          },
          onSuccess: async () => {
            router.push("/dashboard");
          },
        }
      );
      await Authorization.updateMail(formPayload.email);
    }
  }, [formPayload, mutate, router]);

  const closeSmsVerificationModal = useCallback(() => {
    confirmation ? setConfirmation(undefined) : setVerificationId(undefined);
    setFormPayload(null);
  }, [confirmation]);

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
          setVerificationSuccess={() => console.log("success")}
          callback={updateUserProfile}
          close={closeSmsVerificationModal}
          mode={smsVerificationModalMode}
        />
      )}
      <div id={"recaptcha__container"} />
    </>
  );
}
