import { NextApiRequest, NextApiResponse } from "next";
import { ApiAuthTokenDetails } from "../../../../src/helpers/withAPIAuth";

async function notification(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  console.log("notification");
  res.status(200).end();
}

export default notification;
