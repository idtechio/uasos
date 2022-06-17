import React from "react";
import { SafeAreaView } from "app/provider/safe-area";
import { ButtonDefault } from "app/components/Buttons";
import { ButtonCta } from "app/components/Buttons";
import { ButtonSM } from "app/components/Buttons";
import AppBack from "app/components/AppBack";
import Section from "app/components/Section";
import SectionTitle from "app/components/SectionTitle";
import { Splash } from "app/components/Splash";

const containerStyle = {
  width: "100%",
  height: "100%",
};

export function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ButtonSM id="google" anchor="ButtonSM - google" />
      <ButtonSM id="facebook" anchor="ButtonSM - facebook" />
      <Section bgColor="gray" style={containerStyle} />
      <SectionTitle title="SectionTitle" style={containerStyle} />
      <Splash />
      <ButtonCta anchor="ButtonCta" />
      <ButtonDefault anchor="ButtonDefault" />
    </SafeAreaView>
  );
}

/* 
Components that includes another components not from my refactoring list: 

Complex components return to them later: 
Navigation
LendingProjectIntention
Instructions
*/
