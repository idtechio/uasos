import Error from "next/error";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ActivityIndicator } from "react-native-web";
import { ButtonCta } from "../Buttons";
import CardModal from "../CardModal";
import { CompositionSection } from "../Compositions";
import { InputControl, InputCotrolLabel } from "../Forms";
import FormTextInput from "../Inputs/FormTextInput";

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

const PhoneLogin = function ({ initRecaptcha, signInWithPhone, onError }) {
  const [confirmationResult, setConfirmationResult] = useState();
  const [recaptchaVerifier, setRecaptchaVerifier] = useState();

  useEffect(() => {
    setRecaptchaVerifier(initRecaptcha("recaptcha-container"));
  }, []);

  const sendCode = async function (phone) {
    try {
      const r = await signInWithPhone(phone, recaptchaVerifier);
      setConfirmationResult(r);
    } catch (e) {
      onError(e.message); // Error; SMS not sent
    }
  };

  const signWithCode = async function (code) {
    try {
      await confirmationResult.confirm(code);
    } catch (e) {
      onError(e.message);
    }
  };

  return (
    <>
      <div id="recaptcha-container"></div>
      {!confirmationResult && (
        <PhoneForm onSubmit={async (data) => await sendCode(data.phone)} />
      )}
      {confirmationResult && (
        <PhoneCodeForm
          onSubmit={async (data) => await signWithCode(data.code)}
        />
      )}
    </>
  );
};

export default PhoneLogin;
