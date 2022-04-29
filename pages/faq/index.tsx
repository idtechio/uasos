import { useState, useMemo, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { CompositionAppBody } from "../../src/components/Compositions";
import Logo from "../../src/components/Header/image/Logo";
import { GetServerSideProps } from "next";
import { withSession } from "../../src/helpers/withSession";
import Accordion from "./Accordion";
import { LanguageFlags } from "../../src/components/LanguageSwitcher/LanguageFlags";
import { base } from "../../src/style/theme.config";
import { languagesList, languagesListNames } from "./languagesList";
import faq from "../../public/locales/en/faq.json";
import {
  TopLeftBlueSplash,
  TopLeftBlueSplashPosition,
  TopRightYellowSplash,
  TopRightYellowSplashPosition,
  Content,
  HeaderWrapper,
  ContentWrapper,
  LanguageFlagsWrapper,
  Title,
  YellowHighlight,
  ButtonWrapper,
  ButtonCtaWidthFixed,
  TitleWrapper,
  TitleName,
  TitleQuestion,
  TitleContent,
} from "./styled";

const PrivacyPolicyPage = () => {
  const { asPath, locale } = useRouter();
  const { t } = useTranslation("faq");
  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setIsDesktop(window.innerWidth > base.breakPoints.md);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const faqQuestionsElements = () =>
    useMemo(() => {
      return Object.values(faq).map((el) => {
        return Object.values(el).map((elContent) => {
          if (typeof elContent === "object") {
            if (!isDesktop) {
              return <Accordion nameCategory={el.name} content={elContent} />;
            }

            return Object.values(elContent).map((elContentValue, index) => {
              if (isDesktop) {
                return (
                  <TitleWrapper key={elContentValue.question}>
                    {!index && <TitleName>{el.name}</TitleName>}
                    <TitleQuestion>{elContentValue.question}</TitleQuestion>
                    <TitleContent>{elContentValue.answer}</TitleContent>
                  </TitleWrapper>
                );
              }
            });
          }
        });
      });
    }, [isDesktop]);

  const languagesListElements = () =>
    useMemo(
      () =>
        isDesktop
          ? languagesList.map((el, index) => (
              <RenderedButtonCtaLang lang={el} index={index} />
            ))
          : null,
      [isDesktop]
    );

  const RenderedButtonCtaLang = ({
    lang,
    index,
  }: {
    lang: string;
    index: number;
  }) => {
    return (
      <Link passHref href={asPath} locale={lang}>
        <ButtonCtaWidthFixed anchor={languagesListNames[index]} />
      </Link>
    );
  };

  return (
    <CompositionAppBody>
      <Content isDesktop={isDesktop}>
        {isDesktop && (
          <>
            <TopLeftBlueSplash
              color="blue"
              // @ts-expect-error TODO: fix prop types
              splashPosition={TopLeftBlueSplashPosition}
            />
            <TopRightYellowSplash
              color="yellow"
              // @ts-expect-error TODO: fix prop types
              splashPosition={TopRightYellowSplashPosition}
            />
          </>
        )}
        <HeaderWrapper isDesktop={isDesktop}>
          {isDesktop && <Logo />}
          <Title
            accessibilityRole="heading"
            accessibilityLevel={1}
            isDesktop={isDesktop}
          >
            {t("FAQ")}
            {!isDesktop && <YellowHighlight />}
          </Title>
          <ButtonWrapper>{languagesListElements()}</ButtonWrapper>
          <ContentWrapper>
            {isDesktop && (
              <LanguageFlagsWrapper>
                <LanguageFlags locale={locale} width={53} height={34} />
              </LanguageFlagsWrapper>
            )}
            {faqQuestionsElements()}
          </ContentWrapper>
        </HeaderWrapper>
      </Content>
    </CompositionAppBody>
  );
};

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) => ({
    props: {
      session,
      ...(locale && (await serverSideTranslations(locale))),
    },
  })
);

export default PrivacyPolicyPage;
