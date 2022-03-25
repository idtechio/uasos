import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { DecodedIdToken } from "firebase-admin/auth";

import { decodeToken } from "../../lib/firebase-admin";

export interface ApiAuthTokenDetails {
  token?: String;
  decodedToken?: DecodedIdToken;
}

const withApiAuth = (handler: NextApiHandler) => {
  return async (
    req: NextApiRequest & ApiAuthTokenDetails,
    res: NextApiResponse
  ) => {
    const bearerHeader = req.headers["authorization"];
    if (!bearerHeader) {
      res.status(403).json({ ok: "not ok" });
      res.end();
      return;
    }

    const bearerToken = bearerHeader.split(" ")[1];
    const decodedToken = await decodeToken(bearerToken);
    if (!decodedToken) {
      res.status(401).json({ ok: "not ok" });
      res.end();
      return;
    }

    req.token = bearerToken;
    req.decodedToken = decodedToken;

    return handler(req, res);
  };
};

export default withApiAuth;
