import React from "react";
import { Text } from "react-native";
import { AuthContextProvider } from "app/provider/auth-context";

import useAuth from "app/hooks/useAuth";

import { AppStack } from "./app-stack";
import { AuthStack } from "./auth-stack";

export const Routes = () => {
  const { identity, account, getTokenForAPI, loaded, refetchAccount } =
    useAuth();

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <AuthContextProvider
      value={{
        identity,
        account,
        getTokenForAPI,
        loaded,
        refetchAccount,
      }}
    >
      {identity ? <AppStack /> : <AuthStack />}
    </AuthContextProvider>
  );
};
