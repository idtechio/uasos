import { useState, useMemo, useLayoutEffect } from "react";
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
import languagesList from "./languagesList";
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
  ButtonWrapper,
  ButtonCtaWidthFixed,
  SubTitle,
  TitleQuestion,
  TitleContent,
} from "./styled";

const faqQuestions = [
  {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  },
  {
    title: "Section 2",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
];

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
      if (isDesktop) {
        return faqQuestions.map((el) => (
          <div key={el.title}>
            <TitleQuestion>{el.title}</TitleQuestion>
            <TitleContent>{el.content}</TitleContent>
          </div>
        ));
      } else {
        return faqQuestions.map((el) => (
          <Accordion title={el.title} content={el.content} />
        ));
      }
    }, [isDesktop]);

  const languagesListElements = () =>
    useMemo(
      () =>
        isDesktop
          ? languagesList.map((el) => <RenderedButtonCtaLang lang={el} />)
          : null,
      [isDesktop]
    );

  const RenderedButtonCtaLang = ({ lang }: { lang: string }) => {
    return (
      <Link passHref href={asPath} locale={lang}>
        <ButtonCtaWidthFixed anchor={t(`others:${lang}`)} />
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
        <HeaderWrapper>
          {isDesktop && <Logo />}
          <Title
            accessibilityRole="heading"
            accessibilityLevel={1}
            isDesktop={isDesktop}
          >
            {t("FAQ")}
          </Title>
          <ButtonWrapper>{languagesListElements()}</ButtonWrapper>
          <ContentWrapper>
            {isDesktop && (
              <LanguageFlagsWrapper>
                <LanguageFlags locale={locale} width={53} height={34} />
              </LanguageFlagsWrapper>
            )}
            <SubTitle isDesktop={isDesktop}>Title</SubTitle>
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
