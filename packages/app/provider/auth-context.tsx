/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode, createContext, useContext } from "react";
import { User } from "firebase/auth";

export interface getAccountDTO {
  uid: string;
  name: string;
  preferredLang?: string;
  confirmedEmail: Boolean;
  confirmedPhone: Boolean;
  smsNotification: Boolean;
  verified?: Boolean;
}

interface AuthContextValue {
  identity: null | User | undefined;
  account: null | getAccountDTO;
  getTokenForAPI: null | (() => Promise<string>);
  refetchAccount: null | (() => Promise<void>);
  loaded: boolean;
}

export const AuthContext = createContext<AuthContextValue>({
  identity: null,
  getTokenForAPI: null,
  account: null,
  refetchAccount: null,
  loaded: false,
});

export const AuthContextProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: AuthContextValue;
}) => <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

export const useAuthContext = () => useContext(AuthContext);
