import { decodeToken, getAuthObj } from "../../../lib/firebase-admin";

export default async function verifyEmail(req, res) {
  const body = JSON.parse(req.body);

  const decodedToken = await decodeToken(body.token);
  if (!decodedToken) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }

  if (decodedToken.email_verified) {
    res.status(400).json({ ok: "not ok", msg: "email already verified" });
    res.end();
    return;
  }

  /**
   * @link https://firebase.google.com/docs/auth/admin/email-action-links
   */
  const actionCodeSettings = {
    url: "https://dev.uasos.org/auth-test",
  };

  const auth = await getAuthObj();
  const link = await auth.generateEmailVerificationLink(
    decodedToken.email,
    actionCodeSettings
  );

  // TODO send link via email using cloud function

  res.status(200).json({ ok: "ok", link });
  res.end();
}
