import { ModalStatus } from "./types";

type TitleType = "congratulations" | "badNews";

type Title = `common.words.${TitleType}`;

type ContentType = "confirmed" | "rejected";

type Content = `forms.match.${ContentType}`;

interface ConfirmationText {
  [key: string]: {
    title: Title;
    content: Content;
  };
}

export const CONFIRMATION_TEXT: ConfirmationText = {
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
