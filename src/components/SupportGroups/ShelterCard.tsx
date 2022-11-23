import { useTranslation } from "next-i18next";
import styled, { css } from "styled-components/native";
import PlaneIcon from "../../../src/style/svgs/plane.svg";
import MarkerIcon from "../../../src/style/svgs/marker.svg";
import MainLanguageIcon from "../../../src/style/svgs/message_main_language.svg";
import ActivityIcon from "../../../src/style/svgs/activity_reapeat_arrows.svg";
import LoaderIcon from "../../../src/style/svgs/loader.svg";
import { Theme } from "../../style/theme.config";
import { ButtonCta } from "../Buttons";

export const ShelterCard = ({
  name,
  country,
  howToGetThere,
}: {
  name: string;
  country: string;
  howToGetThere: string;
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <FlexContainer>
        <Column>
          <Header>
            <HeaderContent>
              <Country>{country}</Country>
              <Title>{name}</Title>
            </HeaderContent>
          </Header>
        </Column>
      </FlexContainer>
      <SectionInfoWrapper>
        <MarkLime />
        <SectionInfo>
          <Info>
            <MarkerIcon width={15} height={15} />
            <RowText>
              <InnerHTML>
                <InnerHTMLText>
                  {t("common:supportGroup.countryOfOrigin")}:
                </InnerHTMLText>
              </InnerHTML>
            </RowText>
          </Info>
          <InfoLine>
            <RowText>
              <InnerHTML>
                <InnerHTMLText>{t("common:supportGroup.reach")}</InnerHTMLText>
              </InnerHTML>
            </RowText>
          </InfoLine>
          <InfoLine>
            <RowText>
              <InnerHTML>
                <InnerHTMLText>{t("common:supportGroup.size")}</InnerHTMLText>
              </InnerHTML>
            </RowText>
          </InfoLine>
        </SectionInfo>

        <SectionInfo>
          <Info>
            <MainLanguageIcon />
            <RowText>
              <InnerHTML>
                <InnerHTMLText>
                  {t("common:supportGroup.mainLanguage")}:
                </InnerHTMLText>
              </InnerHTML>
            </RowText>
          </Info>
          <Info>
            <ActivityIcon />
            <RowText>
              <InnerHTML>
                <InnerHTMLText>
                  {t("common:supportGroup.activity")}
                </InnerHTMLText>
              </InnerHTML>
            </RowText>
          </Info>
          <Info>
            <LoaderIcon />
            <RowText>
              <InnerHTML>
                <InnerHTMLText>
                  {t("common:supportGroup.supportType")}
                </InnerHTMLText>
              </InnerHTML>
            </RowText>
          </Info>
        </SectionInfo>
      </SectionInfoWrapper>

      <Footer>
        <ButtonLink
          onPress={() => {}}
          anchor={
            <FlexTextIcon>
              <ButtonText>{t("others:common.words.link")}</ButtonText>
              <PlaneIcon />
            </FlexTextIcon>
          }
        />
      </Footer>
    </Container>
  );
};

const Container = styled.View`
  shadow-color: #000;
  shadow-offset: {
    width: 0,
    height: -20,
  };
  shadow-opacity: 0.2;
  shadow-radius: 10;
  elevation: 10;
  padding: 15px;
  background: #fff;
  /* border-radius: 5px; */
  height: fit-content;
`;

const Column = styled.View<CommonProp>(
  ({ theme }) => css`
    flex-grow: 1;

    ${theme.getBreakPoint({
      md: css`
        flex-grow: 0;
      `,
    })};
  `
);

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const HeaderContent = styled.View`
  flex: 1;
`;

interface CommonProp {
  theme: Theme;
}

const Footer = styled.View<CommonProp>(
  ({ theme }) => css`
    position: absolute;
    right: 14px;
    padding-top: 15px;
    flex-direction: row;
    justify-content: flex-end;

    ${theme.getBreakPoint({
      md: css`
        justify-content: flex-start;
      `,
    })};
  `
);

const ButtonLink = styled(ButtonCta)`
  padding: 16px 32px;
`;

const Button = styled.TouchableOpacity<CommonProp>(
  ({ theme }) => css`
    display: block;

    ${theme.getBreakPoint({
      md: css`
        display: none;
      `,
    })};
  `
);

const Country = styled.Text<CommonProp>(
  ({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.headings};
  `
);

const Title = styled.Text<CommonProp>(
  ({ theme }) => css`
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: ${theme.colors.headings};
  `
);

const SectionInfoWrapper = styled.View`
  position: relative;
  width: 70%;
  flex-direction: row;
  justify-content: space-around;
`;

const SectionInfo = styled.View`
  flex-grow: 1;
  gap: 18px 0px;
  padding: 15px 0px;
`;

const FlexContainer = styled.View<CommonProp>(
  ({ theme }) => css`
    flex-grow: 1;

    ${theme.getBreakPoint({
      md: css`
        flex-direction: row;
        gap: 0px 25px;
      `,
    })};
  `
);

const Info = styled.View<CommonProp>(
  ({ theme }) => css`
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: 30px;
    gap: 0px 5px;
    font-size: 14px;
    line-height: 19px;
    padding: 0px 5px;

    ${theme.getBreakPoint({
      md: css`
        font-size: 16px;
      `,
    })};
  `
);

const InfoLine = styled(Info)`
  margin-left: 20px;
`;

const MarkLime = styled.View<CommonProp>(
  ({ theme }) => css`
    position: absolute;
    bottom: 20px;
    left: 10px;
    width: 1px;
    height: 78px;
    border-radius: 16px;
    background-color: ${theme.colors.headings};
  `
);

const ButtonText = styled.Text<CommonProp>(
  ({ theme }) => css`
    color: ${theme.colors.headings};
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  `
);

const FlexTextIcon = styled.View<CommonProp>(
  ({ theme }) => css`
    gap: 0px 10px;
    align-items: center;
    flex-direction: row;
    color: ${theme.colors.headings};
  `
);

export const RowText = styled.Text<CommonProp>(
  ({ theme }) => css`
    color: ${theme.colors.headings};
  `
);

export const InnerHTML = styled.View`
  margin: 1em 0;
`;

export const InnerHTMLText = styled.Text``;
