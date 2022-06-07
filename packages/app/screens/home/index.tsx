import React from "react";

import { SafeAreaView } from "app/provider/safe-area";
import { ButtonDefault } from "app/components/Buttons";
import { ButtonCta } from "app/components/Buttons";
import { ButtonSM } from "app/components/Buttons";
import AppBack from "app/components/AppBack";
import Section from "app/components/Section";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export function HomeScreen() {
  return (
    <SafeAreaView>
      <AppBack />
      <ButtonSM id="google" anchor="ButtonSM - google" />
      <ButtonSM id="facebook" anchor="ButtonSM - facebook" />
      <Section bgColor="gray" style={containerStyle} />
      <ButtonCta anchor="ButtonCta" />
      <ButtonDefault anchor="ButtonDefault" />
    </SafeAreaView>
  );
}
