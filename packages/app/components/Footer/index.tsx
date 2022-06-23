import React from "react";
import { useTranslation } from "../../common-i18n/use-translation";
import {Link} from "solito/link";
import {
  FooterContentWrapper,
  FooterLink,
  FooterWrapper,
  FooterHeaderWrapper,
  HorizontalLine,
} from "./Footer.styled";
import SosuaLogoWhite from "../../style/svgs/sosua_logo_white.svg";
import { Routes } from "../../consts/router";

const Footer = () => {
  const { t } = useTranslation();
  const { PRIVACY_POLICY, REGULATIONS, PARTNERS, FAQ } = Routes;

  return (
    <FooterWrapper>
    <FooterHeaderWrapper>
      <SosuaLogoWhite />
    </FooterHeaderWrapper>
    <HorizontalLine />
    <FooterContentWrapper>
      <Link href={REGULATIONS} >
        <FooterLink>
          {t("others:common.footer.termsOfService")}
        </FooterLink>
      </Link>
      <Link href={PRIVACY_POLICY} >
        <FooterLink>
          {t("privacyPolicy")}
        </FooterLink>
      </Link>
      <Link href={PARTNERS} >
        <FooterLink>
          {t("patrons")}
        </FooterLink>
      </Link>
      <Link href={FAQ} >
        <FooterLink>
          {t("others:common.footer.FAQ")}
        </FooterLink>
      </Link>
      {/* <Link href="/faq.pdf" passHref locale={false}>
        <FooterLink>{t("others:common.footer.FAQ")}</FooterLink>
      </Link> */}
      <Link href="/safety-tips.pdf" locale={false}>
        <FooterLink>{t("others:common.footer.yourSafety")}</FooterLink>
      </Link>
    </FooterContentWrapper>
  </FooterWrapper>
  );
};

export default Footer;