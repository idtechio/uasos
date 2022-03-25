import { useRef } from "react";
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

interface Props {
  phoneNumber: string;
}
export default function SmsVerificationModal({ phoneNumber }: Props) {
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
  const onSubmit = (data) => {
    console.log("xddd");
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <CardModal closeable={false}>
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
        <TouchableOpacity onPress={() => null}>
          <StyledText>Re-send code</StyledText>
        </TouchableOpacity>
      </Wrapper>
    </CardModal>
  );
}
