import { NextApiRequest, NextApiResponse } from "next";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

interface AccountProps {
  uid: string;
  name: string;
  prefferedLang?: string;
  confirmedEmail: Boolean;
  confirmedPhone: Boolean;
  verified?: Boolean;
}

async function getAccount(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  if (!req.decodedToken) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }

  // TODO get account details from backfunction verifyToken(req, res, next) {

  const account: AccountProps = {
    uid: req.decodedToken.uid,
    name: "",
    prefferedLang: "",
    confirmedEmail: false,
    confirmedPhone: false,
  };
  account.verified =
    !!account.uid &&
    !!account.name &&
    account.confirmedEmail &&
    account.confirmedPhone;

  res.status(200).json({ ok: "ok", account });
  res.end();
}

export default withApiAuth(getAccount);
