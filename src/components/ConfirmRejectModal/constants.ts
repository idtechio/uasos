import { ModalStatus } from "./types";

export const CONFIRMATION_TEXT = {
  CONFIRM: {
    title: "common.words.congratulations",
    content: "forms.match.confirmed",
  },
  REJECT: {
    title: "common.words.badNews",
    content: "forms.match.rejected",
  },
};

export const MODAL_STATUS: ModalStatus = {
  ACCEPT: "accepted",
  REJECT: "rejected",
};

export const ALREADY_SHOWN = "alreadyShown";
