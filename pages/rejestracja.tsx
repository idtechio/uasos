import {
  CompositionAppBody,
  CompositionContainer,
} from "../src/components/Compositions";
import { useSession, signIn, signOut } from "next-auth/react";

export default function App(props) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
