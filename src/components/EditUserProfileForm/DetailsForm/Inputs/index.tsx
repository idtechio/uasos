import React from "react";
import EmailInput from "./EmailInput";
import NameInput from "./NameInput";
import PhoneNumberInput from "./PhoneNumberInput";
import PreferredLanguageInput from "./PreferredLanguageInput";
// import SmsNotificationInput from "./SmsNotificationInput";

export default function Inputs() {
  return (
    <>
      <NameInput />
      <PreferredLanguageInput />
      <PhoneNumberInput />
      {/* <SmsNotificationInput /> */}
      <EmailInput />
    </>
  );
}
