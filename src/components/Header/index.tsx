import { HeaderPage, ActionBar, ServiceLogo, Container } from "./style";
import Logo from "./image/Logo";
import HamburgerButton from "../Navigation/HamburgerButton";
import NavigationDrawer from "../Navigation/NavigationDrawer";
import { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
import { View, StyleSheet, Pressable } from "react-native";
import { Routes } from "../../consts/router";
import router from "next/router";

const Header = () => {
  const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);

  const toggleNavigationDrawer = () =>
    setNavigationDrawerOpen(!navigationDrawerOpen);

  const onPressLogo = () => router.push(Routes.HOMEPAGE);

  return (
    <Container>
      <HeaderPage>
        <ServiceLogo>
          <Pressable onPress={onPressLogo}>
            <Logo width={129} height={40} />
          </Pressable>
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
