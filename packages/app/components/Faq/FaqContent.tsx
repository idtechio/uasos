/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import { useMemo } from "react";
import { useTranslation } from "app/common-i18n/use-translation";
import {
  Content,
  HeaderWrapper,
  ContentWrapper,
  Title,
  YellowHighlight,
  TitleWrapper,
  TitleName,
  TitleQuestion,
  TitleContent,
} from "./styled";

type Faq = {
  [key: string]: {
    name: string;
    content: {
      [key: string]: {
        question: string;
        answer: string;
      };
    };
  };
};


const FaqContent = () => {
  const { i18n, t } = useTranslation('faq');

  const faqQuestionsElements = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { faq } : {faq:Faq} = i18n.getDataByLanguage(i18n.language) as any;

    return Object.values(faq).map((el) => {
      return Object.values(el).map((elContent) => {
        if (typeof elContent === "object") {
          return Object.values(elContent).map((elContentValue, index) => {
            return (
              <TitleWrapper key={elContentValue.question}>
                {!index && <TitleName>{el.name}</TitleName>}
                <TitleQuestion>{elContentValue.question}</TitleQuestion>
                <TitleContent>{elContentValue.answer}</TitleContent>
              </TitleWrapper>
            );
          });
        }
      });
    });
  }, [i18n]);

  return (
    <Content>
      <HeaderWrapper>
        <Title accessibilityRole="header">
          {t("common.footer.FAQ")}
          <YellowHighlight />
        </Title>
        <ContentWrapper>
          {faqQuestionsElements}
        </ContentWrapper>
      </HeaderWrapper>
    </Content>
  );
};

export default FaqContent;
