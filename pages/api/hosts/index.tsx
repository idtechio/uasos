import { db } from "../../../lib/firebase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getAccommodations(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  try {
    const accommodations = await db.collection("accommodations").get();
    const accommodationsData = accommodations.docs.map((entry) => entry.data());

    res.status(200).json(accommodationsData);
  } catch (e) {
    res.status(400).end();
  }
}
