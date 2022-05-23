import { RequestProps } from "../../../pages/api/listing/requests";
import { OfferProps } from "../../../pages/api/listing/offers";

export type Status = "accepted" | "rejected";

export type ResultItem = RequestProps | OfferProps;

export interface AlreadyShowed {
  [id: string]: boolean;
}

export interface ModalStatus {
  ACCEPT: Status;
  REJECT: Status;
}
