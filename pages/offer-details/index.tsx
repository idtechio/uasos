// import { GetServerSideProps } from "next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StyleProp, ViewStyle } from "react-native";
import { CompositionAppBody } from "../../src/components/Compositions";
import DetailsDecisionButtons from "../../src/components/DetailsDecisionButtons/DetailsDecisionButtons";
import DetailsSection from "../../src/components/DetailsSection/DetailsSection";
import Redirect from "../../src/components/Redirect";
// import Redirect from "../../src/components/Redirect";
import WarningSection from "../../src/components/WarningSection/WarningSection";
import useAuth from "../../src/hooks/useAuth";
// import { Routes } from "../../src/consts/router";
// import { redirectIfUnauthorized } from "../../src/helpers/redirectIfUnauthorized";
// import { withSession } from "../../src/helpers/withSession";
import ArrowLeftIcon from "../../src/style/svgs/chevron-left.svg";
import { InnerWrapper, ListingWrapper } from "../dashboard";
import { AuthContext } from "../_app";
// import { InnerWrapper, ListingWrapper } from "../dashboard";
import { BackWrapper, BackText } from "./style";

const isMatch = true;

const topMarginStyle: StyleProp<ViewStyle> = { marginTop: 15 };

const bottomMarginStyle: StyleProp<ViewStyle> = { marginBottom: 15 };

export default function OfferDetails() {
  const router = useRouter();
  const { t } = useTranslation("offer-details");
  // const { identity } = useContext(AuthContext);
  const { identity } = useAuth();
  console.log({ identity });

  return (
    <>
      {identity ? (
        <CompositionAppBody>
          <ListingWrapper>
            <InnerWrapper>
              <BackWrapper
                onPress={() => {
                  router.push("/dashboard");
                }}
              >
                <ArrowLeftIcon />
                <BackText>{t("back")}</BackText>
              </BackWrapper>
              {isMatch ? (
                <WarningSection containerStyle={topMarginStyle} />
              ) : null}
              <DetailsSection containerStyle={bottomMarginStyle} />
              {isMatch ? <DetailsDecisionButtons /> : null}
            </InnerWrapper>
          </ListingWrapper>
        </CompositionAppBody>
      ) : (
        <Redirect path="/signin" />
      )}
    </>
  );
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
