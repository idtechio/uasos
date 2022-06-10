import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { useRouter } from "solito/router";
import { HeaderPage, ActionBar, ServiceLogo, Container, Flags } from "./style";
import Logo from "./image/Logo";
import HamburgerButton from "../Navigation/HamburgerButton";
import NavigationDrawer from "../Navigation/NavigationDrawer";
import LanguageSwitcher from "../LanguageSwitcher";
import { Routes } from "../../consts/router";

const Header = () => {
  const { push } = useRouter();
  const [navigationDrawerOpen, setNavigationDrawerOpen] = useState(false);

  const toggleNavigationDrawer = () =>
    setNavigationDrawerOpen(!navigationDrawerOpen);

  const onPressLogo = () => push(Routes.HOMEPAGE);

  return (
    <Container>
      <HeaderPage>
        <ServiceLogo>
          <TouchableOpacity onPress={onPressLogo}>
            <Logo width={129} height={40} />
          </TouchableOpacity>
        </ServiceLogo>
        <ActionBar>
          <Flags>
            <LanguageSwitcher />
          </Flags>
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

export default Header;
