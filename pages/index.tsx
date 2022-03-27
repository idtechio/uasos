import styled, { css } from "styled-components/native";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CompositionAppBody } from "../src/components/Compositions";
import LandingProjectIntention from "../src/components/LandingProjectIntention";
import { HowDoesItWorkSection } from "../src/components/LandingSections/HowDoesItWorkSection";
import { LikeToHelpSection } from "../src/components/LikeToHelpSection";
import { LandingMatchedSection } from "../src/components/LandingMatchedSection";
import { PartnersSection } from "../src/components/PartnersSection";
import { Splash } from "../src/components/Slash";
import { withSession } from "../src/helpers/withSession";
import { GetServerSideProps } from "next";
import { Theme } from "../src/style/theme.config";

const LandingProjectIntentionWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

/** Top Left Yellow Splash */

const TopLeftYellowSplash = styled(Splash)`
  max-width: 512px;
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        max-width: 1512px;
      `,
    })}
`;

const TopLeftYellowSplashPosition = css`
  width: 180%;
  left: -60%;
  top: -50%;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        width: 100%;
        left: -32%;
        top: -33%;
      `,
    })}
`;

/** Top Right Blue Splash */

const TopRightBlueSplash = styled(Splash)`
  top: 412px;
  right: 0;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      default: css`
        max-width: 512px;
      `,
      lg: css`
        max-width: 1512px;
        top: 256px;
      `,
    })}
`;
const TopRightBlueSplashPosition = css`
  right: -50%;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        width: 50%;
        right: -10%;
      `,
    })}
`;

/** Middle Right Yellow Splash */

const MiddleRightYellowSplash = styled(Splash)`
  top: 1557px;
  right: 0;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      default: css`
        max-width: 512px;
      `,
      lg: css`
        max-width: 1512px;
        top: 920px;
      `,
    })}
`;
const MiddleRightYellowSplashPosition = css`
  right: -55%;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      lg: css`
        width: 60%;
        right: -35%;
      `,
    })}
`;

/** Bottom Left Blue Splash */

const BottomLeftBlueSplash = styled(Splash)`
  bottom: 0;
  right: 0;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      default: css`
        max-width: 512px;
      `,
      lg: css`
        overflow: hidden;
        max-width: 1512px;
      `,
    })}
`;
const BottomLeftBlueSplashPosition = css`
  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      default: css`
        right: -20%;
        bottom: 150px;
      `,
      lg: css`
        width: 60%;
        right: 0;
        bottom: -10%;
      `,
    })};
`;

function Landing() {
  return (
    <CompositionAppBody>
      <TopLeftYellowSplash
        color="yellow"
        // @ts-expect-error TODO: fix prop types
        splashPosition={TopLeftYellowSplashPosition}
      />
      <TopRightBlueSplash
        color="blue"
        // @ts-expect-error TODO: fix prop types
        splashPosition={TopRightBlueSplashPosition}
      />
      <MiddleRightYellowSplash
        color="yellow"
        // @ts-expect-error TODO: fix prop types
        splashPosition={MiddleRightYellowSplashPosition}
      />
      <BottomLeftBlueSplash
        color="blue"
        // @ts-expect-error TODO: fix prop types
        splashPosition={BottomLeftBlueSplashPosition}
      />
      <LandingProjectIntentionWrapper>
        <LandingProjectIntention />
      </LandingProjectIntentionWrapper>
      <PartnersSection />
      <HowDoesItWorkSection />
      <LikeToHelpSection>
        <LandingMatchedSection />
      </LikeToHelpSection>
    </CompositionAppBody>
  );
}

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) => ({
    props: {
      session,
      ...(locale && (await serverSideTranslations(locale))),
    },
  })
);

export default Landing;
