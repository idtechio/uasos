import { useTranslation } from "next-i18next";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled, { css } from "styled-components/native";
import CheckboxField from "../../../Forms/CheckboxField";
import { FlattenSimpleInterpolation } from "styled-components";
import { FormKey } from "../../../../helpers/FormTypes";

const Wrapper = styled.View<{ wrapperStyleProp?: FlattenSimpleInterpolation }>`
  margin-top: ${(props) => (props.wrapperStyleProp ? "0" : "35px")};
  margin-bottom: 0px;
`;

const textStyle = css`
  margin-left: 5px;
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;
  color: #003566;
`;

const wrapperStyle = css`
  margin-bottom: 0px;
`;

type SmsNotificationInputProps = {
  wrapperStyleProp?: FlattenSimpleInterpolation;
  name?: FormKey;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

export default function SmsNotificationInput({
  wrapperStyleProp,
  name,
  rules,
}: SmsNotificationInputProps) {
  const { control } = useFormContext();
  const { t } = useTranslation("others");

  return (
    <Wrapper wrapperStyleProp={wrapperStyleProp}>
      <Controller
        control={control}
        name={name ?? "smsNotification"}
        rules={rules}
        render={({ field: { value, onChange } }) => (
          <CheckboxField
            value={value}
            onChange={onChange}
            text={t("forms.userRegistration.agreeOnSmsCommunication")}
            wrapperStyle={wrapperStyleProp ?? wrapperStyle}
            textStyle={textStyle}
          />
        )}
      />
    </Wrapper>
  );
}
