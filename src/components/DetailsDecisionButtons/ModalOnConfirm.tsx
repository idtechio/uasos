import { useRouter } from "next/router";
import React from "react";
import HomeIllustration from "../../style/svgs/house-confirm.svg";
import ButtonCta from "../EditOfferOptions/ButtonCta";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../EditOfferOptions/style";

export default function ModalOnConfirm({ close }: { close(): void }) {
  const router = useRouter();
  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <HomeIllustration />
      <FormHeader style={{ marginTop: 17 }}>Thank you</FormHeader>
      <FormDescription style={{ marginTop: 19, maxWidth: "35ch" }}>
        Thank you very much for confirming the proposal received. As soon as we
        receive both confirmations, we will let you know.
      </FormDescription>
      <FormFooter style={{ marginTop: 84, justifyContent: "center" }}>
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
