import React, { useContext } from "react";
import { useWindowDimensions } from "react-native";
import { useRouter } from "solito/router";
import { Link } from "solito/link";
import RenderHtml from "react-native-render-html";
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
  styles,
} from "./style";

const LandingProjectIntention = () => {
  const { t } = useTranslation(["landingPage", "others", "common"]);

  const router = useRouter();
  const { width } = useWindowDimensions();
  const { identity, account } = useContext(AuthContext);

  const isAccountVerified =
    identity && account?.confirmedEmail && account?.confirmedPhone;

  return (
    <Container>
      <ContentWrapper>
        <TextContainer>
          {/* @ts-expect-error TODO: fix prop types */}
          <Title accessibilityRole="heading" accessibilityLevel={1}>
            {t("landingPage:projectIntention.title")}
          </Title>

          <SubTitleWrapper>
            <RenderHtml
              tagsStyles={{ b: styles.html }}
              contentWidth={width}
              source={{ html: t("others:welcomePage.appDescription") }}
            />
          </SubTitleWrapper>

          <ButtonContainer>
            {isAccountVerified ? (
              <>
                <Link href="/guest">
                  <ButtonStyle
                    colorOpposite
                    anchor={t("landingPage:projectIntention.lookingForHelp")}
                  />
                </Link>
                <Link href="/host">
                  <ButtonStyle
                    colorOpposite
                    anchor={t("landingPage:projectIntention.shareHelp")}
                  />
                </Link>
              </>
            ) : (
              <>
                <ButtonStyle
                  first
                  colorOpposite
                  anchor={t("common:shareLocation")}
                  onPress={() => router.push(Routes.SIGN_IN)}
                />
              </>
            )}
            <Link href="/public-shelters">
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
            </Link>
          </ButtonContainer>
        </TextContainer>
      </ContentWrapper>
    </Container>
  );
};

export default LandingProjectIntention;
