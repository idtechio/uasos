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
import { Routes } from "../../consts/router";

const Footer = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { PRIVACY_POLICY, REGULATIONS, PARTNERS, FAQ } = Routes;

  return (
    <FooterWrapper>
      <FooterHeaderWrapper>
        <SosuaLogoWhite />
      </FooterHeaderWrapper>
      <HorizontalLine />
      <FooterContentWrapper>
        <Link href={REGULATIONS} passHref>
          <FooterLink active={router.pathname === REGULATIONS}>
            {t("others:common.footer.termsOfService")}
          </FooterLink>
        </Link>
        <Link href={PRIVACY_POLICY} passHref>
          <FooterLink active={router.pathname === PRIVACY_POLICY}>
            {t("privacyPolicy")}
          </FooterLink>
        </Link>
        <Link href={PARTNERS} passHref>
          <FooterLink active={router.pathname === PARTNERS}>
            {t("patrons")}
          </FooterLink>
        </Link>
        <Link href={FAQ} passHref>
          <FooterLink active={router.pathname === FAQ}>
            {t("others:common.footer.FAQ")}
          </FooterLink>
        </Link>
        {/* <Link href="/faq.pdf" passHref locale={false}>
          <FooterLink>{t("others:common.footer.FAQ")}</FooterLink>
        </Link> */}
        <Link href="/safety-tips.pdf" passHref locale={false}>
          <FooterLink>{t("yourSafety")}</FooterLink>
        </Link>
      </FooterContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
