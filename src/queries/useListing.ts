import { useMutation } from "react-query";
import { deleteListItem } from "../client-api/delete";
import { reportListItem } from "../client-api/report";
import { renewListItem } from "../client-api/renew";

export const useDeleteItem = () => useMutation(deleteListItem);
export const useReportItem = () => useMutation(reportListItem);
export const useRenewItem = () => useMutation(renewListItem);
