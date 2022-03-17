import { app } from "../../../lib/firebase";
import { getAuth, verifyIdToken } from "firebase/auth";

//TODO: DRY pages/api/guests/matchesconfirm/{matchesId}.js
export default async function sendMatchesDecision(req, res) {
  const {
    body: { idToken },
  } = req;

  const decodedToken = await getAuth(app).verifyIdToken(idToken);

  res.status(200).json({ ok: "ok", uid: decodedToken.uid });
  res.end();
}
