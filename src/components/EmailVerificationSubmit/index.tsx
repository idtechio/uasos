import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Authorization } from "../../hooks/useAuth";

export default function EmailVerificationSubmit() {
  const oobCodeRef = useRef<null | string>(null);
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    oobCodeRef.current = queryParams.get("oobCode");
    (async function verifyEmail() {
      if (oobCodeRef && oobCodeRef?.current) {
        try {
          await Authorization.applyCode(oobCodeRef?.current);
          router.push("/dashboard");
        } catch (error) {
          // if (error instanceof FirebaseError) {
          // }
          router.push("/dashboard");
        }
      }
    })();
  }, [oobCodeRef, router]);
  return <></>;
}
