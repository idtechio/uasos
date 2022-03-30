import { ConfirmationResult, User } from "firebase/auth";
import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { getAccountDTO } from "../../client-api/account";
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
  return (
    <>
      <p>{t("hostAdd.country")}</p>
      <UserDetailsForm
        account={account}
        identity={identity}
        onSuccess={() => console.log("SUSSS")}
      />
      {detailsUpdated && confirmation && (
        <SmsVerificationModal
          confirmation={confirmation}
          phoneNumber={"535200006"}
          setVerificationSuccess={onPhoneConfirmationSuccess}
          callback={() => console.log("SMS")}
          mode="UPDATE"
        />
      )}
    </>
  );
}
