/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext, useRef } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";

import {
  StyledText,
  Wrapper,
  StyledHeader,
  StyledInput,
  InputWrapper,
  ErrorText,
} from "./style";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import Image from "next/image";
import SmsSent from "../../../public/assets/SmsSent.png";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  PhoneAuthProvider,
} from "firebase/auth";
import { Authorization } from "../../hooks/useAuth";
import { AuthContext } from "../../../pages/_app";
import { useTranslation } from "next-i18next";
import { FirebaseError } from "@firebase/util";
import { CloseButton } from "../EditOfferOptions/style";

type FormType = {
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
};

interface Props {
  phoneNumber: string;
  confirmation?: ConfirmationResult;
  setVerificationSuccess: (success: boolean) => void;
  mode: "LOGIN" | "UPDATE" | "LINK";
  callback: () => void;
  verificationId?: string;
  close?(): void;
}
export default function SmsVerificationModal({
  phoneNumber,
  confirmation,
  setVerificationSuccess,
  mode,
  callback,
  verificationId,
  close,
}: Props) {
  const { t } = useTranslation();
  const { identity } = useContext(AuthContext);
  const [resending, setResending] = useState<boolean>(false);
  const [resendConfirmation, setResendConfirmation] =
    useState<ConfirmationResult | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleResendLogin = async () => {
    setResending(true);
    try {
      const confirm = await Authorization.signInWithPhone(
        phoneNumber,
        Authorization.recaptcha as RecaptchaVerifier
      );
      setResendConfirmation(confirm);
    } catch (error: unknown) {
      if (error instanceof Error || error instanceof FirebaseError) {
        parseError(error?.message);
      }
    }
  };
  const handleResendLink = async () => {
    setResending(true);

    try {
      if (identity) {
        const confirm = await Authorization.linkWithPhone(
          phoneNumber,
          Authorization.recaptcha as RecaptchaVerifier
        );
        setResendConfirmation(confirm);
      }
    } catch (error: unknown) {
      if (error instanceof Error || error instanceof FirebaseError) {
        parseError(error?.message);
      }
    }
  };

  const handleResendUpdate = () => {
    return null;
  };

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
  const handleResend =
    mode === "LINK"
      ? handleResendLink
      : mode === "LOGIN"
      ? handleResendLogin
      : handleResendUpdate;
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const ref3 = useRef<any>(null);
  const ref4 = useRef<any>(null);
  const ref5 = useRef<any>(null);
  const ref6 = useRef<any>(null);
  const formFields = useForm<FormType>();
  const {
    handleSubmit,
    // register,
    control,
    // formState,
  } = formFields;
  const onSubmit = async (data: FormType) => {
    const code =
      data["1"] + data["2"] + data["3"] + data["4"] + data["5"] + data["6"];
    setIsLoading(true);
    if (resending) {
      try {
        await resendConfirmation?.confirm(code);

        setVerificationSuccess(true);
      } catch (error: unknown) {
        if (error instanceof Error || error instanceof FirebaseError) {
          parseError(error?.message);
        }
      }
    } else {
      try {
        if (mode === "UPDATE" && verificationId) {
          const phoneCredential = PhoneAuthProvider.credential(
            verificationId,
            code
          );
          await Authorization.updatePhone(phoneCredential);
        } else {
          await confirmation?.confirm(code);
        }
        setVerificationSuccess(true);
        callback();
      } catch (error: unknown) {
        if (error instanceof Error || error instanceof FirebaseError) {
          parseError(error?.message);
        }
      }
    }
    setIsLoading(false);
  };

  const onError = () => {
    setError("Must be a digit");
  };

  return (
    <CardModal closeable={false}>
      <View style={{ display: "none" }} nativeID="recaptcha__container" />
      <Wrapper>
        {close && <CloseButton onPress={close} />}
        <Image src={SmsSent} alt=""></Image>
        <StyledHeader>{t("others:common.sms.verification")}</StyledHeader>
        <StyledText>
          {t("others:common.sms.sentInfo", { phoneNumber })}
        </StyledText>
        <InputWrapper>
          <FormProvider {...formFields}>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                pattern: /\d/,
              }}
              render={({ field: { onChange, onBlur: _, value } }) => (
                <StyledInput
                  borderColor={error ? "red" : ""}
                  value={value}
                  // eslint-disable-next-line
                  ref={ref1 as any}
                  keyboardType="numeric"
                  onChange={(newValue) => {
                    setError(null);
                    setApiError("");
                    if (
                      !isNaN(Number(newValue.nativeEvent.text)) &&
                      newValue.nativeEvent.text.length < 2
                    ) {
                      onChange(newValue);
                      if (newValue.nativeEvent.text) {
                        ref2.current?.focus();
                      }
                    }
                  }}
                />
              )}
              name="1"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                pattern: /\d/,
              }}
              render={({ field: { onChange, onBlur: _, value } }) => (
                <StyledInput
                  borderColor={error ? "red" : ""}
                  // eslint-disable-next-line
                  ref={ref2 as any}
                  keyboardType="numeric"
                  value={value}
                  onChange={(newValue) => {
                    setError(null);
                    setApiError("");
                    if (
                      !isNaN(Number(newValue.nativeEvent.text)) &&
                      newValue.nativeEvent.text.length < 2
                    ) {
                      onChange(newValue);
                      if (newValue.nativeEvent.text) {
                        ref3.current?.focus();
                      }
                    }
                  }}
                />
              )}
              name="2"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                pattern: /\d/,
              }}
              render={({ field: { onChange, onBlur: _, value } }) => (
                <StyledInput
                  borderColor={error ? "red" : ""}
                  value={value}
                  // eslint-disable-next-line
                  ref={ref3 as any}
                  keyboardType="numeric"
                  onChange={(newValue) => {
                    setError(null);
                    setApiError("");
                    if (
                      !isNaN(Number(newValue.nativeEvent.text)) &&
                      newValue.nativeEvent.text.length < 2
                    ) {
                      onChange(newValue);
                      if (newValue.nativeEvent.text) {
                        ref4.current?.focus();
                      }
                    }
                  }}
                />
              )}
              name="3"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                pattern: /\d/,
              }}
              render={({ field: { onChange, onBlur: _, value } }) => (
                <StyledInput
                  borderColor={error ? "red" : ""}
                  value={value}
                  // eslint-disable-next-line
                  ref={ref4 as any}
                  keyboardType="numeric"
                  onChange={(newValue) => {
                    setError(null);
                    setApiError("");
                    if (
                      !isNaN(Number(newValue.nativeEvent.text)) &&
                      newValue.nativeEvent.text.length < 2
                    ) {
                      onChange(newValue);
                      if (newValue.nativeEvent.text) {
                        ref5.current?.focus();
                      }
                    }
                  }}
                />
              )}
              name="4"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                pattern: /\d/,
              }}
              render={({ field: { onChange, onBlur: _, value } }) => (
                <StyledInput
                  borderColor={error ? "red" : ""}
                  value={value}
                  // eslint-disable-next-line
                  ref={ref5 as any}
                  keyboardType="numeric"
                  onChange={(newValue) => {
                    setError(null);
                    setApiError("");
                    if (
                      !isNaN(Number(newValue.nativeEvent.text)) &&
                      newValue.nativeEvent.text.length < 2
                    ) {
                      onChange(newValue);
                      if (newValue.nativeEvent.text) {
                        ref6.current?.focus();
                      }
                    }
                  }}
                />
              )}
              name="5"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
                pattern: /\d/,
              }}
              render={({ field: { onChange, onBlur: _, value } }) => (
                <StyledInput
                  borderColor={error ? "red" : ""}
                  // eslint-disable-next-line
                  ref={ref6 as any}
                  value={value}
                  onChange={(newValue) => {
                    setError(null);
                    setApiError("");
                    if (
                      !isNaN(Number(newValue.nativeEvent.text)) &&
                      newValue.nativeEvent.text.length < 2
                    ) {
                      onChange(newValue);
                    }
                  }}
                  keyboardType="numeric"
                />
              )}
              name="6"
            />
          </FormProvider>
        </InputWrapper>
        {apiError ? <ErrorText>{apiError}</ErrorText> : <></>}
        <ButtonCta
          onPress={handleSubmit(onSubmit, onError)}
          anchor={t("others:common.buttons.verify")}
          style={{ width: "100px", marginTop: "30px" }}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <TouchableOpacity onPress={handleResend}>
          <StyledText>{t("others:common.links.re-sendCode")}</StyledText>
        </TouchableOpacity>
      </Wrapper>
    </CardModal>
  );
}
