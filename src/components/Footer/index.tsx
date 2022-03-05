import * as React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Text } from "react-native";

import Section from "../Section";
import {
  FooterContentRow,
  FooterContentWrapper,
  FooterLink,
  FooterWrapper,
  CreatedByWrapper,
  FooteItem,
} from "./Footer.styled";

const LandingFooter = () => {
  const { t } = useTranslation();

  return (
    <Section bgColor="#0057B8">
      <FooterWrapper>
        <FooterContentWrapper>
          <FooterContentRow>
            <Link href="/polityka-prywatnosci.pdf" passHref>
              <FooterLink>{t("gdpr").toUpperCase()}</FooterLink>
            </Link>
            <CreatedByWrapper>
              <FooteItem>
                <Text>created with ❤️ for 🇺🇦</Text>
              </FooteItem>
            </CreatedByWrapper>
          </FooterContentRow>
        </FooterContentWrapper>
      </FooterWrapper>
    </Section>
  );
};

export default LandingFooter;
