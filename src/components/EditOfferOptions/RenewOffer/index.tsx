import React from "react";
import HomeIllustration from "../../../style/svgs/home_illustration.svg";
import ButtonCta from "../ButtonCta";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../style";

export default function RenewOffer({ close }: { close(): void }) {
  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <HomeIllustration />
      <FormHeader style={{ marginTop: 38 }}>Renew</FormHeader>
      <FormDescription style={{ marginTop: 40, maxWidth: "26ch" }}>
        Your application / offer <b>expired due to lack of activity</b>
      </FormDescription>
      <FormDescription style={{ marginTop: 22, maxWidth: "30ch" }}>
        Do you want to re-activate the application/offer?
      </FormDescription>
      <FormFooter style={{ marginTop: 57 }}>
        <ButtonCta anchor="Cancel" variant="outlined" onPress={close} />
        <ButtonCta anchor="Renew" />
      </FormFooter>
    </FormWrapper>
  );
}
