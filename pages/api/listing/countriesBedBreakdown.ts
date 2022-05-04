import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";

export interface CountryBedsBreakdownProps {
  [country: string]: { [city: string]: number };
}

export type GetCountriesBedsBreakdown =
  | { ok: "ok"; countries: CountryBedsBreakdownProps }
  | { ok: "not ok"; error: string };

async function getCountriesBedsBreakdown(
  _req: NextApiRequest,
  res: NextApiResponse<GetCountriesBedsBreakdown>
) {
  type Result = { country: string; closest_city: string; beds: string };
  try {
    const resultSet: false | Result[] = await select(
      `SELECT * FROM countries_beds_breakdown`
    );
    if (!resultSet) {
      return res.status(400).json({ ok: "not ok", error: "no data" });
    }
    const countries = resultSet.reduce<CountryBedsBreakdownProps>((p, c) => {
      const country = c.country;
      const city = c.closest_city;
      if (!p[country]) {
        p[country] = {};
      }
      if (!p[country][city]) {
        p[country][city] = 0;
      }
      p[country][city] += Number.parseInt(c.beds);
      return p;
    }, {});
    return res.json({ ok: "ok", countries });
  } catch (error) {
    res.status(400).json({
      ok: "not ok",
      error: error instanceof Error ? error.message : "",
    });
    res.end();
  }
}

export default getCountriesBedsBreakdown;
