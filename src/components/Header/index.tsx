import { HeaderPage, ActionBar, ServiceLogo } from "./style";
import Logo from "./image/Logo";
import { ButtonCta, ButtonDefault } from "../Buttons";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();

  return (
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
          <ButtonDefault anchor={t("logout")} onPress={() => signOut()} />
        ) : (
          <ButtonCta anchor={t("shareLocation")} onPress={() => signIn()} />
        )}
      </ActionBar>
    </HeaderPage>
  );
};

export default Header;
