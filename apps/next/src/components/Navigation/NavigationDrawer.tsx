import NavigationMenuItem from "./NavigationMenuItem.tsx/NavigationMenuItem";
import { useTranslation } from "next-i18next";
import { AuthContext } from "../../../pages/_app";
import { Authorization } from "../../hooks/useAuth";
import LogoutIcon from "../../style/svgs/logout.svg";
import UserIcon from "../../style/svgs/user.svg";
import { DrawerContainer, DrawerEmptySpace } from "./style";
import { useRouter } from "next/router";
import { Routes } from "../../consts/router";
import React, { useContext } from "react";

interface Props {
  isOpen: boolean;
  hideDrawer: () => void;
}

const NavigationDrawer = ({ isOpen, hideDrawer }: Props) => {
  const router = useRouter();
  const { t } = useTranslation(["common", "others"]);
  const { identity } = useContext(AuthContext);

  const handleSignOut = () => {
    Authorization.logOut();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <DrawerContainer>
        {identity ? (
          <>
            <NavigationMenuItem
              title={t("others:common.words.dashboard")}
              Icon={UserIcon}
              onPress={() => {
                router.push("/dashboard");
                hideDrawer();
              }}
            />
            <NavigationMenuItem
              title={t("common:navigationDrawer.profile")}
              Icon={UserIcon}
              onPress={() => {
                router.push("/user-profile");
                hideDrawer();
              }}
            />

            <NavigationMenuItem
              title={t("common:navigationDrawer.logout")}
              Icon={LogoutIcon}
              onPress={handleSignOut}
            />
          </>
        ) : (
          <NavigationMenuItem
            title={t("common:navigationDrawer.logIn")}
            Icon={UserIcon}
            onPress={() => {
              router.push(`/${router?.locale}${Routes.SIGN_IN}`);
            }}
          />
        )}
      </DrawerContainer>
      <DrawerEmptySpace onPress={hideDrawer} />
    </>
  );
};

export default NavigationDrawer;
