import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
const IdCheckIo = require("idcheckio-sdk").default;
import { useOnboarding } from "../../queries/useIdCheck";
import { ElementSelector } from "idcheckio-sdk/dist/schema";
import { IdCheckIFrame } from "./style";
import { setIsWaitingVerification } from "../IdVerificationToast/helpers";
import { wordings } from "./wordings";

const idcheck = new IdCheckIo({
  wordings,
});

const IdCheck = () => {
  const router = useRouter();
  const idCheckComponentRef = useRef<HTMLDivElement>(null);

  const { data } = useOnboarding();

  const onEndOnboardingHandler = () => {
    setIsWaitingVerification();
    router.back();
  };

  idcheck.on("ENDED", onEndOnboardingHandler);

  useEffect(() => {
    if (data) {
      idcheck.init({
        url: data.url,
        element: idCheckComponentRef.current as ElementSelector,
      });
    }
  }, [data]);

  return (
    <>
      <IdCheckIFrame ref={idCheckComponentRef}>Loading...</IdCheckIFrame>
    </>
  );
};

export default IdCheck;
