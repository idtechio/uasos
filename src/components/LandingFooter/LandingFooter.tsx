import * as React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

import SosuaLogoWhite from "../../../src/style/svgs/sosua_logo_white.svg";
import Section from "../Section";
import Container from "../Container";
import LanguageSwitcher from "../LanguageSwitcher";
import {
  FlagsWrapper,
  FooterContentRow,
  FooterContentWrapper,
  FooterHeaderWrapper,
  FooterItem,
  FooterWrapper,
  HorizontalLine,
  LogoWrapper,
} from "./LandingFooter.styled";

const LandingFooter = () => {
  const { t } = useTranslation();

  return (
    <Section bgColor="#0057B8">
      <FooterWrapper>
        <FooterHeaderWrapper>
          <LogoWrapper>
            <SosuaLogoWhite />
          </LogoWrapper>
          <FlagsWrapper>
            <LanguageSwitcher />
          </FlagsWrapper>
        </FooterHeaderWrapper>
        <HorizontalLine />
        <FooterContentWrapper>
          <FooterContentRow>
            <Link href="/polityka-prywatnosci.pdf" passHref>
              <FooterItem>{t("privacyPolicy")}</FooterItem>
            </Link>
          </FooterContentRow>
          <FooterContentRow>
            <Link href="/regulamin.pdf" passHref>
              <FooterItem>Regulamin</FooterItem>
            </Link>
          </FooterContentRow>
        </FooterContentWrapper>
      </FooterWrapper>
    </Section>
  );
};

export default LandingFooter;
