import Error from "next/error";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ActivityIndicator } from "react-native-web";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import { CompositionSection } from "../Compositions";
import { InputControl, InputCotrolLabel } from "../Forms";
import FormTextInput from "../Inputs/FormTextInput";

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
            // error={errors?.login?.name}
            // errorMsg={t("loginForm.errors.name")}
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
            // error={errors?.password?.name}
            // errorMsg={t("loginForm.errors.name")}
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

const EmailLogin = function ({ signInWithEmail, onError }) {
  const signWithPass = async (login, password) => {
    try {
      await signInWithEmail(login, password);
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

export default EmailLogin;
