import { HeaderPage, ActionBar, ServiceLogo } from "./style";
import Logo from "./image/Logo";
import { ButtonCta } from "../Buttons";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <HeaderPage>
      <ServiceLogo>
        <Logo />
      </ServiceLogo>
      <ActionBar>
        {session ? (
          <ButtonCta anchor="dodaj lokum" onPress={() => signOut()} />
        ) : (
          <ButtonCta anchor="dodaj lokum" onPress={() => signIn()} />
        )}
      </ActionBar>
    </HeaderPage>
  );
};

export default Header;
