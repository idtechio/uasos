import { Button, Text } from "react-native-web";
import { CompositionSection } from "../Compositions";
import FormContainer from "../FormLogin/FormContainer";
import AuthAPI from "./authAPI";
import { logOut } from "./useAuth";

const UserProfile = function ({ identityUser, account, getTokenForAPI }) {
  const testToken = async () => AuthAPI.testToken(await getTokenForAPI());
  const verifyEmail = async () => AuthAPI.verifyEmail(await getTokenForAPI());

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

        <Button title="test token" onPress={testToken}></Button>
        <br />
        <Button title="sign out" onPress={logOut}></Button>
        <br />
      </FormContainer>
    </CompositionSection>
  );
};

export default UserProfile;
