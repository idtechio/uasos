import React from "react";
import NavigationMenuItem from "./NavigationMenuItem.tsx/NavigationMenuItem";
import { useTranslation } from "next-i18next";

import UserIcon from "../../style/svgs/user.svg";
import ListIcon from "../../style/svgs/list.svg";
import KeyIcon from "../../style/svgs/key.svg";
import { DrawerContainer, DrawerEmptySpace } from "./style";

interface Props {
  isOpen: boolean;
  hideDrawer: () => void;
}

const NavigationDrawer = ({ isOpen, hideDrawer }: Props) => {
  const { t } = useTranslation("common");

  if (!isOpen) {
    return null;
  }

  const noop = () => {
    console.log("noop for testing");
  };

  return (
    <>
      <DrawerContainer>
        <NavigationMenuItem
          title={t("navigationDrawer.profile")}
          Icon={UserIcon}
          onPress={noop}
        />
        <NavigationMenuItem
          title={t("navigationDrawer.placesList")}
          Icon={ListIcon}
          onPress={noop}
        />
        <NavigationMenuItem
          title={t("navigationDrawer.logout")}
          Icon={KeyIcon}
          onPress={noop}
        />
      </DrawerContainer>
      <DrawerEmptySpace onPress={hideDrawer} />
    </>
  );
};

export default NavigationDrawer;
