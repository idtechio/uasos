import { useRef, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import {
  StyledText,
  Wrapper,
  StyledHeader,
  StyledInput,
  InputWrapper,
} from "./style";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import Image from "next/image";
import SmsSent from "../../../public/assets/SmsSent.png";
import { ConfirmationResult } from "firebase/auth";
import { Authorization } from "../../hooks/useAuth";

interface Props {
  phoneNumber: string;
  confirmation: ConfirmationResult;
  setVerificationSuccess: (success: boolean) => void;
}
export default function SmsVerificationModal({
  phoneNumber,
  confirmation,
  setVerificationSuccess,
}: Props) {
  const [resending, setResending] = useState<boolean>(false);
  const [resendConfirmation, setResendConfirmation] =
    useState<ConfirmationResult | null>(null);

  const handleResend = async () => {
    setResending(true);
    try {
      console.log("resending");
      const confirm = await Authorization.signInWithPhone(
        phoneNumber,
        Authorization.initCaptcha("recaptcha__container")
      );
      setResendConfirmation(confirm);
    } catch (err) {
      return null;
    }
  };
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
      } catch (err) {
        return null;
      }
    } else {
      try {
        await confirmation.confirm(code);
        setVerificationSuccess(true);
      } catch (err) {
        return null;
      }
    }
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <CardModal closeable={false}>
      <div style={{ display: "none" }} id="recaptcha__container"></div>
      <Wrapper>
        <Image src={SmsSent}></Image>
        <StyledHeader>SMS verification</StyledHeader>
        <StyledText>
          Enter the verification code sent to the phone number {phoneNumber}.
        </StyledText>
        <InputWrapper>
          <FormProvider {...formFields}>
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  ref={ref1}
                  onChange={(newValue) => {
                    onChange(newValue);
                    ref2.current.focus();
                  }}
                />
              )}
              name="1"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  ref={ref2}
                  onChange={(newValue) => {
                    onChange(newValue);
                    ref3.current.focus();
                  }}
                />
              )}
              name="2"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  ref={ref3}
                  onChange={(newValue) => {
                    onChange(newValue);
                    ref4.current.focus();
                  }}
                />
              )}
              name="3"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  ref={ref4}
                  onChange={(newValue) => {
                    onChange(newValue);
                    ref5.current.focus();
                  }}
                />
              )}
              name="4"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  ref={ref5}
                  onChange={(newValue) => {
                    onChange(newValue);
                    ref6.current.focus();
                  }}
                />
              )}
              name="5"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <StyledInput
                  ref={ref6}
                  onChange={(newValue) => {
                    onChange(newValue);
                  }}
                />
              )}
              name="6"
            />
          </FormProvider>
        </InputWrapper>
        <ButtonCta
          onPress={handleSubmit(onSubmit, onError)}
          anchor={"Verify"}
          style={{ width: "100px", marginTop: "30px" }}
        />
        <TouchableOpacity onPress={handleResend}>
          <StyledText>Re-send code</StyledText>
        </TouchableOpacity>
      </Wrapper>
    </CardModal>
  );
}
