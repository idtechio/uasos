// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function getGuests(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  // TODO: API Call
  const guests = [];

  res.status(200).json(guests);
}
