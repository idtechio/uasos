import React from "react";

import { SafeAreaView } from "app/provider/safe-area";
import { ButtonDefault } from "app/components/Buttons";
import { ButtonCta } from "app/components/Buttons";
import { ButtonSM } from "app/components/Buttons";

console.log("work");

export function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ButtonSM id="google" anchor="ButtonSM - google" />
      <ButtonSM id="facebook" anchor="ButtonSM - facebook" />
      <ButtonCta anchor="ButtonCta" />
      <ButtonDefault anchor="ButtonDefault" />
    </SafeAreaView>
  );
}
