import { useMutation } from "react-query";
import { deleteListItem } from "../client-api/delete";

export const useDeleteItem = () => useMutation(deleteListItem);
