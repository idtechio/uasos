import { useRef, useState, useContext } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
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
import { ConfirmationResult } from "firebase/auth";
import { Authorization } from "../../hooks/useAuth";
import { AuthContext } from "../../../pages/_app";
import { useTranslation } from "next-i18next";

interface Props {
  phoneNumber: string;
  confirmation: ConfirmationResult;
  setVerificationSuccess: (success: boolean) => void;
  mode: "LOGIN" | "UPDATE" | "LINK";
  callback: () => void;
}
export default function SmsVerificationModal({
  phoneNumber,
  confirmation,
  setVerificationSuccess,
  mode,
  callback,
}: Props) {
  const { t } = useTranslation();
  const { identity } = useContext(AuthContext);
  const [resending, setResending] = useState<boolean>(false);
  const [resendConfirmation, setResendConfirmation] =
    useState<ConfirmationResult | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string>("");

  const handleResendLogin = async () => {
    setResending(true);
    try {
      const confirm = await Authorization.signInWithPhone(
        phoneNumber,
        Authorization.initCaptcha("recaptcha__container")
      );
      setResendConfirmation(confirm);
    } catch (err: any) {
      setApiError(t("others:common.sms.verificationFail"));
    }
  };
  const handleResendLink = async () => {
    setResending(true);
    try {
      if (identity) {
        const confirm = await Authorization.linkWithPhone(
          identity,
          phoneNumber,
          Authorization.initCaptcha("recaptcha__container")
        );
        setResendConfirmation(confirm);
      }
    } catch (err: any) {
      setApiError(t("others:common.sms.verificationFail"));
    }
  };

  const handleResendUpdate = () => {
    return null;
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
  const formFields = useForm<{
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
  }>();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = formFields;
  const onSubmit = async (data: {
    "1": string;
    "2": string;
    "3": string;
    "4": string;
    "5": string;
    "6": string;
  }) => {
    const code =
      data["1"] + data["2"] + data["3"] + data["4"] + data["5"] + data["6"];
    if (resending) {
      try {
        await resendConfirmation?.confirm(code);
        setVerificationSuccess(true);
      } catch (err: any) {
        setApiError(t("others:common.sms.verificationFail"));
      }
    } else {
      try {
        await confirmation.confirm(code);
        setVerificationSuccess(true);
        callback();
      } catch (err: any) {
        setApiError(t("others:common.sms.verificationFail"));
      }
    }
  };
  const onError = (error: any) => {
    setError("Must be a digit");
  };
  return (
    <CardModal closeable={false}>
      <div style={{ display: "none" }} id="recaptcha__container"></div>
      <Wrapper>
        <Image src={SmsSent}></Image>
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
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  // eslint-disable-next-line
                  // @ts-ignore
                  borderColor={error ? "red" : ""}
                  value={value}
                  ref={ref1}
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
                        ref2.current.focus();
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
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  // eslint-disable-next-line
                  // @ts-ignore
                  borderColor={error ? "red" : ""}
                  ref={ref2}
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
                        ref3.current.focus();
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
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  // eslint-disable-next-line
                  // @ts-ignore
                  borderColor={error ? "red" : ""}
                  value={value}
                  ref={ref3}
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
                        ref4.current.focus();
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
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  // eslint-disable-next-line
                  // @ts-ignore
                  borderColor={error ? "red" : ""}
                  value={value}
                  ref={ref4}
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
                        ref5.current.focus();
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
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  // eslint-disable-next-line
                  // @ts-ignore
                  borderColor={error ? "red" : ""}
                  value={value}
                  ref={ref5}
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
                        ref6.current.focus();
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
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  // eslint-disable-next-line
                  // @ts-ignore
                  borderColor={error ? "red" : ""}
                  ref={ref6}
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
        />
        <TouchableOpacity onPress={handleResend}>
          <StyledText>{t("others:common.links.re-sendCode")}</StyledText>
        </TouchableOpacity>
      </Wrapper>
    </CardModal>
  );
}
