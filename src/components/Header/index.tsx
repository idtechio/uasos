import { HeaderPage, ActionBar, ServiceLogo } from "./style";
import Logo from "./image/Logo";
// import { ButtonCta, ButtonDefault } from "../Buttons";
// import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import HamburgerButton from "../Navigation/HamburgerButton";
import NavigationDrawer from "../Navigation/NavigationDrawer";
import { useState } from "react";
// import { useTranslation } from "next-i18next";

const Header = () => {
  // const { data: session } = useSession();
  // const { t } = useTranslation();

  const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);

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
          {/* {session ? (
          <ButtonDefault anchor={t("logout")}onPress={() => signOut()} />
        ) : (
          <ButtonCta anchor={t("shareLocation")} onPress={() => signIn()} />
        )} */}
          <HamburgerButton onPress={toggleNavigationDrawer} />
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
