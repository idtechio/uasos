import React from "react";
import ButtonCta from "../ButtonCta";
import {
  CloseButton,
  FormDescription,
  FormFooter,
  FormHeader,
  FormWrapper,
} from "../style";
import SelectProblemDropdown from "./SelectProblemDropdown";
import { ProblemIllustraion } from "./style";

export default function ReportOffer({ close }: { close(): void }) {
  return (
    <FormWrapper>
      <CloseButton onPress={close} />
      <ProblemIllustraion />
      <FormHeader style={{ marginTop: 7 }}>Report a problem</FormHeader>
      <FormDescription
        style={{ marginTop: 8, marginBottom: 38, maxWidth: "25ch" }}
      >
        Notify us of any problems using the form below
      </FormDescription>

      <SelectProblemDropdown />

      <FormFooter style={{ marginTop: 88 }}>
        <ButtonCta variant="outlined" anchor="Cancel" onPress={close} />
        <ButtonCta anchor="Report" />
      </FormFooter>
    </FormWrapper>
  );
}
