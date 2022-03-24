import NavigationMenuItem from "./NavigationMenuItem.tsx/NavigationMenuItem";
import { useTranslation } from "next-i18next";

import LogoutIcon from "../../style/svgs/logout.svg";
import UserIcon from "../../style/svgs/user.svg";
import { DrawerContainer, DrawerEmptySpace } from "./style";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Routes } from "../../consts/router";

interface Props {
  isOpen: boolean;
  hideDrawer: () => void;
}

const NavigationDrawer = ({ isOpen, hideDrawer }: Props) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { data: session } = useSession();

  const handleSignOut = () => {
    return signOut({
      redirect: true,
      callbackUrl: router.locale ? `/${router.locale}` : undefined,
    });
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <DrawerContainer>
        {session ? (
          <>
            {/* <NavigationMenuItem
              title={t("navigationDrawer.profile")}
              Icon={UserIcon}
              onPress={noop} // TODO implement
            /> */}
            <NavigationMenuItem
              title={t("navigationDrawer.placesList")}
              Icon={UserIcon}
              onPress={() => {
                router.push("/desktop");
                hideDrawer();
              }}
            />
            <NavigationMenuItem
              title={t("navigationDrawer.logout")}
              Icon={LogoutIcon}
              onPress={handleSignOut}
            />
          </>
        ) : (
          <NavigationMenuItem
            title={t("navigationDrawer.logIn")}
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
