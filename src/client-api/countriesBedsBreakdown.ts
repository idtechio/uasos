import { CountryBedsBreakdownProps } from "../../pages/api/listing/countriesBedBreakdown";

export const getCountriesBedsBreakdown: () => Promise<{
  ok: "ok";
  countries: CountryBedsBreakdownProps;
}> = async () => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_DOMAIN + "api/listing/countriesBedBreakdown",
      {
        method: "GET",
      }
    );

    if (res.status != 200) {
      throw new Error("Couln't fetch countries breakdown, try again later.");
    }

    const body = await res.json();
    return body;
  } catch (e) {
    console.log("e:", e);
    return {
      ok: "ok",
      countries: [],
    };
  }
};
