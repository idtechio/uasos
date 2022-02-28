import { db } from "../../../lib/firebase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function getAccommodations(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const body = JSON.parse(req.body);
  const newAccommodations = db.collection("accommodations").doc();
  const response = await newAccommodations
    .set(body)
    .then((response) => res.status(200).json(response));
}
