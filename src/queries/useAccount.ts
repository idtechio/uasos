import { SignInMethod } from "firebase/auth";
import { useMutation, useQuery } from "react-query";
import { AccountApi } from "../client-api/account";
import { Authorization } from "../hooks/useAuth";
import { QueryKeys } from "./queryKeys";

export const useEditAccount = () => useMutation(AccountApi.updateAccount);

type Keys = "GOOGLE" | "FACEBOOK";
type SignInValueType = typeof SignInMethod[Keys];

export const useCanEditEmail = () => {
  const { data } = useQuery(
    [QueryKeys.SIGN_IN_METHODS],
    Authorization.getSignInMethods
  );

  const can = data?.some((value) =>
    [SignInMethod.FACEBOOK, SignInMethod.GOOGLE].includes(
      value as SignInValueType
    )
  );

  return can;
};
