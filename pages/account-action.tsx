import { useEffect, useRef } from "react";
import AppBack from "../src/components/AppBack";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import FormResetPassword from "../src/components/FormPasswordReset";
import { Routes } from "../src/consts/router";

export default function App() {
  const modeRef = useRef<string | null>();
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    modeRef.current = queryParams.get("mode");
  }, []);
  return (
    <CompositionAppBody>
      <CompositionContainer>
        <AppBack to={Routes.SIGN_IN} />
        {modeRef.current === "resetPassword" ? <FormResetPassword /> : <></>}
      </CompositionContainer>
    </CompositionAppBody>
  );
}
