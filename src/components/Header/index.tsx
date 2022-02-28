import { HeaderPage, ActionBar, ServiceLogo } from "./style";
import Logo from "./image/Logo";
import { ButtonCta, ButtonDefault } from "../Buttons";
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
          <ButtonDefault anchor="wyloguj" onPress={() => signOut()} />
        ) : (
          <ButtonCta anchor="udostępnij miejsce" onPress={() => signIn()} />
        )}
      </ActionBar>
    </HeaderPage>
  );
};

export default Header;
