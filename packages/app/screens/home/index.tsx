import React from "react";
import { SafeAreaView } from "app/provider/safe-area";

export function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    ></SafeAreaView>
  );
}

/* 
Components that includes another components not from my refactoring list: 

Complex components return to them later: 
Navigation
LendingProjectIntention
Instructions
*/
