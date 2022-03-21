import { useEffect, useState } from "react";
import {
  CompositionAppBody,
  CompositionContainer,
  CompositionSection,
} from "../src/components/Compositions";
import { Text } from "react-native";
import { ActivityIndicator, Button } from "react-native-web";
import { FormProvider, useForm } from "react-hook-form";
import { InputControl, InputCotrolLabel } from "../src/components/Forms";
import FormTextInput from "../src/components/Inputs/FormTextInput";
import CardModal from "../src/components/CardModal";
import { ButtonCta, ButtonSM } from "../src/components/Buttons";
import { Error } from "../src/components/Inputs/style";
import FormContainer from "../src/components/FormLogin/FormContainer";

import { app } from "../lib/firebase-front";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithRedirect,
  getIdToken,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  RecaptchaVerifier,
} from "firebase/auth";

const LoginForm = function ({ onSubmit: propsOnSubmit }) {
  const submitRequestDefualtState = {
    loading: false,
    error: null,
    succeeded: false,
  };

  const formFields = useForm({
    defaultValues: {},
  });
  const {
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitted },
  } = formFields;
  const [submitRequstState, setSubmitRequstState] = useState(
    submitRequestDefualtState
  );

  const onSubmit = async (data) => {
    const apiObject = {
      login: data.login,
      password: data.password,
    };

    setSubmitRequstState((state) => ({ ...state, loading: true }));

    try {
      await propsOnSubmit(apiObject);
      setSubmitRequstState((state) => ({ ...state, succeeded: true }));
    } catch (error) {
      setSubmitRequstState((state) => ({ ...state, error }));
    } finally {
      setSubmitRequstState((state) => ({ ...state, loading: false }));
    }
  };

  const onError = (_error) => {
    // TODO: handle error case
  };

  return (
    <FormProvider {...formFields}>
      {submitRequstState.loading && (
        <CardModal closeable={false}>
          <ActivityIndicator size="large" />
        </CardModal>
      )}
      <CompositionSection>
        <InputControl>
          <InputCotrolLabel>Login</InputCotrolLabel>
          <FormTextInput
            name="login"
            label="Login"
            rules={{
              required: true,
            }}
            // error={errors?.advancedRefugee?.name}
            // errorMsg={t("refugeeAddForm.errors.name")}
          />
        </InputControl>
        <InputControl>
          <InputCotrolLabel>Password</InputCotrolLabel>
          <FormTextInput
            name="password"
            label="Password"
            rules={{
              required: true,
            }}
            // error={errors?.advancedRefugee?.name}
            // errorMsg={t("refugeeAddForm.errors.name")}
          />
        </InputControl>
      </CompositionSection>
      <CompositionSection
        zIndex={1}
        padding={[35, 30, 8, 30]}
        backgroundColor="#F5F4F4"
      >
        <InputControl>
          <ButtonCta
            onPress={handleSubmit(onSubmit, onError)}
            anchor="Login"
            // style={styles.addButton}
          />
          {isSubmitted && !isValid ? <Error>Login error</Error> : null}
        </InputControl>
      </CompositionSection>
    </FormProvider>
  );
};

const PhoneForm = function ({ onSubmit: propsOnSubmit }) {
  const submitRequestDefualtState = {
    loading: false,
    error: null,
    succeeded: false,
  };

  const formFields = useForm({
    defaultValues: {},
  });
  const {
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitted },
  } = formFields;
  const [submitRequstState, setSubmitRequstState] = useState(
    submitRequestDefualtState
  );

  const onSubmit = async (data) => {
    const apiObject = {
      phone: data.phone,
    };

    setSubmitRequstState((state) => ({ ...state, loading: true }));

    try {
      await propsOnSubmit(apiObject);
      setSubmitRequstState((state) => ({ ...state, succeeded: true }));
    } catch (error) {
      setSubmitRequstState((state) => ({ ...state, error }));
    } finally {
      setSubmitRequstState((state) => ({ ...state, loading: false }));
    }
  };

  const onError = (_error) => {
    // TODO: handle error case
  };

  return (
    <FormProvider {...formFields}>
      {submitRequstState.loading && (
        <CardModal closeable={false}>
          <ActivityIndicator size="large" />
        </CardModal>
      )}
      <CompositionSection>
        <InputControl>
          <InputCotrolLabel>Phone</InputCotrolLabel>
          <FormTextInput
            name="phone"
            label="phone"
            rules={{
              required: true,
            }}
            // error={errors?.advancedRefugee?.name}
            // errorMsg={t("refugeeAddForm.errors.name")}
          />
        </InputControl>
      </CompositionSection>
      <CompositionSection
        zIndex={1}
        padding={[35, 30, 8, 30]}
        backgroundColor="#F5F4F4"
      >
        <InputControl>
          <ButtonCta
            onPress={handleSubmit(onSubmit, onError)}
            anchor="Send code"
            // style={styles.addButton}
          />
          {isSubmitted && !isValid ? <Error>Login error</Error> : null}
        </InputControl>
      </CompositionSection>
    </FormProvider>
  );
};

const PhoneCodeForm = function ({ onSubmit: propsOnSubmit }) {
  const submitRequestDefualtState = {
    loading: false,
    error: null,
    succeeded: false,
  };

  const formFields = useForm({
    defaultValues: {},
  });
  const {
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitted },
  } = formFields;
  const [submitRequstState, setSubmitRequstState] = useState(
    submitRequestDefualtState
  );

  const onSubmit = async (data) => {
    const apiObject = {
      code: data.code,
    };

    setSubmitRequstState((state) => ({ ...state, loading: true }));

    try {
      await propsOnSubmit(apiObject);
      setSubmitRequstState((state) => ({ ...state, succeeded: true }));
    } catch (error) {
      setSubmitRequstState((state) => ({ ...state, error }));
    } finally {
      setSubmitRequstState((state) => ({ ...state, loading: false }));
    }
  };

  const onError = (_error) => {
    // TODO: handle error case
  };

  return (
    <FormProvider {...formFields}>
      {submitRequstState.loading && (
        <CardModal closeable={false}>
          <ActivityIndicator size="large" />
        </CardModal>
      )}
      <CompositionSection>
        <InputControl>
          <InputCotrolLabel>Code</InputCotrolLabel>
          <FormTextInput
            name="code"
            label="code"
            rules={{
              required: true,
            }}
            // error={errors?.advancedRefugee?.name}
            // errorMsg={t("refugeeAddForm.errors.name")}
          />
        </InputControl>
      </CompositionSection>
      <CompositionSection
        zIndex={1}
        padding={[35, 30, 8, 30]}
        backgroundColor="#F5F4F4"
      >
        <InputControl>
          <ButtonCta
            onPress={handleSubmit(onSubmit, onError)}
            anchor="Login"
            // style={styles.addButton}
          />
          {isSubmitted && !isValid ? <Error>Login error</Error> : null}
        </InputControl>
      </CompositionSection>
    </FormProvider>
  );
};

const PhoneLogin = function ({ auth, onSuccess, onError }) {
  const [confirmationResult, setConfirmationResult] = useState();
  const [recaptchaVerifier, setRecaptchaVerifier] = useState();

  useEffect(() => {
    setRecaptchaVerifier(
      new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // onSignInSubmit();
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        },
        auth
      )
    );
  }, []);

  const sendCode = async function (phone) {
    try {
      setConfirmationResult(
        await signInWithPhoneNumber(auth, phone, recaptchaVerifier)
      );
    } catch (e) {
      onError(e.message);
      // Error; SMS not sent
    }
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
  };

  const signWithCode = async function (code) {
    try {
      const result = await confirmationResult.confirm(code);
      await onSuccess(result.user);
    } catch (e) {
      onError(e.message);
    }
  };

  return (
    <>
      <div id="recaptcha-container"></div>
      {!confirmationResult && (
        <PhoneForm onSubmit={(data) => sendCode(data.phone)} />
      )}
      {confirmationResult && (
        <PhoneCodeForm onSubmit={(data) => signWithCode(data.code)} />
      )}
    </>
  );
};

const PassLogin = function ({ auth, onSuccess, onError }) {
  const signWithPass = async (login, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, login, password);
      onSuccess(result.user);
    } catch (e) {
      onError(e.message);
    }
  };

  return (
    <LoginForm
      onSubmit={async (data) => await signWithPass(data.login, data.password)}
    />
  );
};

export default function App() {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const auth = getAuth(app);
  auth.useDeviceLanguage();

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  const testToken = async () => {
    const token = await getIdToken(user, true);
    fetch(`/api/test/test`, {
      method: "post",
      body: JSON.stringify({ token }),
    });
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <CompositionAppBody>
      <CompositionContainer>
        {error}

        {user && (
          <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
            <FormContainer>
              <Text>Name: {user.displayName}</Text>
              <Text>Email: {user.email}</Text>
              <Text>Phone: {user.phoneNumber}</Text>
              <br />
              <Button title="test token" onPress={testToken}></Button>
              <br />
              <Button title="sign out" onPress={logOut}></Button>
              <br />
            </FormContainer>
          </CompositionSection>
        )}

        {!user && (
          <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
            <FormContainer>
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
              <PhoneLogin
                auth={auth}
                onSuccess={(user) => setUser(user)}
                onError={setError}
              />
              <PassLogin auth={auth} onSuccess={setUser} onError={setError} />
            </FormContainer>
          </CompositionSection>
        )}
      </CompositionContainer>
    </CompositionAppBody>
  );
}
