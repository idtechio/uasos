import { Button, Text } from "react-native-web";
import { CompositionSection } from "../Compositions";
import FormContainer from "../FormLogin/FormContainer";
import AuthAPI from "./authAPI";
import { logOut } from "./useAuth";

const UserProfile = function ({
  identityUser,
  account,
  getTokenForAPI,
  sendEmailVer,
  sendPasswordReset,
}) {
  const testToken = async () => AuthAPI.testToken(await getTokenForAPI());
  const verifyEmail = async () => AuthAPI.verifyEmail(await getTokenForAPI());
  const verifyEmail2 = async () => await sendEmailVer();
  const resetPassword = async () => await sendPasswordReset();
  const addPhoneNumber = async () =>
    AuthAPI.addPhoneNumber(await getTokenForAPI(), "+48111222333");

  return (
    <CompositionSection padding={[40, 15, 0, 15]} flexGrow="2">
      <FormContainer>
        <b>Identity Platform data</b>
        <Text>Uid: {identityUser.uid}</Text>
        <Text>Email: {identityUser.email}</Text>
        <Text>Phone: {identityUser.phoneNumber}</Text>
        <Text>Email verified: {identityUser.emailVerified ? "yes" : "no"}</Text>
        <br />

        {account && (
          <>
            <b>Portal data</b>
            <Text>Verified: {account.verified ? "yes" : "no"}</Text>
            <Text>Name: {account.name}</Text>
            <Text>Confirm email: {account.confirmedEmail ? "yes" : "no"}</Text>
            <Text>Confirm phone: {account.confirmedPhone ? "yes" : "no"}</Text>
            <br />
            {!identityUser.emailVerified && !account.confirmedEmail && (
              <>
                <Button title="verify email" onPress={verifyEmail}></Button>
                <br />
              </>
            )}
          </>
        )}

        {!identityUser.phoneNumber && (
          <>
            <Button title="add phone number" onPress={addPhoneNumber}></Button>
            <br />
          </>
        )}
        {identityUser.email && (
          <>
            <Button title="verify email (API)" onPress={verifyEmail}></Button>
            <br />
          </>
        )}
        {identityUser.email && (
          <>
            <Button title="verify email" onPress={verifyEmail2}></Button>
            <br />
          </>
        )}
        {identityUser.email && (
          <>
            <Button title="reset password" onPress={resetPassword}></Button>
            <br />
          </>
        )}
        <Button title="test token" onPress={testToken}></Button>
        <br />
        <Button title="sign out" onPress={logOut}></Button>
        <br />
      </FormContainer>
    </CompositionSection>
  );
};

export default UserProfile;
