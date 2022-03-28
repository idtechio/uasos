// import { GetServerSideProps } from "next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styled from "styled-components/native";
import AppBack from "../src/components/AppBack";
import { CompositionAppBody } from "../src/components/Compositions";
// import { redirectIfUnauthorized } from "../src/helpers/redirectIfUnauthorized";
// import { withSession } from "../src/helpers/withSession";
import { Theme } from "../src/style/theme.config";
// import { GetServerSideProps } from "next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import EditUserProfileForm from "../src/components/EditUserProfileForm";
import PageContentWrapper from "../src/components/PageContentWrapper";
// import { redirectIfUnauthorized } from "../src/helpers/redirectIfUnauthorized";
// import { withSession } from "../src/helpers/withSession";

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
  return (
    <CompositionAppBody>
      <PageContentWrapper>
        <AppBack to={"/dashboard"} />
        <EditUserProfileForm />
      </PageContentWrapper>
    </CompositionAppBody>
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
