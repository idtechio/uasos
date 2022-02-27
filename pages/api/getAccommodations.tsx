import { db } from "../../lib/firebase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getAccommodations(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  // TODO: Add Accommodations to API
  const accommodations = await db
    .collection("accommodations")
    .doc("leerob")
    .get();
  console.log(accommodations);

  res.status(200).json({ status: "OK" });
}
