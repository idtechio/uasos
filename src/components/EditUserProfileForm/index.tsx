import { ConfirmationResult, getAuth, User } from "firebase/auth";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { getAccountDTO } from "../../client-api/account";
import { Authorization } from "../../hooks/useAuth";
import SmsVerificationModal from "../SmsVerificationModal";
import UserDetailsForm from "./DetailsForm";

export default function EditUserProfileForm({
  account,
  identity,
}: {
  account: getAccountDTO | null;
  identity?: User | null;
}) {
  const [detailsUpdated, setDetailsUpdated] = useState(false);
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(
    null
  );
  const [verificationId, setVerificationId] = useState<string | null>(null);

  const onPhoneConfirmationSuccess = (success: boolean) => {
    console.log({ success });
  };

  const checkIfPhoneIsVerified = async () => {
    const user = getAuth().currentUser;
    console.log({ user });

    if (user?.phoneNumber) {
      const captcha = await Authorization.initCaptcha("recaptcha__container1");
      setVerificationId(
        await Authorization.initUpdatePhone(user.phoneNumber, captcha)
      );

      const confirm = await Authorization.signInWithPhone(
        user.phoneNumber,
        Authorization.initCaptcha("recaptcha__container2")
      );
      setConfirmation(confirm);
    }
  };

  useEffect(() => {
    if (detailsUpdated) {
      checkIfPhoneIsVerified();
    }
  }, [detailsUpdated]);
  return (
    <>
      <UserDetailsForm
        account={account}
        identity={identity}
        onSuccess={() => setDetailsUpdated(true)}
      />
      {detailsUpdated && confirmation && verificationId && (
        <SmsVerificationModal
          confirmation={confirmation}
          verificationId={verificationId}
          phoneNumber={"535200006"}
          setVerificationSuccess={onPhoneConfirmationSuccess}
          callback={() => console.log("SMS")}
          mode="UPDATE"
        />
      )}
      <div id={"recaptcha__container1"} />
      <div id={"recaptcha__container2"} />
    </>
  );
}
