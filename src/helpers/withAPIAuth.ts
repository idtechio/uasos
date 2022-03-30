import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { DecodedIdToken } from "firebase-admin/auth";

import { decodeToken } from "../../lib/firebase-admin-app";

export interface ApiAuthTokenDetails {
  token?: String;
  decodedToken?: DecodedIdToken;
}

const withApiAuth = (handler: NextApiHandler, isOptional?: Boolean) => {
  return async (
    req: NextApiRequest & ApiAuthTokenDetails,
    res: NextApiResponse
  ) => {
    const { token, decodedToken } = await readAndCheckToken(req);

    if (!token && isOptional !== true) {
      res.status(403).json({ ok: "not ok", error: "there is no bearer token" });
      res.end();
      return;
    }
    if (!decodedToken && isOptional !== true) {
      res.status(401).json({ ok: "not ok", error: "wrong bearer token" });
      res.end();
      return;
    }

    if (token && decodedToken) {
      req.token = token;
      req.decodedToken = decodedToken;
    }

    return handler(req, res);
  };
};

const readAndCheckToken = async function (
  req: NextApiRequest & ApiAuthTokenDetails
): Promise<ApiAuthTokenDetails> {
  let token: string | undefined = undefined;
  let decodedToken: DecodedIdToken | undefined = undefined;

  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const _token = bearerHeader.split(" ")[1];
    if (_token) {
      token = _token;
      const _decodedToken = await decodeToken(token);
      if (_decodedToken) {
        decodedToken = _decodedToken;
      }
    }
  }

  return { token, decodedToken };
};

export default withApiAuth;
