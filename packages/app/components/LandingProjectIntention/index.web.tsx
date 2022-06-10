import React, { useContext } from "react";
import { useRouter } from "solito/router";
import { Link } from "solito/link";
import { useTranslation } from "../../common-i18n/use-translation";
import { Routes } from "../../consts/router";
import { AuthContext } from "../../../pages/_app";
import ChevronRight from "../../style/svgs/chevron-right.svg";
import {
  ButtonContainer,
  ButtonStyle,
  ButtonText,
  Container,
  ContentWrapper,
  FlexAnchor,
  SubTitleWrapper,
  TextContainer,
  Title,
  SubTitleWeb,
} from "./style";

const LandingProjectIntention = () => {
  const { t } = useTranslation(["landingPage", "others", "common"]);

  const router = useRouter();
  const { identity, account } = useContext(AuthContext);

  const isAccountVerified =
    identity && account?.confirmedEmail && account?.confirmedPhone;

  const welcomeAppDescription = t("others:welcomePage.appDescription");
  return (
    <Container>
      <ContentWrapper>
        <TextContainer>
          {/* @ts-expect-error TODO: fix prop types */}
          <Title accessibilityRole="heading" accessibilityLevel={1}>
            {t("landingPage:projectIntention.title")}
          </Title>

          <SubTitleWrapper>
            <SubTitleWeb
              dangerouslySetInnerHTML={{ __html: welcomeAppDescription }}
            />
          </SubTitleWrapper>

          <ButtonContainer>
            {isAccountVerified ? (
              <>
                <Link href="/guest">
                  <a>
                    <ButtonStyle
                      colorOpposite
                      anchor={t("landingPage:projectIntention.lookingForHelp")}
                    />
                  </a>
                </Link>
                <Link href="/host">
                  <a>
                    <ButtonStyle
                      colorOpposite
                      anchor={t("landingPage:projectIntention.shareHelp")}
                    />
                  </a>
                </Link>
              </>
            ) : (
              <>
                <ButtonStyle
                  first
                  colorOpposite
                  anchor={t("common:shareLocation")}
                  onPress={(event) => {
                    event?.preventDefault();
                    // TODO: change component to not use language in router
                    router.push(`/${router?.locale}${Routes.SIGN_IN}`);
                  }}
                />
              </>
            )}
            <Link href="/public-shelters">
              <a>
                <ButtonStyle
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
              </a>
            </Link>
          </ButtonContainer>
        </TextContainer>
      </ContentWrapper>
    </Container>
  );
};

export default LandingProjectIntention;
