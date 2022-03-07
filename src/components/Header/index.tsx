import { HeaderPage, ActionBar, ServiceLogo } from "./style";
import Logo from "./image/Logo";
import Link from "next/link";
import HamburgerButton from "../Navigation/HamburgerButton";
import NavigationDrawer from "../Navigation/NavigationDrawer";
import { Fragment, useState } from "react";
import { useSession } from "next-auth/react";
import LanguageSwitcher from "../LanguageSwitcher";
import { View, StyleSheet } from "react-native";
import { HOMEPAGE_ROUTE } from "../../consts/router";

const Header = () => {
  const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);
  const { data: session } = useSession();

  const toggleNavigationDrawer = () =>
    setNavigationDrawerOpen(!navigationDrawerOpen);

  return (
    <>
      <HeaderPage>
        <ServiceLogo>
          <Link href={HOMEPAGE_ROUTE}>
            <a>
              <Logo />
            </a>
          </Link>
        </ServiceLogo>
        <ActionBar>
          <View style={styles.flags}>
            <LanguageSwitcher />
          </View>
          {session ? (
            <HamburgerButton onPress={toggleNavigationDrawer} />
          ) : (
            <Fragment />
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

const styles = StyleSheet.create({
  flags: {
    flexDirection: "row",
    marginRight: 20,
  },
});

export default Header;
