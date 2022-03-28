import styled from "styled-components/native";
import AppBack from "../src/components/AppBack";
import { CompositionAppBody } from "../src/components/Compositions";
import { Theme } from "../src/style/theme.config";
import EditUserProfileForm from "../src/components/EditUserProfileForm";
import PageContentWrapper from "../src/components/PageContentWrapper";
import { AuthContext } from "./_app";
import { useContext } from "react";
import Redirect from "../src/components/Redirect";
import { Text } from "react-native";
import { completeTranslation } from "../src/helpers/completeTranslation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withSession } from "../src/helpers/withSession";
import { GetServerSideProps } from "next";

const ContentContainer = styled.View`
  background-color: white;
  width: 100%;
  padding: 20px 15px 17px;
`;

const ScreenHeader = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;

  letter-spacing: 0.5px;

  color: ${({ theme }) => (theme as Theme).colors.figmaPalette.fontMain};
`;

const FormHeader = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: ${({ theme }) => (theme as Theme).colors.figmaPalette.fontMain};

  margin-top: 32px;
`;

interface EditProfileDTO {
  name?: string;
  preferredLanguage?: string;
  phone?: string;
  smsNotifications?: boolean;
  email: string;
}

export default function UserProfile() {
  const { identity, loaded } = useContext(AuthContext);
  if (loaded) {
    if (identity) {
      return (
        <CompositionAppBody>
          <PageContentWrapper>
            <AppBack to={"/dashboard"} />
            <EditUserProfileForm />
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
