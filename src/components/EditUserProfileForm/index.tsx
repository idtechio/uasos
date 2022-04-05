import { ConfirmationResult, getAuth, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { AccountApi, getAccountDTO } from "../../client-api/account";
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
  const [newPhoneNumber, setNewPhoneNumber] = useState<string | null>(null);

  const onPhoneConfirmationSuccess = () => {
    return null;
  };

  const checkIfPhoneIsVerified = async () => {
    const user = getAuth().currentUser;
    const account = await AccountApi.getAccount();

    const isNewPhoneNumber = user?.phoneNumber && !account?.confirmedPhone;
    if (isNewPhoneNumber) {
      setNewPhoneNumber(user.phoneNumber);
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

  const shouldOpenSmsVerification =
    detailsUpdated && confirmation && verificationId && newPhoneNumber;

  return (
    <>
      <UserDetailsForm
        account={account}
        identity={identity}
        onSuccess={() => setDetailsUpdated(true)}
      />
      {shouldOpenSmsVerification && (
        <SmsVerificationModal
          confirmation={confirmation}
          verificationId={verificationId}
          phoneNumber={newPhoneNumber}
          setVerificationSuccess={onPhoneConfirmationSuccess}
          callback={() => null}
          close={() => setConfirmation(null)}
          mode="UPDATE"
        />
      )}
      <div id={"recaptcha__container1"} />
      <div id={"recaptcha__container2"} />
    </>
  );
}
