import { GetNumberList } from "../../pages/api/listing/numbers";

export const getNumberList = async () => {
  try {
    const res = await fetch("/api/listing/numbers", {
      method: "GET",
    });

    if (res.status != 200) {
      throw new Error("Couln't fetch numbers list, try again later.");
    }

    const body = (await res.json()) as GetNumberList;

    return body;
  } catch (e) {
    throw new Error(
      "Couln't fetch numbers list, try again later." +
        (e instanceof Error ? ` ${e.message}` : "")
    );
  }
};
