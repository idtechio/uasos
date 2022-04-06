import { useMutation } from "react-query";
import { deleteListItem } from "../client-api/delete";
import { reportListItem } from "../client-api/report";

export const useDeleteItem = () => useMutation(deleteListItem);
export const useReportItem = () => useMutation(reportListItem);
