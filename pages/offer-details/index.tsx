// import { GetServerSideProps } from "next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StyleProp, Text, ViewStyle } from "react-native";
import { CompositionAppBody } from "../../src/components/Compositions";
import DetailsDecisionButtons from "../../src/components/DetailsDecisionButtons/DetailsDecisionButtons";
import DetailsSection from "../../src/components/DetailsSection/DetailsSection";
import WarningSection from "../../src/components/WarningSection/WarningSection";
import ArrowLeftIcon from "../../src/style/svgs/chevron-left.svg";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../src/style/theme.config";
import PageContentWrapper from "../../src/components/PageContentWrapper";
import { AuthContext } from "../_app";
import Redirect from "../../src/components/Redirect";
// import Loader from "../../src/components/Loader/Loader";

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
  const { t } = useTranslation("offer-details");
  const { identity, loaded } = useContext(AuthContext);

  console.log({ loaded });
  console.log({ identity });

  if (loaded) {
    if (identity) {
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
              {isMatch ? (
                <WarningSection containerStyle={topMarginStyle} />
              ) : null}
              <DetailsSection containerStyle={bottomMarginStyle} />
              {isMatch ? <DetailsDecisionButtons /> : null}
            </>
          </PageContentWrapper>
        </CompositionAppBody>
      );
    } else {
      return <Redirect path="/signin"></Redirect>;
    }
  } else {
    // <Loader />;
    return <Text>Loading</Text>;
  }
}

// export const getServerSideProps: GetServerSideProps = withSession(
//   async ({ locale }, session) =>
//     redirectIfUnauthorized(session, {
//       props: {
//         session,
//         ...(locale && (await serverSideTranslations(locale))),
//       },
//     })
// );
