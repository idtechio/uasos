import { useMutation } from "react-query";
import { deleteListItem } from "../client-api/delete";
import { renewListItem } from "../client-api/renew";

export const useDeleteItem = () => useMutation(deleteListItem);

export const useRenewItem = () => useMutation(renewListItem);
