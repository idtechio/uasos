import { useRouter } from "next/router";
import React from "react";
import HomeIllustration from "../../style/svgs/house-reject.svg";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../EditOfferOptions/style";

export default function ModalOnReject({ close }: { close(): void }) {
  const router = useRouter();
  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <HomeIllustration />
      <FormHeader style={{ marginTop: 17 }}>Thank you</FormHeader>
      <FormDescription style={{ marginTop: 19, maxWidth: "40ch" }}>
        Thank you for confirming your decision.
      </FormDescription>
      <FormDescription style={{ maxWidth: "30ch" }}>
        Your submission will go back into the pool, we will let you know about
        the next proposal as soon as we can find one.
      </FormDescription>
      <FormFooter style={{ marginTop: 60, justifyContent: "center" }}>
        <ButtonCta
          anchor="Back to profile"
          onPress={() => {
            router.push("/dashboard");
          }}
        />
      </FormFooter>
    </FormWrapper>
  );
}
