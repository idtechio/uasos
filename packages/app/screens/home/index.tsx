import React from "react";

import { SafeAreaView } from "app/provider/safe-area";
import ButtonDefault from "app/components/Buttons/ButtonDefault";
import { ButtonCta } from "app/components/Buttons";
import ButtonSM from "app/components/Buttons/ButtonSM";

export function HomeScreen() {
  return (
    <SafeAreaView>
      <ButtonSM id="google" anchor="ButtonSM - google" />
      <ButtonSM id="facebook" anchor="ButtonSM - facebook" />
      <ButtonCta anchor="ButtonCta" />
      <ButtonDefault anchor="ButtonDefault" />
    </SafeAreaView>
  );
}
