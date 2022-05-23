/* eslint-disable @typescript-eslint/ban-types */
import { NextApiRequest, NextApiResponse } from "next";
import { select } from "../../../lib/db";
import withApiAuth, {
  ApiAuthTokenDetails,
} from "../../../src/helpers/withAPIAuth";

enum StringBoolean {
  FALSE = "FALSE",
  TRUE = "TRUE",
}
interface AccountProps {
  uid: string;
  name: string;
  email: string;
  phoneNumber: string;
  preferredLang: string;
  confirmedEmail: Boolean;
  confirmedPhone: Boolean;
  smsNotification: Boolean;
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
export interface AccountInfoDBProps {
  db_accounts_id: string;
  uid: string;
  name: string;
  email: string;
  phone_num: string;
  preferred_lang: string;
  email_status: EmailStatus;
  phone_status: PhoneStatus;
  sms_notification: string;
}

async function getAccount(
  req: NextApiRequest & ApiAuthTokenDetails,
  res: NextApiResponse
) {
  try {
    if (!req.decodedToken) {
      throw new Error("token is required");
    }

    const dbAccount: false | AccountInfoDBProps = await getAccountFromDB(
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
      preferredLang: dbAccount.preferred_lang,
      smsNotification: dbAccount.sms_notification === StringBoolean.TRUE,
      confirmedEmail: dbAccount.email_status === EmailStatus.ACCEPTED,
      confirmedPhone: dbAccount.phone_status === PhoneStatus.ACCEPTED,
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

export async function getAccountFromDB(
  uid: string
): Promise<false | AccountInfoDBProps> {
  const dbAccount: false | AccountInfoDBProps[] = await select(
    `SELECT
      db_accounts_id,
      uid,
      name,
      email,
      phone_num,
      phone_status,
      email_status,
      preferred_lang,
      sms_notification
    FROM accounts_info
    WHERE uid = $1`,
    [uid]
  );

  if (!dbAccount) {
    return false;
  }

  return dbAccount[0];
}

export function isAccountVerified(account: AccountInfoDBProps): boolean {
  return (
    account.email_status === EmailStatus.ACCEPTED &&
    account.phone_status === PhoneStatus.ACCEPTED
  );
}

export default withApiAuth(getAccount);
