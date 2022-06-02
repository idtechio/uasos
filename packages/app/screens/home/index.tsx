import React from "react";
import { SafeAreaView } from "app/provider/safe-area";
import { ButtonDefault } from "app/components/Buttons";
import { ButtonCta } from "app/components/Buttons";
import { ButtonSM } from "app/components/Buttons";

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

/* 
Components that includes another components not from my refactoring list: 

Complex components return to them later: 
PlacesAutocomplete
Navigation
LendingProjectIntention
Instructions
*/
