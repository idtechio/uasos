import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ChevronRight from "../../style/svgs/chevron-right.svg";
import { Routes } from "../../consts/router";
import { AuthContext } from "../../../pages/_app";
import { useCallback, useContext } from "react";

import {
  Container,
  ContentWrapper,
  SubTitleWrapper,
  TextContainer,
  Title,
  ButtonContainer,
  ButtonStyle,
  FlexAnchor,
  ButtonText,
  SubTitle,
} from "./style";

const LandingProjectIntention = () => {
  const { t } = useTranslation("landingPage");
  const { t: t_others } = useTranslation("others");
  const router = useRouter();
  const { identity, account } = useContext(AuthContext);

  const isAccountVerified =
    identity && account?.confirmedEmail && account?.confirmedPhone;

  const welcomeAppDescription = t_others("welcomePage.appDescription");

  const goTo = useCallback((link: string) => () => router.push(link), [router]);

  return (
    <Container>
      <ContentWrapper>
        <TextContainer>
          {/* @ts-expect-error TODO: fix prop types */}
          <Title accessibilityRole="heading" accessibilityLevel={1}>
            {t("projectIntention.title")}
          </Title>

          <SubTitleWrapper>
            <SubTitle>{welcomeAppDescription}</SubTitle>
          </SubTitleWrapper>

          <ButtonContainer>
            {isAccountVerified ? (
              <>
                <ButtonStyle
                  colorOpposite
                  anchor={t("projectIntention.lookingForHelp")}
                  onPress={goTo(Routes.GUEST)}
                />
                <ButtonStyle
                  colorOpposite
                  anchor={t("projectIntention.shareHelp")}
                  onPress={goTo(Routes.HOST)}
                />
              </>
            ) : (
              <>
                <ButtonStyle
                  first
                  colorOpposite
                  anchor={t("common:shareLocation")}
                  onPress={goTo(`/${router?.locale}${Routes.SIGN_IN}`)}
                />
              </>
            )}
            <ButtonStyle
              onPress={goTo(Routes.PUBLIC_SHELTERS)}
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                border: "1.5px solid rgb(0, 53, 102)",
                boxSizing: "border-box",
              }}
              anchor={
                <FlexAnchor>
                  <ButtonText>
                    {t("others:common.words.publicShelters")}
                  </ButtonText>
                  <ChevronRight />
                </FlexAnchor>
              }
            />
          </ButtonContainer>
        </TextContainer>
      </ContentWrapper>
    </Container>
  );
};

export default LandingProjectIntention;
