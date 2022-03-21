import { useState } from "react";
import { Text } from "react-native-web";
import { ButtonSM } from "../Buttons";
import { CompositionSection } from "../Compositions";
import FormContainer from "../FormLogin/FormContainer";
import EmailLogin from "./EmailLogin";
import PhoneLogin from "./PhoneLogin";
import {
  signWithGoogle,
  signWithFacebook,
  signInWithPhone,
  initRecaptcha,
  signInWithEmail,
} from "./useAuth";

const SignInForm = function () {
  const [visiblePhoneLogin, setVisiblePhoneLogin] = useState(false);
  const [visiblePassLogin, setVisiblePassLogin] = useState(false);
  const [error, setError] = useState();

  return (
    <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
      <FormContainer>
        <h1 style={{ color: "black" }}>Sign in using</h1>

        {error}

        {!visiblePhoneLogin && !visiblePassLogin && (
          <>
            <ButtonSM
              id="signin-google"
              onPress={signWithGoogle}
              anchor="Google"
            />
            <ButtonSM
              id="signin-facebook"
              onPress={signWithFacebook}
              anchor="Facebook"
            />
            <ButtonSM
              id="signin-phone"
              onPress={() => setVisiblePhoneLogin(true)}
              anchor="Phone + SMS"
            />
            <ButtonSM
              id="signin-pass"
              onPress={() => setVisiblePassLogin(true)}
              anchor="E-mail + password"
            />
          </>
        )}

        {visiblePhoneLogin && (
          <>
            <Text onClick={() => setVisiblePhoneLogin(false)}>{"<"} Back</Text>
            <PhoneLogin
              signInWithPhone={signInWithPhone}
              initRecaptcha={initRecaptcha}
              onError={setError}
            />
          </>
        )}

        {visiblePassLogin && (
          <>
            <Text onClick={() => setVisiblePassLogin(false)}>{"<"} Back</Text>
            <EmailLogin signInWithEmail={signInWithEmail} onError={setError} />
          </>
        )}
      </FormContainer>
    </CompositionSection>
  );
};

export default SignInForm;
