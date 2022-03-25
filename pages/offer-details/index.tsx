import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { StyleProp, ViewStyle } from "react-native";
import { CompositionAppBody } from "../../src/components/Compositions";
import DetailsDecisionButtons from "../../src/components/DetailsDecisionButtons/DetailsDecisionButtons";
import DetailsSection from "../../src/components/DetailsSection/DetailsSection";
import WarningSection from "../../src/components/WarningSection/WarningSection";
import { redirectIfUnauthorized } from "../../src/helpers/redirectIfUnauthorized";
import { withSession } from "../../src/helpers/withSession";
import ArrowLeftIcon from "../../src/style/svgs/chevron-left.svg";
import { InnerWrapper, ListingWrapper } from "../dashboard";
import { BackWrapper, BackText } from "./style";

const isMatch = true;

const topMarginStyle: StyleProp<ViewStyle> = { marginTop: 15 };

const bottomMarginStyle: StyleProp<ViewStyle> = { marginBottom: 15 };

export default function OfferDetails() {
  const router = useRouter();

  return (
    <CompositionAppBody>
      <ListingWrapper>
        <InnerWrapper>
          <BackWrapper
            onPress={() => {
              router.push("/dashboard");
            }}
          >
            <ArrowLeftIcon />
            <BackText>Back</BackText>
          </BackWrapper>
          {isMatch ? <WarningSection containerStyle={topMarginStyle} /> : null}
          <DetailsSection containerStyle={bottomMarginStyle} />
          {isMatch ? <DetailsDecisionButtons /> : null}
        </InnerWrapper>
      </ListingWrapper>
    </CompositionAppBody>
  );
}

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }, session) =>
    redirectIfUnauthorized(session, {
      props: {
        session,
        ...(locale && (await serverSideTranslations(locale))),
      },
    })
);