import { HeaderPage, ActionBar, ServiceLogo } from "./style";
import Logo from "./image/Logo";
import Link from "next/link";
import HamburgerButton from "../Navigation/HamburgerButton";
import NavigationDrawer from "../Navigation/NavigationDrawer";
import { useState } from "react";
import { useSession } from "next-auth/react";

const Header = () => {
  const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);
  const { data: session } = useSession();

  const toggleNavigationDrawer = () =>
    setNavigationDrawerOpen(!navigationDrawerOpen);

  return (
    <>
      <HeaderPage>
        <ServiceLogo>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </ServiceLogo>
        <ActionBar>
          {session ? (
            <HamburgerButton onPress={toggleNavigationDrawer} />
          ) : (
            <></>
          )}
        </ActionBar>
      </HeaderPage>
      <NavigationDrawer
        isOpen={navigationDrawerOpen}
        hideDrawer={toggleNavigationDrawer}
      />
    </>
  );
};

export default Header;
