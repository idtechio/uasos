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
import { GetServerSideProps } from "next";
import { completeTranslation } from "../../src/helpers/completeTranslation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withSession } from "../../src/helpers/withSession";
import { useOffersList } from "../../src/queries/useOffersList";
import { useRequestsList } from "../../src/queries/useRequestsList";
import { OfferProps } from "../api/listing/offers";
import { RequestProps } from "../api/listing/requests";

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
  const [dataToShow, setDataToShow] = React.useState<
    OfferProps | RequestProps | null
  >(null);
  const [isOffer, setIsOffer] = React.useState<boolean>(false);

  const { t } = useTranslation("offer-details");
  const { identity, loaded } = useContext(AuthContext);
  const router = useRouter();
  // const { id } = router.query;
  const id = "1114e25e-aae4-11ec-9a20-1726ed50bb17";
  const { data: offers } = useOffersList();
  const { data: requests } = useRequestsList();

  console.log({ offers });
  console.log({ requests });

  React.useEffect(() => {
    const data = offers?.offers.filter((el) => el.id === id)[0];
    if (data) {
      setDataToShow(data);
      setIsOffer(true);
    }
  }, [offers]);

  React.useEffect(() => {
    const data = requests?.requests.filter((el) => el.id === id)[0];
    if (data) {
      setDataToShow(data);
    }
  }, [requests]);

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
                <BackText>{t("back")}</BackText>
              </BackWrapper>
              {isMatch ? (
                <WarningSection containerStyle={topMarginStyle} />
              ) : null}
              <DetailsSection
                isOffer={isOffer}
                data={dataToShow}
                containerStyle={bottomMarginStyle}
              />
              {isMatch ? <DetailsDecisionButtons /> : null}
            </>
          </PageContentWrapper>
        </CompositionAppBody>
      );
    } else {
      return <Redirect path="/signin"></Redirect>;
    }
  } else {
    // TODO: add nice spinner
    return (
      <Text style={{ textAlign: "center", alignSelf: "center" }}>Loading</Text>
    );
  }
}

export const getServerSideProps: GetServerSideProps = withSession(
  async ({ locale }) =>
    completeTranslation({
      props: {
        ...(locale && (await serverSideTranslations(locale))),
      },
    })
);
