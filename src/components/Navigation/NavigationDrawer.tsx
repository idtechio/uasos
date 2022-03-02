import React from "react";
import NavigationMenuItem from "./NavigationMenuItem.tsx/NavigationMenuItem";
import { useTranslation } from "next-i18next";

import UserIcon from "../../style/svgs/user.svg";
import ListIcon from "../../style/svgs/list.svg";
import KeyIcon from "../../style/svgs/key.svg";
import { DrawerContainer, DrawerEmptySpace } from "./style";
import { signIn, signOut, useSession } from "next-auth/react";
import { ButtonCta } from "../Buttons";

interface Props {
  isOpen: boolean;
  hideDrawer: () => void;
}

const NavigationDrawer = ({ isOpen, hideDrawer }: Props) => {
  const { t } = useTranslation("common");
  const { data: session } = useSession();

  if (!isOpen) {
    return null;
  }

  const noop = () => {};

  return (
    <>
      <DrawerContainer>
        {session ? (
          <>
            {/* <NavigationMenuItem
              title={t("navigationDrawer.profile")}
              Icon={UserIcon}
              onPress={noop} // TODO implement
            />
            <NavigationMenuItem
              title={t("navigationDrawer.placesList")}
              Icon={ListIcon}
              onPress={noop} // TODO implement
            /> */}
            <NavigationMenuItem
              title={t("navigationDrawer.logout")}
              Icon={KeyIcon}
              onPress={() => signOut()}
            />
          </>
        ) : (
          <></>
        )}
      </DrawerContainer>
      <DrawerEmptySpace onPress={hideDrawer} />
    </>
  );
};

export default NavigationDrawer;
