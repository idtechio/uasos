import AppBack from "../src/components/AppBack";
import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import FormInitPasswordReset from "../src/components/FormInitPasswordReset";
import { Routes } from "../src/consts/router";

export default function App() {
  return (
    <CompositionAppBody>
      <CompositionContainer>
        <AppBack to={Routes.SIGN_IN} />
        <FormInitPasswordReset />
      </CompositionContainer>
    </CompositionAppBody>
  );
}
