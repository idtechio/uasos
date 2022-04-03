import sanitizeHtml from "sanitize-html";

export const sanitize = (text: string) => sanitizeHtml(text);
