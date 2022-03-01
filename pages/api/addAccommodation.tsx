// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { LenguageText } from "../../src/helpers/lenguageTextSwitcher";

export type Accommodation = {
  host: {
    name: string;
    email: string;
  };
  location: {
    city: string;
    state: string;
  };
  preferences: Array<string>;
  resources: Array<string>;
  conditions: Array<string>;
};
export type Accommodations = Array<Accommodation>;

export default function getAccommodations(
  req: NextApiRequest,
  res: NextApiResponse<Accommodations>
) {
  const {
    query: { fileKey, token },
  } = req;

  // TODO: API Call
  const accommodations = [];

  res.status(200).json(accommodations);
}
