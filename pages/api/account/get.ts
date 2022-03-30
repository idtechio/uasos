import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

interface AccountProps {
  uid: string;
  name: string;
  email: string;
  phoneNumber: string;
  prefferedLang: string;
  confirmedEmail: Boolean;
  confirmedPhone: Boolean;
}

enum EmailStatus {
  ACCEPTED = "accepted", // verified
  REJECTED = "rejected", // for future moderation purpose
  DEFAULT = "default", // not verified
}

enum PhoneStatus {
  ACCEPTED = "accepted", // verified
  REJECTED = "rejected", // for future moderation purpose
  SUSPENDED = "suspended", // for future moderation purpose
  DEFAULT = "default", // not verified
}
interface AccountDBProps {
  uid: string;
  name: string;
  email: string;
  phone_num: string;
  preferred_lang: string;
  email_status: EmailStatus;
  phone_status: PhoneStatus;
}

async function getAccount(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  try {
    if (!req.decodedToken) {
      throw new Error("token is required");
    }

    const dbAccount: false | AccountDBProps = await getAccountFromDB(
      req.decodedToken.uid
    );

    if (!dbAccount) {
      throw new Error("there is no account");
    }

    const account: AccountProps = {
      uid: req.decodedToken.uid,
      name: dbAccount.name,
      email: dbAccount.email,
      phoneNumber: dbAccount.phone_num,
      prefferedLang: dbAccount.preferred_lang,
      confirmedEmail: dbAccount.email_status === "accepted",
      confirmedPhone: dbAccount.phone_status === "accepted",
    };

    res.status(200).json({ ok: "ok", account });
    res.end();
  } catch (e) {
    res
      .status(400)
      .json({ ok: "not ok", error: e instanceof Error ? e.message : "" });
    res.end();
  }
}

async function getAccountFromDB(uid: string): Promise<false | AccountDBProps> {
  const dbAccount: false | AccountDBProps[] = await select(
    `SELECT
      uid,
      name,
      email,
      phone_num,
      fnc_msisdn_status,
      fnc_email_status,
      preferred_lang
    FROM accounts_info
    WHERE uid = $1`,
    [uid]
  );

  if (!dbAccount) {
    return false;
  }

  return dbAccount[0];
}

export default withApiAuth(getAccount);
