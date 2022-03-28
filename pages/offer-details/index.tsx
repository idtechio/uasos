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
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Theme } from "../../src/style/theme.config";
import PageContentWrapper from "../../src/components/PageContentWrapper";

const isMatch = true;

const topMarginStyle: StyleProp<ViewStyle> = { marginTop: 15 };

const bottomMarginStyle: StyleProp<ViewStyle> = { marginBottom: 15 };

const BackWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-top: 18px;
`;

const BackText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.41px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  text-align: left;
`;

export default function OfferDetails() {
  const router = useRouter();

  return (
    <CompositionAppBody>
      <PageContentWrapper>
        <>
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
        </>
      </PageContentWrapper>
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
