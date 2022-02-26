// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function getAccommodations(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  // TODO: Add Accommodations to API

  res.status(200).json({ status: "OK" });
}
