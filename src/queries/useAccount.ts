import { useMutation } from "react-query";
import { AccountApi } from "../client-api/account";

export const useEditAccount = () => useMutation(AccountApi.updateAccount);
