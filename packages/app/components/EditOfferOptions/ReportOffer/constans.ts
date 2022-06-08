import { ModalStatus } from "./types";

type CommonTitle = `others:desktop.contextMenu.reportProblem`;

type ModalTextContentType = "description" | "thanksForLettingKnow";

type Content = `others:reportProblem.popup.${ModalTextContentType}`;

interface ModalText {
  REQUEST: {
    title: CommonTitle;
    content: Content;
  };
  SUCCESS: {
    title: "others:reportProblem.popup.problemReported";
    content: Content;
  };
  ERROR: { title: CommonTitle; content: Content };
}

export const MODAL_TEXT: ModalText = {
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

type ProblemTypeLabelReason =
  | "guestNotNeedHelp"
  | "hostCantHelp"
  | "rejectedAfterContact"
  | "noResponseAfterContact"
  | "notShowUp";

type ProblemTypeLabel =
  `others:reportProblem.popup.reasons.${ProblemTypeLabelReason}`;

interface ProblemType {
  label: ProblemTypeLabel;
  value: string;
  targetType?: string;
}

export const PROBLEM_TYPES: Array<ProblemType> = [
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
