import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";

import SignInForm from "../src/components/AuthTest/SigninForm";
import UserProfile from "../src/components/AuthTest/UserProfile";
import useAuth from "../src/components/AuthTest/useAuth";

export default function App() {
  const [
    identityUser,
    account,
    getTokenForAPI,
    sendEmailVer,
    sendPasswordReset,
  ] = useAuth();

  return (
    <CompositionAppBody>
      <CompositionContainer>
        {identityUser && (
          <>
            <UserProfile
              getTokenForAPI={getTokenForAPI}
              identityUser={identityUser}
              account={account}
              sendEmailVer={sendEmailVer}
              sendPasswordReset={sendPasswordReset}
            />

            {account && account.verified && (
              <h1 style={{ color: "black" }}>Content for verified account</h1>
            )}
            {account && !account.verified && (
              <h1 style={{ color: "black" }}>
                Content for not verified account
              </h1>
            )}
          </>
        )}

        {!identityUser && <SignInForm />}
      </CompositionContainer>
    </CompositionAppBody>
  );
}
