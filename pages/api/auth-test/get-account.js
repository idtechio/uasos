import { decodeToken } from "../../../lib/firebase-admin";

export default async function getAccount(req, res) {
  const body = JSON.parse(req.body);

  const decodedToken = await decodeToken(body.token);

  if (!decodedToken) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }

  // TODO get account details from backend / cloud functions
  const account = {
    uid: decodeToken.uid,
    name: "",
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
