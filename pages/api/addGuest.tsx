// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function addGuest(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const {
    query: { fileKey, token },
  } = req;

  // TODO: API Call
  const accommodations = [];

  res.status(200).json({ status: "OK" });
}
