import React from "react";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../style";
import HomeIllustration from "../../../style/svgs/home_illustration.svg";
import ButtonCta from "../ButtonCta";

export default function DeleteOfferForm({ close }: { close(): void }) {
  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <HomeIllustration />
      <FormHeader style={{ marginTop: 38 }}>Delete request/offer</FormHeader>
      <FormDescription style={{ marginTop: 40 }}>
        Are you sure you want to delete your entry?
      </FormDescription>
      <FormFooter style={{ marginTop: 88 }}>
        <ButtonCta variant="outlined" anchor="Cancel" onClick={close} />
        <ButtonCta anchor="Delete" />
      </FormFooter>
    </FormWrapper>
  );
}
