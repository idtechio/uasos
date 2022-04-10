import { ModalStatus } from "./types";

export const MODAL_TEXT = {
  REQUEST: {
    title: "others:desktop.contextMenu.reportProblem",
    content: "others:reportProblem.popup.description",
  },
  SUCCESS: {
    title: "others:reportProblem.popup.problemReported",
    content: "others:reportProblem.popup.thanksForLettingKnow",
  },
  ERROR: {
    title: "others:desktop.contextMenu.reportProblem",
    content: "others:reportProblem.popup.description",
  },
};

export const MODAL_STATUS: ModalStatus = {
  REQUEST: "REQUEST",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const PROBLEM_TYPES = [
  {
    label: "others:reportProblem.popup.reasons.guestNotNeedHelp",
    value: "report_guest_inactive",
    targetType: "hosts",
  },
  {
    label: "others:reportProblem.popup.reasons.hostCantHelp",
    value: "report_host_inactive",
    targetType: "guests",
  },
  {
    label: "others:reportProblem.popup.reasons.rejectedAfterContact",
    value: "report_first_contact",
  },
  {
    label: "others:reportProblem.popup.reasons.noResponseAfterContact",
    value: "report_no_contact",
  },
  {
    label: "others:reportProblem.popup.reasons.notShowUp",
    value: "report_no_show_up",
  },
];
