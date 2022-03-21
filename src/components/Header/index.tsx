import { HeaderPage, ActionBar, ServiceLogo, Container } from "./style";
import Logo from "./image/Logo";
import Link from "next/link";
import HamburgerButton from "../Navigation/HamburgerButton";
import NavigationDrawer from "../Navigation/NavigationDrawer";
import { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import { View, StyleSheet } from "react-native";
import { Routes } from "../../consts/router";

const Header = () => {
  const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);

  const toggleNavigationDrawer = () =>
    setNavigationDrawerOpen(!navigationDrawerOpen);

  return (
    <Container>
      <HeaderPage>
        <ServiceLogo>
          <Link href={Routes.HOMEPAGE}>
            <a>
              <Logo width={129} height={40} />
            </a>
          </Link>
        </ServiceLogo>
        <ActionBar>
          <View style={styles.flags}>
            <LanguageSwitcher />
          </View>
          <HamburgerButton
            isOpen={navigationDrawerOpen}
            onPress={toggleNavigationDrawer}
          />
        </ActionBar>
      </HeaderPage>
      <NavigationDrawer
        isOpen={navigationDrawerOpen}
        hideDrawer={toggleNavigationDrawer}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  flags: {
    flexDirection: "row",
    marginRight: 20,
  },
});

export default Header;
