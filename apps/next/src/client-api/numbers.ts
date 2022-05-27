import { GetNumberList } from "../../pages/api/listing/numbers";

export const getNumberList = async () => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_DOMAIN + "api/listing/numbers",
      {
        method: "GET",
      }
    );

    if (res.status != 200) {
      throw new Error("Couln't fetch numbers list, try again later.");
    }

    const body = (await res.json()) as GetNumberList;

    return body;
  } catch (e) {
    return {
      ok: "ok",
      numbers: {
        matched_beds: "0",
        available_beds: "0",
        requested_beds: "0",
      },
    };
  }
};
