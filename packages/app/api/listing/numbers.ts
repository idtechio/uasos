import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../lib/db";

export interface NumbersProps {
  matched_beds: string;
  available_beds: string;
  requested_beds: string;
}

export type GetNumberList = {
  ok: "ok";
  numbers: NumbersProps;
};

async function getNumbers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const numbers: false | NumbersProps[] = await select(
      `SELECT
        coalesce(m_beds, 0) AS matched_beds,
        coalesce(h_beds, 0) AS available_beds,
        coalesce(g_beds, 0) AS requested_beds
      FROM beds_statistics
      LIMIT 1`
    );

    if (!numbers) {
      throw new Error("No data");
    }

    res.status(200).json({ ok: "ok", numbers: numbers[0] } as GetNumberList);
    res.end();
  } catch (error) {
    res.status(400).json({
      ok: "not ok",
      error: error instanceof Error ? error.message : "",
    });
    res.end();
  }
}

export default getNumbers;
