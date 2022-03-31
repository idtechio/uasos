import { ConfirmationResult, User } from "firebase/auth";
import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation();
  const [detailsUpdated, setDetailsUpdated] = useState(false);
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(
    null
  );

  const onPhoneConfirmationSuccess = (success: boolean) => {
    console.log({ success });
  };

  const checkIfPhoneIsVerified = async () => {
    const acocunt = await AccountApi.getAccount();

    // const confirmation = await Authorization.signInWithPhone(
    //   data.login.phoneOrEmail,
    //   Authorization.initCaptcha("captcha__container")
    // );
  };

  useEffect(() => {
    if (detailsUpdated) {
      checkIfPhoneIsVerified();
    }
  }, [detailsUpdated]);
  return (
    <>
      <p>{t("hostAdd.country")}</p>
      <UserDetailsForm
        account={account}
        identity={identity}
        onSuccess={() => setDetailsUpdated(true)}
      />
      {detailsUpdated && (
        // <SmsVerificationModal
        //   confirmation={confirmation}
        //   phoneNumber={"535200006"}
        //   setVerificationSuccess={onPhoneConfirmationSuccess}
        //   callback={() => console.log("SMS")}
        //   mode="UPDATE"
        // />
        <div>Display sms modal</div>
      )}
    </>
  );
}
