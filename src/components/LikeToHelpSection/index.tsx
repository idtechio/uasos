import { useTranslation } from "next-i18next";
import { View } from "react-native";
import styled, { css } from "styled-components/native";
import SectionTitle from "../SectionTitle";
import image1 from "../../../public/image1.png";
import { ButtonCta } from "../Buttons";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const Image = styled.Image`
  flex: 1;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        aspect-ratio: 1.4;
        flex: 1;
      `,
    })}
`;

const Container = styled.View`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => `${theme.maxContainerWidth}px`};

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        flex-direction: row-reverse;
        align-items: center;
        padding: 100px 16px;
      `,
    })}
`;

const ContentContainer = styled.View`
  position: relative;
  padding: 30px 16px;
  align-items: flex-start;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        padding-left: 40px;
      `,
    })}
`;

const ImageContainer = styled.View`
  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        flex: 1;
        aspect-ratio: 1.4;
        padding-right: 80px;
      `,
    })}
`;

const ImageSize = styled.View`
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
  height: 260px;
  padding: 20px;

  ${({ theme }) =>
    theme.getBreakPoint({
      lg: css`
        height: auto;
        aspect-ratio: 1.4;
        flex: 1;
        border-radius: 10px;
      `,
    })}
`;

const ButtonContainer = styled.View`
  margin-top: 25px;
  align-items: flex-start;
  flex-direction: row;
`;

export function LikeToHelpSection() {
  const { t } = useTranslation("landingPage");
  const { data: session } = useSession();
  return (
    <Container>
      <ContentContainer>
        <SectionTitle title={t("likeToHelp.title")} />
        <View>
          {t("likeToHelp.details")}
          <ButtonContainer>
            {session ? (
              <>
                <Link href="/guest">
                  <a>
                    <ButtonCta anchor={t("landingPage.hero.lookingForHelp")} />
                  </a>
                </Link>
                <Link href="/host">
                  <a style={{ marginLeft: 10 }}>
                    <ButtonCta anchor={t("landingPage.hero.shareHelp")} />
                  </a>
                </Link>
              </>
            ) : (
              <ButtonCta
                anchor={t("common:register1")}
                onPress={() => signIn()}
              />
            )}
          </ButtonContainer>
        </View>
      </ContentContainer>
      <ImageContainer>
        <ImageSize>
          <Image source={image1.src} resizeMode="cover" alt="infographic" />
        </ImageSize>
      </ImageContainer>
    </Container>
  );
}
