import { useTranslation } from "next-i18next";
import Link from "next/link";
import {
  FooterContentWrapper,
  FooterLink,
  FooterWrapper,
  FooterHeaderWrapper,
  HorizontalLine,
} from "./Footer.styled";
import SosuaLogoWhite from "../../../src/style/svgs/sosua_logo_white.svg";
import { useRouter } from "next/router";

const Footer = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <FooterWrapper>
      <FooterHeaderWrapper>
        <SosuaLogoWhite />
      </FooterHeaderWrapper>
      <HorizontalLine />
      <FooterContentWrapper>
        <Link href="/regulamin.pdf" passHref locale={false}>
          <FooterLink>{t("termsOfService")}</FooterLink>
        </Link>
        <Link href="/polityka-prywatnosci.pdf" passHref locale={false}>
          <FooterLink>{t("privacyPolicy")}</FooterLink>
        </Link>
        <Link href="/partners" passHref>
          <FooterLink active={router.pathname === "/partners"}>
            {t("patrons")}
          </FooterLink>
        </Link>
      </FooterContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
