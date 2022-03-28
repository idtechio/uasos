import { OfferProps } from "../../pages/api/listing/offers";

type GetOffersListDTO = {
  ok: "ok";
  offers: OfferProps[];
};

export const getOffersList = async () => {
  const res = await fetch("/api/listing/offers", { method: "GET" });

  if (res.status != 200) {
    throw new Error("Couln't fetch offers list, try again later.");
  }

  const body = (await res.json()) as GetOffersListDTO;

  return body;
};
