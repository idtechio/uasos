import React from "react";

import { SafeAreaView } from "app/provider/safe-area";
import { ButtonDefault } from "app/components/Buttons";
import { ButtonCta } from "app/components/Buttons";
import { ButtonSM } from "app/components/Buttons";
import AppBack from "app/components/AppBack";

export function HomeScreen() {
  return (
    <SafeAreaView>
      <AppBack />
      <ButtonSM id="google" anchor="ButtonSM - google" />
      <ButtonSM id="facebook" anchor="ButtonSM - facebook" />
      <ButtonCta anchor="ButtonCta" />
      <ButtonDefault anchor="ButtonDefault" />
    </SafeAreaView>
  );
}
