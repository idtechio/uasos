import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../pages/_app";
import { Authorization } from "../../hooks/useAuth";

export default function EmailVerificationSubmit() {
  const { identity } = useContext(AuthContext);
  const oobCodeRef = useRef<null | string>(null);
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    oobCodeRef.current = queryParams.get("oobCode");
    (async function verifyEmail() {
      if (identity && oobCodeRef && oobCodeRef?.current) {
        await Authorization.applyCode(oobCodeRef?.current);
        router.push("/dashboard");
      }
    })();
  }, []);
  return <></>;
}
