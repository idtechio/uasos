import { useTranslation } from "next-i18next";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled, { css } from "styled-components/native";
import CheckboxField from "../../../Forms/CheckboxField";
import { EditProfileForm } from "../types";

const Wrapper = styled.View`
  margin-top: 35px;
  margin-bottom: 0px;
`;

const textStyle = css`
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;
  color: #003566;
`;

const wrapperStyle = css`
  margin-bottom: 0px;
`;

export default function SmsNotificationInput() {
  const { control } = useFormContext<EditProfileForm>();
  const { t } = useTranslation("others");
  return (
    <Wrapper>
      <Controller
        control={control}
        name="smsNotification"
        render={({ field: { value, onChange } }) => (
          <CheckboxField
            value={value || false}
            onChange={onChange}
            text={t("forms.userRegistration.agreeOnSmsCommunication")}
            wrapperStyle={wrapperStyle}
            textStyle={textStyle}
          />
        )}
      />
    </Wrapper>
  );
}
